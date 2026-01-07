<?php

namespace App\Filament\Widgets;

use App\Models\ConsultationRequest;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;

class RequestStatsWidget extends BaseWidget
{
    protected static ?int $sort = 2;

    protected function getStats(): array
    {
        $today = Carbon::today();
        
        // Pending requests
        $pendingRequests = ConsultationRequest::where('status', 'pending')->count();
        
        // Today's requests
        $todayRequests = ConsultationRequest::whereDate('created_at', $today)->count();
        
        // Accepted requests (this month)
        $acceptedRequests = ConsultationRequest::where('status', 'accepted')
            ->where('created_at', '>=', Carbon::now()->startOfMonth())
            ->count();
        
        // Rejected requests (this month)
        $rejectedRequests = ConsultationRequest::where('status', 'rejected')
            ->where('created_at', '>=', Carbon::now()->startOfMonth())
            ->count();

        // Total requests
        $totalRequests = ConsultationRequest::count();
        
        // Acceptance rate
        $processedRequests = ConsultationRequest::whereIn('status', ['accepted', 'rejected'])->count();
        $acceptanceRate = $processedRequests > 0 
            ? round(($acceptedRequests / $processedRequests) * 100) 
            : 0;

        return [
            Stat::make('طلبات معلقة', number_format($pendingRequests))
                ->description('تنتظر المراجعة')
                ->descriptionIcon('heroicon-m-clock')
                ->color('warning')
                ->extraAttributes([
                    'class' => 'cursor-pointer',
                    'wire:click' => "redirect('/admin/consultation-requests?tableFilters[status][value]=pending')",
                ]),

            Stat::make('طلبات اليوم', number_format($todayRequests))
                ->description('طلبات جديدة اليوم')
                ->descriptionIcon('heroicon-m-calendar')
                ->color('info'),

            Stat::make('طلبات مقبولة', number_format($acceptedRequests))
                ->description('هذا الشهر')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success'),

            Stat::make('معدل القبول', "{$acceptanceRate}%")
                ->description("من إجمالي {$totalRequests} طلب")
                ->descriptionIcon('heroicon-m-chart-pie')
                ->color($acceptanceRate >= 50 ? 'success' : 'danger'),
        ];
    }
}
