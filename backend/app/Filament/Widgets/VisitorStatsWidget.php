<?php

namespace App\Filament\Widgets;

use App\Models\VisitorAnalytics;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;

class VisitorStatsWidget extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        $today = Carbon::today();
        $thisWeek = Carbon::now()->startOfWeek();
        $thisMonth = Carbon::now()->startOfMonth();

        // Today's visitors
        $todayVisitors = VisitorAnalytics::whereDate('created_at', $today)->count();
        $yesterdayVisitors = VisitorAnalytics::whereDate('created_at', $today->copy()->subDay())->count();
        $todayChange = $yesterdayVisitors > 0 
            ? round((($todayVisitors - $yesterdayVisitors) / $yesterdayVisitors) * 100) 
            : ($todayVisitors > 0 ? 100 : 0);

        // This week's visitors
        $weekVisitors = VisitorAnalytics::where('created_at', '>=', $thisWeek)->count();
        $lastWeekVisitors = VisitorAnalytics::whereBetween('created_at', [
            $thisWeek->copy()->subWeek(),
            $thisWeek
        ])->count();
        $weekChange = $lastWeekVisitors > 0 
            ? round((($weekVisitors - $lastWeekVisitors) / $lastWeekVisitors) * 100) 
            : ($weekVisitors > 0 ? 100 : 0);

        // This month's visitors
        $monthVisitors = VisitorAnalytics::where('created_at', '>=', $thisMonth)->count();
        $lastMonthVisitors = VisitorAnalytics::whereBetween('created_at', [
            $thisMonth->copy()->subMonth(),
            $thisMonth
        ])->count();
        $monthChange = $lastMonthVisitors > 0 
            ? round((($monthVisitors - $lastMonthVisitors) / $lastMonthVisitors) * 100) 
            : ($monthVisitors > 0 ? 100 : 0);

        // Total visitors
        $totalVisitors = VisitorAnalytics::count();

        return [
            Stat::make('زوار اليوم', number_format($todayVisitors))
                ->description($todayChange >= 0 ? "+{$todayChange}% عن أمس" : "{$todayChange}% عن أمس")
                ->descriptionIcon($todayChange >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
                ->color($todayChange >= 0 ? 'success' : 'danger')
                ->chart([7, 3, 4, 5, 6, 3, $todayVisitors > 0 ? $todayVisitors : 5]),

            Stat::make('زوار هذا الأسبوع', number_format($weekVisitors))
                ->description($weekChange >= 0 ? "+{$weekChange}% عن الأسبوع الماضي" : "{$weekChange}% عن الأسبوع الماضي")
                ->descriptionIcon($weekChange >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
                ->color($weekChange >= 0 ? 'success' : 'danger')
                ->chart([15, 20, 18, 25, 22, 28, $weekVisitors > 0 ? $weekVisitors : 30]),

            Stat::make('زوار هذا الشهر', number_format($monthVisitors))
                ->description($monthChange >= 0 ? "+{$monthChange}% عن الشهر الماضي" : "{$monthChange}% عن الشهر الماضي")
                ->descriptionIcon($monthChange >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
                ->color($monthChange >= 0 ? 'success' : 'danger')
                ->chart([50, 60, 70, 80, 75, 85, $monthVisitors > 0 ? $monthVisitors : 90]),

            Stat::make('إجمالي الزوار', number_format($totalVisitors))
                ->description('منذ بداية التشغيل')
                ->descriptionIcon('heroicon-m-users')
                ->color('info'),
        ];
    }
}
