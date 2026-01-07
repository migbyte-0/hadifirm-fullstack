<?php

namespace App\Filament\Widgets;

use App\Models\VisitorAnalytics;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Carbon;

class VisitorChartWidget extends ChartWidget
{
    protected static ?string $heading = 'إحصائيات الزوار - آخر 7 أيام';

    protected static ?int $sort = 4;

    protected function getData(): array
    {
        $data = collect();
        $labels = collect();

        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i);
            $labels->push($date->translatedFormat('D'));
            
            $visitors = VisitorAnalytics::whereDate('created_at', $date)->count();
            $data->push($visitors);
        }

        return [
            'datasets' => [
                [
                    'label' => 'الزوار',
                    'data' => $data->toArray(),
                    'backgroundColor' => 'rgba(216, 154, 38, 0.2)',
                    'borderColor' => 'rgb(216, 154, 38)',
                    'borderWidth' => 2,
                    'fill' => true,
                    'tension' => 0.3,
                ],
            ],
            'labels' => $labels->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }

    protected function getOptions(): array
    {
        return [
            'plugins' => [
                'legend' => [
                    'display' => true,
                    'labels' => [
                        'font' => [
                            'family' => 'Tajawal',
                        ],
                    ],
                ],
            ],
            'scales' => [
                'y' => [
                    'beginAtZero' => true,
                    'ticks' => [
                        'font' => [
                            'family' => 'Tajawal',
                        ],
                    ],
                ],
                'x' => [
                    'ticks' => [
                        'font' => [
                            'family' => 'Tajawal',
                        ],
                    ],
                ],
            ],
        ];
    }
}
