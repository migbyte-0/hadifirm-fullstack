<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WebContent;
use App\Models\WebImage;
use App\Models\Setting;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    /**
     * Get all web content for the frontend
     */
    public function getAllContent()
    {
        $content = WebContent::all()
            ->groupBy('section')
            ->map(function ($items) {
                return $items->pluck('content', 'key');
            });

        return response()->json([
            'success' => true,
            'data' => $content
        ]);
    }

    /**
     * Get content by section
     */
    public function getContentBySection(string $section)
    {
        $content = WebContent::where('section', $section)
            ->get()
            ->pluck('content', 'key');

        return response()->json([
            'success' => true,
            'data' => $content
        ]);
    }

    /**
     * Get all web images
     */
    public function getAllImages()
    {
        $images = WebImage::all()
            ->groupBy('section')
            ->map(function ($items) {
                return $items->mapWithKeys(function ($item) {
                    return [
                        $item->key => [
                            'url' => asset('storage/' . $item->image_path),
                            'alt' => $item->alt_text,
                        ]
                    ];
                });
            });

        return response()->json([
            'success' => true,
            'data' => $images
        ]);
    }

    /**
     * Get images by section
     */
    public function getImagesBySection(string $section)
    {
        $images = WebImage::where('section', $section)
            ->get()
            ->mapWithKeys(function ($item) {
                return [
                    $item->key => [
                        'url' => asset('storage/' . $item->image_path),
                        'alt' => $item->alt_text,
                    ]
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $images
        ]);
    }

    /**
     * Get all settings for the frontend
     */
    public function getAllSettings()
    {
        $settings = Setting::all()
            ->groupBy('group')
            ->map(function ($items) {
                return $items->pluck('value', 'key');
            });

        return response()->json([
            'success' => true,
            'data' => $settings
        ]);
    }

    /**
     * Get settings by group
     */
    public function getSettingsByGroup(string $group)
    {
        $settings = Setting::where('group', $group)
            ->get()
            ->pluck('value', 'key');

        return response()->json([
            'success' => true,
            'data' => $settings
        ]);
    }

    /**
     * Get a specific setting by key
     */
    public function getSetting(string $key)
    {
        $setting = Setting::where('key', $key)->first();

        if (!$setting) {
            return response()->json([
                'success' => false,
                'message' => 'Setting not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $setting->value
        ]);
    }
}
