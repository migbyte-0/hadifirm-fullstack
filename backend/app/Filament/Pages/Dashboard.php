<?php

namespace App\Filament\Pages;

use App\Models\VisitorAnalytics;
use Filament\Actions\Action;
use Filament\Notifications\Notification;
use Filament\Pages\Dashboard as BaseDashboard;

class Dashboard extends BaseDashboard
{
    protected static ?string $navigationIcon = 'heroicon-o-home';
    
    protected static ?string $title = 'لوحة التحكم';

    protected function getHeaderActions(): array
    {
        return [
            Action::make('clearAnalytics')
                ->label('مسح بيانات الإحصائيات')
                ->icon('heroicon-o-trash')
                ->color('danger')
                ->requiresConfirmation()
                ->modalHeading('مسح جميع بيانات الإحصائيات')
                ->modalDescription('هل أنت متأكد من أنك تريد مسح جميع بيانات الزوار والإحصائيات؟ هذا الإجراء لا يمكن التراجع عنه.')
                ->modalSubmitActionLabel('نعم، امسح الكل')
                ->modalCancelActionLabel('إلغاء')
                ->action(function () {
                    $count = VisitorAnalytics::count();
                    VisitorAnalytics::truncate();
                    
                    Notification::make()
                        ->title('تم مسح البيانات بنجاح')
                        ->body("تم حذف {$count} سجل من بيانات الإحصائيات.")
                        ->success()
                        ->send();
                }),
        ];
    }
}
