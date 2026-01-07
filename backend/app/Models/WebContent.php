<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;

class WebContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'section',
        'key',
        'type',
        'value_ar',
        'value_en',
        'description',
    ];

    public static function get(string $key, string $lang = 'ar', $default = null)
    {
        $cacheKey = "web_content_{$key}_{$lang}";
        
        return Cache::remember($cacheKey, 3600, function () use ($key, $lang, $default) {
            $content = self::where('key', $key)->first();
            
            if (!$content) {
                return $default;
            }

            return $lang === 'ar' ? ($content->value_ar ?? $default) : ($content->value_en ?? $content->value_ar ?? $default);
        });
    }

    public static function getBySection(string $section, string $lang = 'ar'): array
    {
        $cacheKey = "web_content_section_{$section}_{$lang}";
        
        return Cache::remember($cacheKey, 3600, function () use ($section, $lang) {
            return self::where('section', $section)
                ->get()
                ->mapWithKeys(function ($item) use ($lang) {
                    $value = $lang === 'ar' ? ($item->value_ar ?? $item->value_en) : ($item->value_en ?? $item->value_ar);
                    return [$item->key => $value];
                })
                ->toArray();
        });
    }

    protected static function booted()
    {
        static::saved(function ($model) {
            Cache::forget("web_content_{$model->key}_ar");
            Cache::forget("web_content_{$model->key}_en");
            Cache::forget("web_content_section_{$model->section}_ar");
            Cache::forget("web_content_section_{$model->section}_en");
        });
    }
}
