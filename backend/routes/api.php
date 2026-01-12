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
Route::prefix('home-page')->group(function () {
    Route::get('/{homeVersion?}', [HomePageController::class, 'getAllContent'])->where('homeVersion', 'home_one|home_two|home_three|home_four|home_five');
    Route::get('/{homeVersion}/section/{section}', [HomePageController::class, 'getSection']);
    Route::get('/{homeVersion}/content', [HomePageController::class, 'getContent']);
    Route::get('/{homeVersion}/media', [HomePageController::class, 'getMedia']);
    Route::get('/{homeVersion}/items', [HomePageController::class, 'getItems']);
    Route::get('/{homeVersion}/items/{section}', [HomePageController::class, 'getSectionItems']);
});
