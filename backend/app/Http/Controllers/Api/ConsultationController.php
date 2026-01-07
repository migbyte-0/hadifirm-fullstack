<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ConsultationType;
use App\Models\AvailableSlot;
use App\Models\ConsultationRequest;
use App\Models\VisitorAnalytics;
use App\Models\WebContent;
use App\Models\WebImage;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;

class ConsultationController extends Controller
{
    /**
     * Get all consultation types
     */
    public function getConsultationTypes()
    {
        $types = ConsultationType::active()
            ->orderBy('sort_order')
            ->get(['id', 'name_ar', 'name_en', 'description_ar', 'description_en', 'icon']);

        return response()->json([
            'success' => true,
            'data' => $types
        ]);
    }

    /**
     * Get available slots for a specific date
     */
    public function getAvailableSlots(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date' => 'required|date|after_or_equal:today',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $date = Carbon::parse($request->date);

        // Get available slots for this date
        $slots = AvailableSlot::where('is_available', true)
            ->whereDate('date', $date)
            ->orderBy('start_time')
            ->get();

        // Get booked slots for this date
        $bookedSlots = ConsultationRequest::whereDate('appointment_date', $date)
            ->whereIn('status', ['pending', 'accepted'])
            ->pluck('appointment_time')
            ->map(fn($time) => Carbon::parse($time)->format('H:i'))
            ->toArray();

        // Filter out booked slots
        $availableSlots = $slots->map(function ($slot) use ($bookedSlots) {
            $startTime = Carbon::parse($slot->start_time)->format('H:i');
            $isBooked = in_array($startTime, $bookedSlots) || $slot->current_bookings >= $slot->max_bookings;
            
            return [
                'id' => $slot->id,
                'start_time' => $startTime,
                'end_time' => Carbon::parse($slot->end_time)->format('H:i'),
                'is_available' => !$isBooked,
                'display' => Carbon::parse($slot->start_time)->format('h:i A') . ' - ' . Carbon::parse($slot->end_time)->format('h:i A'),
            ];
        });

        return response()->json([
            'success' => true,
            'date' => $date->format('Y-m-d'),
            'day_name' => $date->translatedFormat('l'),
            'data' => $availableSlots
        ]);
    }

    /**
     * Get available dates for the next 30 days
     */
    public function getAvailableDates()
    {
        // Get distinct dates from available_slots table
        $dates = AvailableSlot::where('is_available', true)
            ->where('date', '>=', Carbon::today())
            ->select('date')
            ->distinct()
            ->orderBy('date')
            ->limit(30)
            ->get()
            ->map(function ($slot) {
                $date = Carbon::parse($slot->date);
                return [
                    'date' => $date->format('Y-m-d'),
                    'display' => $date->translatedFormat('D، j M'),
                    'day_name' => $date->translatedFormat('l'),
                ];
            })
            ->unique('date')
            ->values();

        return response()->json([
            'success' => true,
            'data' => $dates
        ]);
    }

    /**
     * Submit a consultation request
     */
    /**
     * Submit a consultation request
     */
    public function submitRequest(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'consultation_type' => 'required|string|max:255',
            'appointment_date' => 'required|date|after_or_equal:today',
            'appointment_time' => 'required|string',
            'notes' => 'nullable|string|max:1000',
        ], [
            'full_name.required' => 'الاسم مطلوب',
            'phone_number.required' => 'رقم الهاتف مطلوب',
            'consultation_type.required' => 'نوع الاستشارة مطلوب',
            'appointment_date.required' => 'التاريخ مطلوب',
            'appointment_date.after_or_equal' => 'يجب أن يكون التاريخ اليوم أو بعده',
            'appointment_time.required' => 'الوقت مطلوب',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Create the consultation request
        $consultationRequest = ConsultationRequest::create([
            'full_name' => $request->full_name,
            'phone_number' => $request->phone_number,
            'consultation_type' => $request->consultation_type,
            'appointment_date' => $request->appointment_date,
            'appointment_time' => $request->appointment_time,
            'notes' => $request->notes,
            'status' => 'pending',
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        // Update slot booking count
        $date = Carbon::parse($request->appointment_date);
        AvailableSlot::whereDate('date', $date)
            ->where('start_time', 'like', Carbon::parse($request->appointment_time)->format('H:i') . '%')
            ->increment('current_bookings');

        return response()->json([
            'success' => true,
            'message' => 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.',
            'data' => [
                'id' => $consultationRequest->id,
                'reference' => 'REQ-' . str_pad($consultationRequest->id, 6, '0', STR_PAD_LEFT),
            ]
        ], 201);
    }
}
