<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HomePageContent;
use App\Models\HomePageMedia;
use App\Models\HomePageItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HomePageController extends Controller
{
    /**
     * Get all content for a specific home version
     */
    public function getAllContent(string $homeVersion = 'home_two'): JsonResponse
    {
        $content = HomePageContent::getAllContent($homeVersion);
        $media = HomePageMedia::getAllMedia($homeVersion);
        $items = HomePageItem::getAllItems($homeVersion);

        return response()->json([
            'success' => true,
            'data' => [
                'content' => $content,
                'media' => $media,
                'items' => $items,
            ]
        ]);
    }

    /**
     * Get content for a specific section
     */
    public function getSection(string $homeVersion, string $section): JsonResponse
    {
        $content = HomePageContent::getSection($section, $homeVersion);
        $media = HomePageMedia::getSectionMedia($section, $homeVersion);
        $items = HomePageItem::getItems($section, $homeVersion);

        return response()->json([
            'success' => true,
            'data' => [
                'content' => $content,
                'media' => $media,
                'items' => $items,
            ]
        ]);
    }

    /**
     * Get only text content
     */
    public function getContent(string $homeVersion = 'home_two'): JsonResponse
    {
        $content = HomePageContent::getAllContent($homeVersion);

        return response()->json([
            'success' => true,
            'data' => $content
        ]);
    }

    /**
     * Get only media
     */
    public function getMedia(string $homeVersion = 'home_two'): JsonResponse
    {
        $media = HomePageMedia::getAllMedia($homeVersion);

        return response()->json([
            'success' => true,
            'data' => $media
        ]);
    }

    /**
     * Get only items (services, team, testimonials, etc.)
     */
    public function getItems(string $homeVersion = 'home_two'): JsonResponse
    {
        $items = HomePageItem::getAllItems($homeVersion);

        return response()->json([
            'success' => true,
            'data' => $items
        ]);
    }

    /**
     * Get items for a specific section
     */
    public function getSectionItems(string $homeVersion, string $section): JsonResponse
    {
        $items = HomePageItem::getItems($section, $homeVersion);

        return response()->json([
            'success' => true,
            'data' => $items
        ]);
    }
}
