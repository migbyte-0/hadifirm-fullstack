<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'group',
        'key',
        'value',
        'type',
        'description',
    ];

    public static function get(string $key, $default = null)
    {
        $cacheKey = "setting_{$key}";
        
        return Cache::remember($cacheKey, 3600, function () use ($key, $default) {
            $setting = self::where('key', $key)->first();
            
            if (!$setting) {
                return $default;
            }

            return match ($setting->type) {
                'boolean' => filter_var($setting->value, FILTER_VALIDATE_BOOLEAN),
                'json' => json_decode($setting->value, true),
                default => $setting->value,
            };
        });
    }

    public static function set(string $key, $value, string $type = 'text', string $group = 'general'): void
    {
        $storeValue = is_array($value) ? json_encode($value) : $value;
        
        self::updateOrCreate(
            ['key' => $key],
            ['value' => $storeValue, 'type' => $type, 'group' => $group]
        );

        Cache::forget("setting_{$key}");
    }

    public static function getByGroup(string $group): array
    {
        $cacheKey = "settings_group_{$group}";
        
        return Cache::remember($cacheKey, 3600, function () use ($group) {
            return self::where('group', $group)
                ->get()
                ->mapWithKeys(function ($item) {
                    $value = match ($item->type) {
                        'boolean' => filter_var($item->value, FILTER_VALIDATE_BOOLEAN),
                        'json' => json_decode($item->value, true),
                        default => $item->value,
                    };
                    return [$item->key => $value];
                })
                ->toArray();
        });
    }

    protected static function booted()
    {
        static::saved(function ($model) {
            Cache::forget("setting_{$model->key}");
            Cache::forget("settings_group_{$model->group}");
        });
    }
}
