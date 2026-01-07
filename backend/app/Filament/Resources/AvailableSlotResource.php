<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AvailableSlotResource\Pages;
use App\Models\AvailableSlot;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class AvailableSlotResource extends Resource
{
    protected static ?string $model = AvailableSlot::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar-days';
    
    protected static ?string $navigationLabel = 'المواعيد المتاحة';
    
    protected static ?string $modelLabel = 'موعد متاح';
    
    protected static ?string $pluralModelLabel = 'المواعيد المتاحة';

    protected static ?string $navigationGroup = 'الإعدادات';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('تفاصيل الموعد')
                    ->schema([
                        Forms\Components\DatePicker::make('date')
                            ->label('التاريخ')
                            ->required()
                            ->minDate(today()),
                        Forms\Components\TimePicker::make('start_time')
                            ->label('وقت البداية')
                            ->required()
                            ->seconds(false),
                        Forms\Components\TimePicker::make('end_time')
                            ->label('وقت النهاية')
                            ->required()
                            ->seconds(false)
                            ->after('start_time'),
                        Forms\Components\TextInput::make('max_bookings')
                            ->label('الحد الأقصى للحجوزات')
                            ->numeric()
                            ->default(1)
                            ->minValue(1)
                            ->required(),
                        Forms\Components\TextInput::make('current_bookings')
                            ->label('الحجوزات الحالية')
                            ->numeric()
                            ->default(0)
                            ->disabled(),
                        Forms\Components\Toggle::make('is_available')
                            ->label('متاح')
                            ->default(true),
                    ])->columns(3),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('date')
                    ->label('التاريخ')
                    ->date('Y/m/d')
                    ->sortable(),
                Tables\Columns\TextColumn::make('start_time')
                    ->label('من')
                    ->time('h:i A'),
                Tables\Columns\TextColumn::make('end_time')
                    ->label('إلى')
                    ->time('h:i A'),
                Tables\Columns\TextColumn::make('current_bookings')
                    ->label('الحجوزات')
                    ->formatStateUsing(fn ($record) => "{$record->current_bookings}/{$record->max_bookings}"),
                Tables\Columns\IconColumn::make('is_available')
                    ->label('متاح')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_full')
                    ->label('ممتلئ')
                    ->boolean()
                    ->trueIcon('heroicon-o-x-circle')
                    ->falseIcon('heroicon-o-check-circle')
                    ->trueColor('danger')
                    ->falseColor('success'),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_available')
                    ->label('متاح'),
                Tables\Filters\Filter::make('upcoming')
                    ->label('المواعيد القادمة')
                    ->query(fn ($query) => $query->where('date', '>=', today())),
            ])
            ->actions([
                Tables\Actions\EditAction::make()->label('تعديل'),
                Tables\Actions\DeleteAction::make()->label('حذف'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('date', 'asc');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAvailableSlots::route('/'),
            'create' => Pages\CreateAvailableSlot::route('/create'),
            'edit' => Pages\EditAvailableSlot::route('/{record}/edit'),
        ];
    }
}
