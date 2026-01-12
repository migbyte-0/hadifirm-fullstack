<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class HomePageContent extends Model
{
    protected $fillable = [
        'home_version',
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
    public static function getValue(string $section, string $key, string $homeVersion = 'home_two', $default = null): ?string
    {
        $cacheKey = "home_content_{$homeVersion}_{$section}_{$key}";
        
        return Cache::remember($cacheKey, 3600, function () use ($homeVersion, $section, $key, $default) {
            $content = static::where('home_version', $homeVersion)
                ->where('section', $section)
                ->where('key', $key)
                ->where('is_active', true)
                ->first();
            
            return $content?->value ?? $default;
        });
    }

    /**
     * Get all content for a section
     */
    public static function getSection(string $section, string $homeVersion = 'home_two'): array
    {
        $cacheKey = "home_content_{$homeVersion}_{$section}_all";
        
        return Cache::remember($cacheKey, 3600, function () use ($homeVersion, $section) {
            return static::where('home_version', $homeVersion)
                ->where('section', $section)
                ->where('is_active', true)
                ->orderBy('order')
                ->pluck('value', 'key')
                ->toArray();
        });
    }

    /**
     * Get all content for a home version
     */
    public static function getAllContent(string $homeVersion = 'home_two'): array
    {
        $cacheKey = "home_content_{$homeVersion}_all";
        
        return Cache::remember($cacheKey, 3600, function () use ($homeVersion) {
            $contents = static::where('home_version', $homeVersion)
                ->where('is_active', true)
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
    public static function setValue(string $section, string $key, string $value, string $homeVersion = 'home_two', string $type = 'text'): self
    {
        $content = static::updateOrCreate(
            [
                'home_version' => $homeVersion,
                'section' => $section,
                'key' => $key,
            ],
            [
                'value' => $value,
                'type' => $type,
            ]
        );

        // Clear cache
        Cache::forget("home_content_{$homeVersion}_{$section}_{$key}");
        Cache::forget("home_content_{$homeVersion}_{$section}_all");
        Cache::forget("home_content_{$homeVersion}_all");

        return $content;
    }

    /**
     * Clear all content cache
     */
    public static function clearCache(string $homeVersion = 'home_two'): void
    {
        $sections = static::where('home_version', $homeVersion)
            ->distinct()
            ->pluck('section');
        
        foreach ($sections as $section) {
            $keys = static::where('home_version', $homeVersion)
                ->where('section', $section)
                ->pluck('key');
            
            foreach ($keys as $key) {
                Cache::forget("home_content_{$homeVersion}_{$section}_{$key}");
            }
            Cache::forget("home_content_{$homeVersion}_{$section}_all");
        }
        
        Cache::forget("home_content_{$homeVersion}_all");
    }
}
