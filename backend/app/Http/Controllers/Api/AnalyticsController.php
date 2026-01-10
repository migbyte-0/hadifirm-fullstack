<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\VisitorAnalytics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AnalyticsController extends Controller
{
    /**
     * Track a page visit
     */
    public function trackVisit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'page' => 'required|string|max:255',
            'session_id' => 'required|string|max:255',
            'referrer' => 'nullable|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Check if this session already exists
        $analytics = VisitorAnalytics::where('session_id', $request->session_id)->first();

        if ($analytics) {
            // Update existing record - increment pages viewed
            $analytics->update([
                'pages_viewed' => $analytics->pages_viewed + 1,
            ]);
        } else {
            // Create new record
            $analytics = VisitorAnalytics::create([
                'session_id' => $request->session_id,
                'landing_page' => $request->page,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'referrer' => $request->referrer,
                'device_type' => $this->detectDeviceType($request->userAgent()),
                'browser' => $this->detectBrowser($request->userAgent()),
                'entered_at' => now(),
                'country' => null, // Can be implemented with GeoIP
                'city' => null,
            ]);
        }

        return response()->json([
            'success' => true,
            'visitor_id' => $analytics->id
        ]);
    }

    /**
     * Track time spent on page
     */
    public function trackTimeOnPage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'session_id' => 'required|string|max:255',
            'time_on_page' => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        VisitorAnalytics::where('session_id', $request->session_id)
            ->update([
                'time_on_site' => $request->time_on_page,
                'left_at' => now(),
            ]);

        return response()->json(['success' => true]);
    }

    /**
     * Track consultation button click
     */
    public function trackConsultationClick(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'session_id' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        VisitorAnalytics::where('session_id', $request->session_id)
            ->update([
                'clicked_consultation' => true,
                'consultation_clicked_at' => now(),
            ]);

        return response()->json(['success' => true]);
    }

    /**
     * Detect device type from user agent
     */
    private function detectDeviceType(?string $userAgent): string
    {
        if (!$userAgent) return 'unknown';
        
        $userAgent = strtolower($userAgent);
        
        if (preg_match('/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/i', $userAgent)) {
            return 'mobile';
        } elseif (preg_match('/tablet|ipad|playbook|silk/i', $userAgent)) {
            return 'tablet';
        }
        
        return 'desktop';
    }

    /**
     * Detect browser from user agent
     */
    private function detectBrowser(?string $userAgent): string
    {
        if (!$userAgent) return 'unknown';
        
        if (preg_match('/edge/i', $userAgent)) return 'Edge';
        if (preg_match('/chrome/i', $userAgent)) return 'Chrome';
        if (preg_match('/safari/i', $userAgent)) return 'Safari';
        if (preg_match('/firefox/i', $userAgent)) return 'Firefox';
        if (preg_match('/opera|opr/i', $userAgent)) return 'Opera';
        if (preg_match('/msie|trident/i', $userAgent)) return 'IE';
        
        return 'Other';
    }
}
