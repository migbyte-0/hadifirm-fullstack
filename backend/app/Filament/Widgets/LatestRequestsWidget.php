<?php

namespace App\Filament\Widgets;

use App\Models\ConsultationRequest;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestRequestsWidget extends BaseWidget
{
    protected static ?string $heading = 'آخر الطلبات';

    protected static ?int $sort = 5;

    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                ConsultationRequest::query()
                    ->latest()
                    ->limit(5)
            )
            ->columns([
                Tables\Columns\TextColumn::make('full_name')
                    ->label('الاسم')
                    ->searchable(),

                Tables\Columns\TextColumn::make('phone_number')
                    ->label('الهاتف')
                    ->copyable()
                    ->copyMessage('تم نسخ الرقم'),

                Tables\Columns\TextColumn::make('consultation_type')
                    ->label('نوع الاستشارة')
                    ->badge()
                    ->color('info'),

                Tables\Columns\TextColumn::make('appointment_date')
                    ->label('التاريخ المطلوب')
                    ->date('Y-m-d'),

                Tables\Columns\TextColumn::make('appointment_time')
                    ->label('الوقت')
                    ->time('H:i'),

                Tables\Columns\TextColumn::make('status')
                    ->label('الحالة')
                    ->badge()
                    ->formatStateUsing(fn (?string $state): string => match ($state) {
                        'pending' => 'معلق',
                        'accepted' => 'مقبول',
                        'rejected' => 'مرفوض',
                        'completed' => 'مكتمل',
                        default => $state ?? 'معلق',
                    })
                    ->color(fn (?string $state): string => match ($state) {
                        'pending' => 'warning',
                        'accepted' => 'success',
                        'rejected' => 'danger',
                        'completed' => 'info',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('تاريخ الإنشاء')
                    ->dateTime('Y-m-d H:i')
                    ->sortable(),
            ])
            ->actions([
                Tables\Actions\Action::make('view')
                    ->label('عرض')
                    ->icon('heroicon-o-eye')
                    ->url(fn (ConsultationRequest $record): string => route('filament.admin.resources.consultation-requests.edit', $record)),
            ])
            ->paginated(false);
    }
}
