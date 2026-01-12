<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class ContactPageMedia extends Model
{
    protected $table = 'contact_page_media';

    protected $fillable = [
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
     * Get the URL for the media file
     */
    public function getUrlAttribute(): ?string
    {
        if (!$this->file_path) {
            return null;
        }
        
        if (str_starts_with($this->file_path, 'http')) {
            return $this->file_path;
        }
        
        return Storage::disk('public')->url($this->file_path);
    }

    /**
     * Get media by section and key
     */
    public static function getMedia(string $section, string $key): ?self
    {
        $cacheKey = "contact_media_{$section}_{$key}";
        
        return Cache::remember($cacheKey, 3600, function () use ($section, $key) {
            return static::where('section', $section)
                ->where('key', $key)
                ->where('is_active', true)
                ->first();
        });
    }

    /**
     * Get media URL by section and key
     */
    public static function getMediaUrl(string $section, string $key, ?string $default = null): ?string
    {
        $media = static::getMedia($section, $key);
        return $media?->url ?? $default;
    }

    /**
     * Get all media for a section
     */
    public static function getSectionMedia(string $section): array
    {
        $cacheKey = "contact_media_{$section}_all";
        
        return Cache::remember($cacheKey, 3600, function () use ($section) {
            $media = static::where('section', $section)
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
     * Get all contact page media
     */
    public static function getAllMedia(): array
    {
        $cacheKey = "contact_media_all";
        
        return Cache::remember($cacheKey, 3600, function () {
            $media = static::where('is_active', true)
                ->orderBy('section')
                ->orderBy('order')
                ->get();
            
            $result = [];
            foreach ($media as $item) {
                if (!isset($result[$item->section])) {
                    $result[$item->section] = [];
                }
                $result[$item->section][$item->key] = [
                    'url' => $item->url,
                    'alt' => $item->alt_text,
                    'type' => $item->file_type,
                ];
            }
            
            return $result;
        });
    }

    /**
     * Clear all contact media cache
     */
    public static function clearCache(): void
    {
        Cache::forget("contact_media_all");
        
        $sections = ['hero', 'info', 'map', 'footer'];
        foreach ($sections as $section) {
            Cache::forget("contact_media_{$section}_all");
        }
    }
}
