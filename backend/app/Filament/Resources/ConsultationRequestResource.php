<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ConsultationRequestResource\Pages;
use App\Models\ConsultationRequest;
use App\Models\WhatsappTemplate;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Notifications\Notification;
use Filament\Tables\Actions\Action;

class ConsultationRequestResource extends Resource
{
    protected static ?string $model = ConsultationRequest::class;

    protected static ?string $navigationIcon = 'heroicon-o-inbox-stack';
    
    protected static ?string $navigationLabel = 'طلبات الاستشارة';
    
    protected static ?string $modelLabel = 'طلب استشارة';
    
    protected static ?string $pluralModelLabel = 'طلبات الاستشارة';

    protected static ?string $navigationGroup = 'الطلبات';

    protected static ?int $navigationSort = 1;

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('status', 'pending')->count() ?: null;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'warning';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('معلومات العميل')
                    ->schema([
                        Forms\Components\TextInput::make('full_name')
                            ->label('الاسم الكامل')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('phone_number')
                            ->label('رقم الهاتف')
                            ->tel()
                            ->required()
                            ->maxLength(20),
                    ])->columns(2),

                Forms\Components\Section::make('تفاصيل الموعد')
                    ->schema([
                        Forms\Components\TextInput::make('consultation_type')
                            ->label('نوع الاستشارة')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\DatePicker::make('appointment_date')
                            ->label('تاريخ الموعد')
                            ->required(),
                        Forms\Components\TimePicker::make('appointment_time')
                            ->label('وقت الموعد')
                            ->required(),
                    ])->columns(3),

                Forms\Components\Section::make('حالة الطلب')
                    ->schema([
                        Forms\Components\Select::make('status')
                            ->label('الحالة')
                            ->options([
                                'pending' => 'قيد الانتظار',
                                'accepted' => 'مقبول',
                                'rejected' => 'مرفوض',
                            ])
                            ->required()
                            ->native(false),
                        Forms\Components\Textarea::make('notes')
                            ->label('ملاحظات')
                            ->rows(3)
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('#')
                    ->sortable(),
                Tables\Columns\TextColumn::make('full_name')
                    ->label('الاسم')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('phone_number')
                    ->label('الهاتف')
                    ->searchable()
                    ->copyable()
                    ->copyMessage('تم نسخ الرقم'),
                Tables\Columns\TextColumn::make('consultation_type')
                    ->label('نوع الاستشارة')
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('appointment_date')
                    ->label('التاريخ')
                    ->date('Y/m/d')
                    ->sortable(),
                Tables\Columns\TextColumn::make('appointment_time')
                    ->label('الوقت')
                    ->time('h:i A'),
                Tables\Columns\BadgeColumn::make('status')
                    ->label('الحالة')
                    ->colors([
                        'warning' => 'pending',
                        'success' => 'accepted',
                        'danger' => 'rejected',
                    ])
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'pending' => 'قيد الانتظار',
                        'accepted' => 'مقبول',
                        'rejected' => 'مرفوض',
                        default => $state,
                    }),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('تاريخ الطلب')
                    ->dateTime('Y/m/d h:i A')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->label('الحالة')
                    ->options([
                        'pending' => 'قيد الانتظار',
                        'accepted' => 'مقبول',
                        'rejected' => 'مرفوض',
                    ]),
                Tables\Filters\Filter::make('today')
                    ->label('طلبات اليوم')
                    ->query(fn ($query) => $query->whereDate('created_at', today())),
            ])
            ->actions([
                Action::make('accept')
                    ->label('قبول')
                    ->icon('heroicon-o-check-circle')
                    ->color('success')
                    ->requiresConfirmation()
                    ->modalHeading('قبول الطلب')
                    ->modalDescription('هل أنت متأكد من قبول هذا الطلب؟ سيتم فتح واتساب لإرسال رسالة للعميل.')
                    ->modalSubmitActionLabel('نعم، قبول وإرسال')
                    ->visible(fn (ConsultationRequest $record) => $record->status === 'pending')
                    ->action(function (ConsultationRequest $record) {
                        $record->update(['status' => 'accepted']);
                        
                        $message = WhatsappTemplate::getMessage('accept_request', 'ar', [
                            'name' => $record->full_name,
                            'date' => $record->appointment_date->format('Y/m/d'),
                            'time' => $record->appointment_time->format('h:i A'),
                            'consultation_type' => $record->consultation_type,
                        ]) ?? "مرحباً {$record->full_name}، تم قبول طلب الاستشارة الخاص بك. موعدك: {$record->appointment_date->format('Y/m/d')} الساعة {$record->appointment_time->format('h:i A')}";
                        
                        $whatsappUrl = $record->getWhatsAppLink($message);
                        
                        Notification::make()
                            ->title('تم قبول الطلب')
                            ->success()
                            ->send();

                        return redirect()->away($whatsappUrl);
                    }),

                Action::make('reject')
                    ->label('رفض')
                    ->icon('heroicon-o-x-circle')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->modalHeading('رفض الطلب')
                    ->modalDescription('هل أنت متأكد من رفض هذا الطلب؟')
                    ->visible(fn (ConsultationRequest $record) => $record->status === 'pending')
                    ->action(function (ConsultationRequest $record) {
                        $record->update(['status' => 'rejected']);
                        
                        Notification::make()
                            ->title('تم رفض الطلب')
                            ->warning()
                            ->send();
                    }),

                Action::make('share')
                    ->label('مشاركة')
                    ->icon('heroicon-o-share')
                    ->color('info')
                    ->action(function (ConsultationRequest $record) {
                        $message = WhatsappTemplate::getMessage('share_request', 'ar', [
                            'name' => $record->full_name,
                            'phone' => $record->phone_number,
                            'date' => $record->appointment_date->format('Y/m/d'),
                            'time' => $record->appointment_time->format('h:i A'),
                            'consultation_type' => $record->consultation_type,
                            'notes' => $record->notes ?? 'لا توجد ملاحظات',
                            'status' => $record->status_label,
                        ]) ?? "طلب استشارة جديد:\nالاسم: {$record->full_name}\nالهاتف: {$record->phone_number}\nالنوع: {$record->consultation_type}\nالتاريخ: {$record->appointment_date->format('Y/m/d')}\nالوقت: {$record->appointment_time->format('h:i A')}";
                        
                        $whatsappUrl = 'https://wa.me/?text=' . urlencode($message);
                        
                        return redirect()->away($whatsappUrl);
                    }),

                Tables\Actions\ViewAction::make()
                    ->label('عرض'),
                Tables\Actions\EditAction::make()
                    ->label('تعديل'),
                Tables\Actions\DeleteAction::make()
                    ->label('حذف')
                    ->requiresConfirmation()
                    ->modalHeading('حذف الطلب')
                    ->modalDescription('هل أنت متأكد من حذف هذا الطلب نهائياً؟'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->label('حذف المحدد')
                        ->modalHeading('حذف الطلبات المحددة')
                        ->modalDescription('هل أنت متأكد من حذف جميع الطلبات المحددة؟')
                        ->modalSubmitActionLabel('نعم، احذف الكل')
                        ->modalCancelActionLabel('إلغاء'),
                ])->label('إجراءات جماعية'),
            ])
            ->defaultSort('created_at', 'desc')
            ->poll('30s');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListConsultationRequests::route('/'),
            'create' => Pages\CreateConsultationRequest::route('/create'),
            'edit' => Pages\EditConsultationRequest::route('/{record}/edit'),
        ];
    }
}
