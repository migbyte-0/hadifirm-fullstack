<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class WebImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'section',
        'key',
        'image_path',
        'alt_text_ar',
        'alt_text_en',
        'description',
    ];

    public static function get(string $key): ?string
    {
        $cacheKey = "web_image_{$key}";
        
        return Cache::remember($cacheKey, 3600, function () use ($key) {
            $image = self::where('key', $key)->first();
            return $image ? Storage::url($image->image_path) : null;
        });
    }

    public static function getBySection(string $section): array
    {
        $cacheKey = "web_images_section_{$section}";
        
        return Cache::remember($cacheKey, 3600, function () use ($section) {
            return self::where('section', $section)
                ->get()
                ->mapWithKeys(function ($item) {
                    return [$item->key => [
                        'url' => Storage::url($item->image_path),
                        'alt_ar' => $item->alt_text_ar,
                        'alt_en' => $item->alt_text_en,
                    ]];
                })
                ->toArray();
        });
    }

    protected static function booted()
    {
        static::saved(function ($model) {
            Cache::forget("web_image_{$model->key}");
            Cache::forget("web_images_section_{$model->section}");
        });

        static::deleted(function ($model) {
            if ($model->image_path) {
                Storage::delete($model->image_path);
            }
            Cache::forget("web_image_{$model->key}");
            Cache::forget("web_images_section_{$model->section}");
        });
    }
}
