<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class HomePageMedia extends Model
{
    protected $table = 'home_page_media';

    protected $fillable = [
        'home_version',
        'section',
        'key',
        'file_path',
        'file_name',
        'file_type',
        'mime_type',
        'file_size',
        'alt_text',
        'order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
        'file_size' => 'integer',
    ];

    protected $appends = ['url'];

    /**
     * Get the full URL for the media
     */
    public function getUrlAttribute(): string
    {
        if (str_starts_with($this->file_path, 'http')) {
            return $this->file_path;
        }
        return Storage::disk('public')->url($this->file_path);
    }

    /**
     * Get media by section and key
     */
    public static function getMedia(string $section, string $key, string $homeVersion = 'home_two'): ?self
    {
        $cacheKey = "home_media_{$homeVersion}_{$section}_{$key}";
        
        return Cache::remember($cacheKey, 3600, function () use ($homeVersion, $section, $key) {
            return static::where('home_version', $homeVersion)
                ->where('section', $section)
                ->where('key', $key)
                ->where('is_active', true)
                ->first();
        });
    }

    /**
     * Get media URL by section and key
     */
    public static function getMediaUrl(string $section, string $key, string $homeVersion = 'home_two', string $default = ''): string
    {
        $media = static::getMedia($section, $key, $homeVersion);
        return $media?->url ?? $default;
    }

    /**
     * Get all media for a section
     */
    public static function getSectionMedia(string $section, string $homeVersion = 'home_two'): array
    {
        $cacheKey = "home_media_{$homeVersion}_{$section}_all";
        
        return Cache::remember($cacheKey, 3600, function () use ($homeVersion, $section) {
            $media = static::where('home_version', $homeVersion)
                ->where('section', $section)
                ->where('is_active', true)
                ->orderBy('order')
                ->get();
            
            $result = [];
            foreach ($media as $item) {
                $result[$item->key] = [
                    'url' => $item->url,
                    'alt' => $item->alt_text,
                    'type' => $item->file_type,
                ];
            }
            
            return $result;
        });
    }

    /**
     * Get all media for a home version
     */
    public static function getAllMedia(string $homeVersion = 'home_two'): array
    {
        $cacheKey = "home_media_{$homeVersion}_all";
        
        return Cache::remember($cacheKey, 3600, function () use ($homeVersion) {
            $mediaItems = static::where('home_version', $homeVersion)
                ->where('is_active', true)
                ->orderBy('section')
                ->orderBy('order')
                ->get();
            
            $result = [];
            foreach ($mediaItems as $media) {
                if (!isset($result[$media->section])) {
                    $result[$media->section] = [];
                }
                $result[$media->section][$media->key] = [
                    'url' => $media->url,
                    'alt' => $media->alt_text,
                    'type' => $media->file_type,
                ];
            }
            
            return $result;
        });
    }

    /**
     * Clear cache
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
                Cache::forget("home_media_{$homeVersion}_{$section}_{$key}");
            }
            Cache::forget("home_media_{$homeVersion}_{$section}_all");
        }
        
        Cache::forget("home_media_{$homeVersion}_all");
    }
}
