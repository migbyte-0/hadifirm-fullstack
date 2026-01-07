<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SettingResource\Pages;
use App\Models\Setting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SettingResource extends Resource
{
    protected static ?string $model = Setting::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static ?string $navigationLabel = 'الإعدادات العامة';

    protected static ?string $modelLabel = 'إعداد';

    protected static ?string $pluralModelLabel = 'الإعدادات';

    protected static ?string $navigationGroup = 'الإعدادات';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('معلومات الإعداد')
                    ->schema([
                        Forms\Components\Select::make('group')
                            ->label('المجموعة')
                            ->options([
                                'general' => 'عام',
                                'contact' => 'معلومات التواصل',
                                'social' => 'وسائل التواصل الاجتماعي',
                                'whatsapp' => 'واتساب',
                                'analytics' => 'التحليلات',
                                'seo' => 'تحسين محركات البحث',
                            ])
                            ->required()
                            ->native(false),

                        Forms\Components\TextInput::make('key')
                            ->label('المفتاح')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255)
                            ->helperText('مثال: site_name, phone, email'),

                        Forms\Components\TextInput::make('label')
                            ->label('التسمية')
                            ->required()
                            ->maxLength(255)
                            ->helperText('اسم الإعداد للعرض'),

                        Forms\Components\Select::make('type')
                            ->label('نوع القيمة')
                            ->options([
                                'text' => 'نص قصير',
                                'textarea' => 'نص طويل',
                                'number' => 'رقم',
                                'boolean' => 'نعم/لا',
                                'email' => 'بريد إلكتروني',
                                'url' => 'رابط',
                                'phone' => 'رقم هاتف',
                                'color' => 'لون',
                            ])
                            ->required()
                            ->native(false)
                            ->reactive(),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('القيمة')
                    ->schema([
                        Forms\Components\TextInput::make('value')
                            ->label('القيمة')
                            ->visible(fn (Forms\Get $get) => in_array($get('type'), ['text', 'number', 'email', 'url', 'phone', 'color', null]))
                            ->required()
                            ->columnSpanFull(),

                        Forms\Components\Textarea::make('value')
                            ->label('القيمة')
                            ->visible(fn (Forms\Get $get) => $get('type') === 'textarea')
                            ->rows(4)
                            ->columnSpanFull(),

                        Forms\Components\Toggle::make('value')
                            ->label('القيمة')
                            ->visible(fn (Forms\Get $get) => $get('type') === 'boolean')
                            ->inline(false),

                        Forms\Components\Textarea::make('description')
                            ->label('الوصف')
                            ->helperText('وصف توضيحي للإعداد (اختياري)')
                            ->rows(2)
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('group')
                    ->label('المجموعة')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'general' => 'عام',
                        'contact' => 'التواصل',
                        'social' => 'التواصل الاجتماعي',
                        'whatsapp' => 'واتساب',
                        'analytics' => 'التحليلات',
                        'seo' => 'SEO',
                        default => $state,
                    })
                    ->color(fn (string $state): string => match ($state) {
                        'general' => 'gray',
                        'contact' => 'success',
                        'social' => 'info',
                        'whatsapp' => 'success',
                        'analytics' => 'warning',
                        'seo' => 'danger',
                        default => 'gray',
                    })
                    ->sortable(),

                Tables\Columns\TextColumn::make('label')
                    ->label('التسمية')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('key')
                    ->label('المفتاح')
                    ->searchable()
                    ->copyable()
                    ->copyMessage('تم نسخ المفتاح')
                    ->fontFamily('mono'),

                Tables\Columns\TextColumn::make('value')
                    ->label('القيمة')
                    ->limit(50)
                    ->searchable(),

                Tables\Columns\TextColumn::make('type')
                    ->label('النوع')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'text' => 'نص',
                        'textarea' => 'نص طويل',
                        'number' => 'رقم',
                        'boolean' => 'نعم/لا',
                        'email' => 'بريد',
                        'url' => 'رابط',
                        'phone' => 'هاتف',
                        'color' => 'لون',
                        default => $state,
                    }),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('آخر تحديث')
                    ->dateTime('Y-m-d H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('group')
                    ->label('المجموعة')
                    ->options([
                        'general' => 'عام',
                        'contact' => 'معلومات التواصل',
                        'social' => 'وسائل التواصل الاجتماعي',
                        'whatsapp' => 'واتساب',
                        'analytics' => 'التحليلات',
                        'seo' => 'SEO',
                    ]),

                Tables\Filters\SelectFilter::make('type')
                    ->label('النوع')
                    ->options([
                        'text' => 'نص',
                        'textarea' => 'نص طويل',
                        'number' => 'رقم',
                        'boolean' => 'نعم/لا',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make()->label('تعديل'),
                Tables\Actions\DeleteAction::make()->label('حذف'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()->label('حذف المحدد'),
                ]),
            ])
            ->defaultSort('group')
            ->groups([
                Tables\Grouping\Group::make('group')
                    ->label('المجموعة')
                    ->titlePrefixedWithLabel(false),
            ]);
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
            'index' => Pages\ListSettings::route('/'),
            'create' => Pages\CreateSetting::route('/create'),
            'edit' => Pages\EditSetting::route('/{record}/edit'),
        ];
    }
}
