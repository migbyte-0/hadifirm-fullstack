<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class HomePageItem extends Model
{
    protected $fillable = [
        'home_version',
        'section',
        'content',
        'image_path',
        'icon_path',
        'order',
        'is_active',
    ];

    protected $casts = [
        'content' => 'array',
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    protected $appends = ['image_url', 'icon_url'];

    /**
     * Get full image URL
     */
    public function getImageUrlAttribute(): ?string
    {
        if (!$this->image_path) {
            return null;
        }
        if (str_starts_with($this->image_path, 'http')) {
            return $this->image_path;
        }
        return Storage::disk('public')->url($this->image_path);
    }

    /**
     * Get full icon URL
     */
    public function getIconUrlAttribute(): ?string
    {
        if (!$this->icon_path) {
            return null;
        }
        if (str_starts_with($this->icon_path, 'http')) {
            return $this->icon_path;
        }
        return Storage::disk('public')->url($this->icon_path);
    }

    /**
     * Get all items for a section
     */
    public static function getItems(string $section, string $homeVersion = 'home_two'): array
    {
        $cacheKey = "home_items_{$homeVersion}_{$section}";
        
        return Cache::remember($cacheKey, 3600, function () use ($homeVersion, $section) {
            return static::where('home_version', $homeVersion)
                ->where('section', $section)
                ->where('is_active', true)
                ->orderBy('order')
                ->get()
                ->map(function ($item) {
                    return array_merge($item->content, [
                        'id' => $item->id,
                        'image_url' => $item->image_url,
                        'icon_url' => $item->icon_url,
                        'order' => $item->order,
                    ]);
                })
                ->toArray();
        });
    }

    /**
     * Get all items for a home version
     */
    public static function getAllItems(string $homeVersion = 'home_two'): array
    {
        $cacheKey = "home_items_{$homeVersion}_all";
        
        return Cache::remember($cacheKey, 3600, function () use ($homeVersion) {
            $items = static::where('home_version', $homeVersion)
                ->where('is_active', true)
                ->orderBy('section')
                ->orderBy('order')
                ->get();
            
            $result = [];
            foreach ($items as $item) {
                if (!isset($result[$item->section])) {
                    $result[$item->section] = [];
                }
                $result[$item->section][] = array_merge($item->content, [
                    'id' => $item->id,
                    'image_url' => $item->image_url,
                    'icon_url' => $item->icon_url,
                    'order' => $item->order,
                ]);
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
            Cache::forget("home_items_{$homeVersion}_{$section}");
        }
        
        Cache::forget("home_items_{$homeVersion}_all");
    }
}
