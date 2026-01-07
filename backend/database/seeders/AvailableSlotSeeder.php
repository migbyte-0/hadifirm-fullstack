<?php

namespace Database\Seeders;

use App\Models\AvailableSlot;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class AvailableSlotSeeder extends Seeder
{
    public function run(): void
    {
        $timeSlots = [
            ['start' => '09:00', 'end' => '09:30'],
            ['start' => '09:30', 'end' => '10:00'],
            ['start' => '10:00', 'end' => '10:30'],
            ['start' => '10:30', 'end' => '11:00'],
            ['start' => '11:00', 'end' => '11:30'],
            ['start' => '11:30', 'end' => '12:00'],
            // Break 12:00 - 13:00
            ['start' => '13:00', 'end' => '13:30'],
            ['start' => '13:30', 'end' => '14:00'],
            ['start' => '14:00', 'end' => '14:30'],
            ['start' => '14:30', 'end' => '15:00'],
            ['start' => '15:00', 'end' => '15:30'],
            ['start' => '15:30', 'end' => '16:00'],
            ['start' => '16:00', 'end' => '16:30'],
            ['start' => '16:30', 'end' => '17:00'],
        ];

        // Create slots for the next 30 days (excluding Friday and Saturday)
        $today = Carbon::today();
        
        for ($i = 0; $i < 30; $i++) {
            $date = $today->copy()->addDays($i);
            $dayOfWeek = $date->dayOfWeek;
            
            // Skip Friday (5) and Saturday (6)
            if ($dayOfWeek === 5 || $dayOfWeek === 6) {
                continue;
            }

            foreach ($timeSlots as $slot) {
                AvailableSlot::create([
                    'date' => $date->format('Y-m-d'),
                    'start_time' => $slot['start'],
                    'end_time' => $slot['end'],
                    'max_bookings' => 1,
                    'current_bookings' => 0,
                    'is_available' => true,
                ]);
            }
        }
    }
}
