<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class ContactPageItem extends Model
{
    protected $fillable = [
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
     * Get the URL for the image
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
     * Get the URL for the icon
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
     * Get items by section
     */
    public static function getItems(string $section): array
    {
        $cacheKey = "contact_items_{$section}";
        
        return Cache::remember($cacheKey, 3600, function () use ($section) {
            return static::where('section', $section)
                ->where('is_active', true)
                ->orderBy('order')
                ->get()
                ->map(function ($item) {
                    return array_merge($item->content ?? [], [
                        'id' => $item->id,
                        'image_url' => $item->image_url,
                        'icon_url' => $item->icon_url,
                    ]);
                })
                ->toArray();
        });
    }

    /**
     * Get all contact page items
     */
    public static function getAllItems(): array
    {
        $cacheKey = "contact_items_all";
        
        return Cache::remember($cacheKey, 3600, function () {
            $items = static::where('is_active', true)
                ->orderBy('section')
                ->orderBy('order')
                ->get();
            
            $result = [];
            foreach ($items as $item) {
                if (!isset($result[$item->section])) {
                    $result[$item->section] = [];
                }
                $result[$item->section][] = array_merge($item->content ?? [], [
                    'id' => $item->id,
                    'image_url' => $item->image_url,
                    'icon_url' => $item->icon_url,
                ]);
            }
            
            return $result;
        });
    }

    /**
     * Clear all contact items cache
     */
    public static function clearCache(): void
    {
        Cache::forget("contact_items_all");
        
        $sections = ['offices', 'social_links', 'quick_links', 'counters'];
        foreach ($sections as $section) {
            Cache::forget("contact_items_{$section}");
        }
    }
}
