<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;

class WhatsappTemplate extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'key',
        'message_ar',
        'message_en',
        'description',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public static function getMessage(string $key, string $lang = 'ar', array $replacements = []): ?string
    {
        $cacheKey = "whatsapp_template_{$key}_{$lang}";
        
        $message = Cache::remember($cacheKey, 3600, function () use ($key, $lang) {
            $template = self::where('key', $key)->where('is_active', true)->first();
            
            if (!$template) {
                return null;
            }

            return $lang === 'ar' ? $template->message_ar : ($template->message_en ?? $template->message_ar);
        });

        if (!$message) {
            return null;
        }

        // Replace placeholders like {name}, {phone}, etc.
        foreach ($replacements as $placeholder => $value) {
            $message = str_replace('{' . $placeholder . '}', $value, $message);
        }

        return $message;
    }

    protected static function booted()
    {
        static::saved(function ($model) {
            Cache::forget("whatsapp_template_{$model->key}_ar");
            Cache::forget("whatsapp_template_{$model->key}_en");
        });
    }
}
