<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ConsultationRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'phone_number',
        'consultation_type',
        'appointment_date',
        'appointment_time',
        'status',
        'notes',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'appointment_date' => 'date',
        'appointment_time' => 'datetime:H:i',
    ];

    public function getStatusBadgeColorAttribute(): string
    {
        return match ($this->status) {
            'pending' => 'warning',
            'accepted' => 'success',
            'rejected' => 'danger',
            default => 'gray',
        };
    }

    public function getStatusLabelAttribute(): string
    {
        return match ($this->status) {
            'pending' => 'قيد الانتظار',
            'accepted' => 'مقبول',
            'rejected' => 'مرفوض',
            default => $this->status,
        };
    }

    public function getWhatsAppLink(string $message): string
    {
        $phone = preg_replace('/[^0-9]/', '', $this->phone_number);
        if (!str_starts_with($phone, '966')) {
            $phone = '966' . ltrim($phone, '0');
        }
        return 'https://wa.me/' . $phone . '?text=' . urlencode($message);
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeAccepted($query)
    {
        return $query->where('status', 'accepted');
    }

    public function scopeRejected($query)
    {
        return $query->where('status', 'rejected');
    }

    public function scopeToday($query)
    {
        return $query->whereDate('created_at', today());
    }
}
