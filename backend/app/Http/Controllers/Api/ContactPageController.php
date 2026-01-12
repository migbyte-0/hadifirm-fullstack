<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactPageContent;
use App\Models\ContactPageMedia;
use App\Models\ContactPageItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactPageController extends Controller
{
    /**
     * Get all contact page content
     */
    public function getAllContent(): JsonResponse
    {
        try {
            $content = ContactPageContent::getAllContent();
            $media = ContactPageMedia::getAllMedia();
            $items = ContactPageItem::getAllItems();

            return response()->json([
                'success' => true,
                'data' => [
                    'content' => $content,
                    'media' => $media,
                    'items' => $items,
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'فشل في تحميل محتوى صفحة التواصل',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Get content for a specific section
     */
    public function getSection(string $section): JsonResponse
    {
        try {
            $content = ContactPageContent::getSection($section);
            $media = ContactPageMedia::getSectionMedia($section);
            $items = ContactPageItem::getItems($section);

            return response()->json([
                'success' => true,
                'data' => [
                    'content' => $content,
                    'media' => $media,
                    'items' => $items,
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'فشل في تحميل محتوى القسم',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Get only text content
     */
    public function getContent(): JsonResponse
    {
        try {
            $content = ContactPageContent::getAllContent();

            return response()->json([
                'success' => true,
                'data' => $content
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'فشل في تحميل المحتوى النصي',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Get only media
     */
    public function getMedia(): JsonResponse
    {
        try {
            $media = ContactPageMedia::getAllMedia();

            return response()->json([
                'success' => true,
                'data' => $media
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'فشل في تحميل الوسائط',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Get only items
     */
    public function getItems(): JsonResponse
    {
        try {
            $items = ContactPageItem::getAllItems();

            return response()->json([
                'success' => true,
                'data' => $items
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'فشل في تحميل العناصر',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Get items for a specific section
     */
    public function getSectionItems(string $section): JsonResponse
    {
        try {
            $items = ContactPageItem::getItems($section);

            return response()->json([
                'success' => true,
                'data' => $items
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'فشل في تحميل عناصر القسم',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }
}
