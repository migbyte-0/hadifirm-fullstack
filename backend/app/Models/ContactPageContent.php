<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class ContactPageContent extends Model
{
    protected $fillable = [
        'section',
        'key',
        'value',
        'type',
        'order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    /**
     * Get content value by section and key
     */
    public static function getValue(string $section, string $key, $default = null): ?string
    {
        $cacheKey = "contact_content_{$section}_{$key}";
        
        return Cache::remember($cacheKey, 3600, function () use ($section, $key, $default) {
            $content = static::where('section', $section)
                ->where('key', $key)
                ->where('is_active', true)
                ->first();
            
            return $content?->value ?? $default;
        });
    }

    /**
     * Get all content for a section
     */
    public static function getSection(string $section): array
    {
        $cacheKey = "contact_content_{$section}_all";
        
        return Cache::remember($cacheKey, 3600, function () use ($section) {
            return static::where('section', $section)
                ->where('is_active', true)
                ->orderBy('order')
                ->pluck('value', 'key')
                ->toArray();
        });
    }

    /**
     * Get all contact page content
     */
    public static function getAllContent(): array
    {
        $cacheKey = "contact_content_all";
        
        return Cache::remember($cacheKey, 3600, function () {
            $contents = static::where('is_active', true)
                ->orderBy('section')
                ->orderBy('order')
                ->get();
            
            $result = [];
            foreach ($contents as $content) {
                if (!isset($result[$content->section])) {
                    $result[$content->section] = [];
                }
                $result[$content->section][$content->key] = $content->value;
            }
            
            return $result;
        });
    }

    /**
     * Set content value
     */
    public static function setValue(string $section, string $key, string $value, string $type = 'text'): self
    {
        $content = static::updateOrCreate(
            [
                'section' => $section,
                'key' => $key,
            ],
            [
                'value' => $value,
                'type' => $type,
            ]
        );
        
        static::clearCache();
        
        return $content;
    }

    /**
     * Clear all contact content cache
     */
    public static function clearCache(): void
    {
        Cache::forget("contact_content_all");
        
        $sections = ['hero', 'info', 'counter', 'footer', 'map'];
        foreach ($sections as $section) {
            Cache::forget("contact_content_{$section}_all");
        }
    }
}
