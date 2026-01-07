<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class VisitorAnalytics extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'ip_address',
        'user_agent',
        'country',
        'city',
        'device_type',
        'browser',
        'os',
        'referrer',
        'landing_page',
        'entered_at',
        'left_at',
        'time_on_site',
        'clicked_consultation',
        'consultation_clicked_at',
        'pages_viewed',
    ];

    protected $casts = [
        'entered_at' => 'datetime',
        'left_at' => 'datetime',
        'consultation_clicked_at' => 'datetime',
        'clicked_consultation' => 'boolean',
    ];

    public function scopeToday($query)
    {
        return $query->whereDate('entered_at', today());
    }

    public function scopeThisWeek($query)
    {
        return $query->whereBetween('entered_at', [now()->startOfWeek(), now()->endOfWeek()]);
    }

    public function scopeThisMonth($query)
    {
        return $query->whereMonth('entered_at', now()->month)
            ->whereYear('entered_at', now()->year);
    }

    public function scopeClickedConsultation($query)
    {
        return $query->where('clicked_consultation', true);
    }
}
