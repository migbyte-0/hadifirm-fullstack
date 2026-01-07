<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WhatsappTemplateResource\Pages;
use App\Models\WhatsappTemplate;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class WhatsappTemplateResource extends Resource
{
    protected static ?string $model = WhatsappTemplate::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static ?string $navigationLabel = 'قوالب الواتساب';

    protected static ?string $modelLabel = 'قالب واتساب';

    protected static ?string $pluralModelLabel = 'قوالب الواتساب';

    protected static ?string $navigationGroup = 'الإعدادات';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('معلومات القالب')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('اسم القالب')
                            ->required()
                            ->maxLength(255)
                            ->helperText('اسم توضيحي للقالب'),

                        Forms\Components\TextInput::make('key')
                            ->label('المفتاح')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255)
                            ->helperText('مفتاح فريد للقالب (مثال: accept_request, share_request)'),

                        Forms\Components\Select::make('type')
                            ->label('نوع القالب')
                            ->options([
                                'accept' => 'قبول الطلب',
                                'reject' => 'رفض الطلب',
                                'share' => 'مشاركة الطلب',
                                'reminder' => 'تذكير',
                                'confirmation' => 'تأكيد الموعد',
                                'follow_up' => 'متابعة',
                                'general' => 'عام',
                            ])
                            ->required()
                            ->native(false),

                        Forms\Components\Toggle::make('is_active')
                            ->label('مفعل')
                            ->default(true)
                            ->inline(false),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('محتوى الرسالة')
                    ->schema([
                        Forms\Components\Textarea::make('template')
                            ->label('نص الرسالة')
                            ->required()
                            ->rows(6)
                            ->helperText('يمكنك استخدام المتغيرات التالية: {name}, {phone}, {consultation_type}, {date}, {time}, {notes}')
                            ->columnSpanFull(),

                        Forms\Components\Placeholder::make('preview')
                            ->label('المتغيرات المتاحة')
                            ->content('
                                {name} - اسم العميل
                                {phone} - رقم الهاتف
                                {consultation_type} - نوع الاستشارة
                                {date} - التاريخ
                                {time} - الوقت
                                {notes} - الملاحظات
                            ')
                            ->columnSpanFull(),
                    ]),

                Forms\Components\Section::make('مثال على الرسالة')
                    ->schema([
                        Forms\Components\Textarea::make('example_message')
                            ->label('مثال')
                            ->disabled()
                            ->rows(4)
                            ->default('سيتم عرض مثال على الرسالة هنا بعد الحفظ')
                            ->columnSpanFull(),
                    ])
                    ->collapsed(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('اسم القالب')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('key')
                    ->label('المفتاح')
                    ->searchable()
                    ->copyable()
                    ->copyMessage('تم نسخ المفتاح')
                    ->fontFamily('mono'),

                Tables\Columns\TextColumn::make('type')
                    ->label('النوع')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'accept' => 'قبول',
                        'reject' => 'رفض',
                        'share' => 'مشاركة',
                        'reminder' => 'تذكير',
                        'confirmation' => 'تأكيد',
                        'follow_up' => 'متابعة',
                        'general' => 'عام',
                        default => $state,
                    })
                    ->color(fn (string $state): string => match ($state) {
                        'accept' => 'success',
                        'reject' => 'danger',
                        'share' => 'info',
                        'reminder' => 'warning',
                        'confirmation' => 'success',
                        'follow_up' => 'gray',
                        'general' => 'gray',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('template')
                    ->label('نص الرسالة')
                    ->limit(60)
                    ->wrap(),

                Tables\Columns\IconColumn::make('is_active')
                    ->label('مفعل')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('آخر تحديث')
                    ->dateTime('Y-m-d H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->label('النوع')
                    ->options([
                        'accept' => 'قبول',
                        'reject' => 'رفض',
                        'share' => 'مشاركة',
                        'reminder' => 'تذكير',
                        'confirmation' => 'تأكيد',
                        'follow_up' => 'متابعة',
                        'general' => 'عام',
                    ]),

                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('الحالة')
                    ->placeholder('الكل')
                    ->trueLabel('مفعل')
                    ->falseLabel('معطل'),
            ])
            ->actions([
                Tables\Actions\Action::make('preview')
                    ->label('معاينة')
                    ->icon('heroicon-o-eye')
                    ->modalHeading('معاينة الرسالة')
                    ->modalDescription(fn (WhatsappTemplate $record) => str_replace(
                        ['{name}', '{phone}', '{consultation_type}', '{date}', '{time}', '{notes}'],
                        ['أحمد محمد', '0501234567', 'استشارة قانونية', '2024-01-15', '10:00 ص', 'ملاحظات تجريبية'],
                        $record->template
                    ))
                    ->modalSubmitAction(false)
                    ->modalCancelActionLabel('إغلاق'),

                Tables\Actions\EditAction::make()->label('تعديل'),
                Tables\Actions\DeleteAction::make()->label('حذف'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()->label('حذف المحدد'),
                ]),
            ])
            ->defaultSort('type');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWhatsappTemplates::route('/'),
            'create' => Pages\CreateWhatsappTemplate::route('/create'),
            'edit' => Pages\EditWhatsappTemplate::route('/{record}/edit'),
        ];
    }
}
