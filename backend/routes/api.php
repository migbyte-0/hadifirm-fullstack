<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ConsultationController;
use App\Http\Controllers\Api\AnalyticsController;
use App\Http\Controllers\Api\ContentController;
use App\Http\Controllers\Api\HomePageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Consultation Routes
Route::prefix('consultation')->group(function () {
    Route::get('/types', [ConsultationController::class, 'getConsultationTypes']);
    Route::get('/available-dates', [ConsultationController::class, 'getAvailableDates']);
    Route::get('/available-slots', [ConsultationController::class, 'getAvailableSlots']);
    Route::post('/submit', [ConsultationController::class, 'submitRequest']);
});

// Analytics Routes
Route::prefix('analytics')->group(function () {
    Route::post('/visit', [AnalyticsController::class, 'trackVisit']);
    Route::post('/time', [AnalyticsController::class, 'trackTimeOnPage']);
    Route::post('/consultation-click', [AnalyticsController::class, 'trackConsultationClick']);
});

// Content Routes
Route::prefix('content')->group(function () {
    Route::get('/', [ContentController::class, 'getAllContent']);
    Route::get('/section/{section}', [ContentController::class, 'getContentBySection']);
    Route::get('/images', [ContentController::class, 'getAllImages']);
    Route::get('/images/{section}', [ContentController::class, 'getImagesBySection']);
});

// Settings Routes
Route::prefix('settings')->group(function () {
    Route::get('/', [ContentController::class, 'getAllSettings']);
    Route::get('/group/{group}', [ContentController::class, 'getSettingsByGroup']);
    Route::get('/{key}', [ContentController::class, 'getSetting']);
});

// Home Page Content Routes (CMS)
Route::get('/home-page/content/{homeVersion}', [HomePageController::class, 'getAllContent']);
Route::get('/home-page/section/{homeVersion}/{section}', [HomePageController::class, 'getSection']);
Route::get('/home-page/text/{homeVersion}', [HomePageController::class, 'getContent']);
Route::get('/home-page/media/{homeVersion}', [HomePageController::class, 'getMedia']);
Route::get('/home-page/items/{homeVersion}', [HomePageController::class, 'getItems']);
Route::get('/home-page/items/{homeVersion}/{section}', [HomePageController::class, 'getSectionItems']);

// Debug endpoint to check database status
Route::get('/home-page/debug', function() {
    $tables = \Illuminate\Support\Facades\DB::select("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    $contentCount = \Illuminate\Support\Facades\DB::table('home_page_contents')->count();
    $itemsCount = \Illuminate\Support\Facades\DB::table('home_page_items')->count();
    return response()->json([
        'tables' => array_map(fn($t) => $t->table_name, $tables),
        'content_count' => $contentCount,
        'items_count' => $itemsCount,
    ]);
});
