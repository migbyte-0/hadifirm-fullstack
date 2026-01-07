<?php

namespace App\Filament\Widgets;

use App\Models\VisitorAnalytics;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;

class EngagementStatsWidget extends BaseWidget
{
    protected static ?int $sort = 3;

    protected function getStats(): array
    {
        $thisMonth = Carbon::now()->startOfMonth();
        
        // Consultation button clicks (this month)
        $consultationClicks = VisitorAnalytics::where('created_at', '>=', $thisMonth)
            ->where('clicked_consultation', true)
            ->count();
        
        // Total visitors this month
        $monthVisitors = VisitorAnalytics::where('created_at', '>=', $thisMonth)->count();
        
        // Click-through rate
        $clickRate = $monthVisitors > 0 
            ? round(($consultationClicks / $monthVisitors) * 100, 1) 
            : 0;

        // Average time on page (in seconds)
        $avgTimeOnPage = VisitorAnalytics::where('created_at', '>=', $thisMonth)
            ->whereNotNull('time_on_page')
            ->avg('time_on_page');
        $avgTimeFormatted = $avgTimeOnPage 
            ? gmdate('i:s', (int) $avgTimeOnPage) 
            : '00:00';

        // Visitors who stayed more than 30 seconds
        $engagedVisitors = VisitorAnalytics::where('created_at', '>=', $thisMonth)
            ->where('time_on_page', '>=', 30)
            ->count();
        
        $engagementRate = $monthVisitors > 0 
            ? round(($engagedVisitors / $monthVisitors) * 100) 
            : 0;

        // Bounce rate (visitors who left within 10 seconds)
        $bouncedVisitors = VisitorAnalytics::where('created_at', '>=', $thisMonth)
            ->where(function ($query) {
                $query->whereNull('time_on_page')
                    ->orWhere('time_on_page', '<', 10);
            })
            ->count();
        
        $bounceRate = $monthVisitors > 0 
            ? round(($bouncedVisitors / $monthVisitors) * 100) 
            : 0;

        return [
            Stat::make('نقرات زر الاستشارة', number_format($consultationClicks))
                ->description("معدل النقر: {$clickRate}%")
                ->descriptionIcon('heroicon-m-cursor-arrow-rays')
                ->color('success')
                ->chart([5, 8, 12, 15, 10, 18, $consultationClicks > 0 ? $consultationClicks : 20]),

            Stat::make('متوسط وقت الزيارة', $avgTimeFormatted)
                ->description('دقيقة:ثانية')
                ->descriptionIcon('heroicon-m-clock')
                ->color('info'),

            Stat::make('معدل التفاعل', "{$engagementRate}%")
                ->description("زوار بقوا +30 ثانية")
                ->descriptionIcon('heroicon-m-fire')
                ->color($engagementRate >= 40 ? 'success' : 'warning'),

            Stat::make('معدل الارتداد', "{$bounceRate}%")
                ->description('غادروا خلال 10 ثواني')
                ->descriptionIcon('heroicon-m-arrow-uturn-left')
                ->color($bounceRate <= 30 ? 'success' : 'danger'),
        ];
    }
}
