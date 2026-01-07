<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class AvailableSlot extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'start_time',
        'end_time',
        'max_bookings',
        'current_bookings',
        'is_available',
    ];

    protected $casts = [
        'date' => 'date',
        'is_available' => 'boolean',
    ];

    public function scopeAvailable($query)
    {
        return $query->where('is_available', true)
            ->where('date', '>=', today())
            ->whereColumn('current_bookings', '<', 'max_bookings');
    }

    public function scopeUpcoming($query)
    {
        return $query->where('date', '>=', today())
            ->orderBy('date')
            ->orderBy('start_time');
    }

    public function getIsFullAttribute(): bool
    {
        return $this->current_bookings >= $this->max_bookings;
    }

    public function getFormattedTimeAttribute(): string
    {
        return Carbon::parse($this->start_time)->format('h:i A') . ' - ' . Carbon::parse($this->end_time)->format('h:i A');
    }

    public function incrementBooking(): bool
    {
        if ($this->is_full) {
            return false;
        }

        $this->increment('current_bookings');
        return true;
    }
}
