<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WebImageResource\Pages;
use App\Models\WebImage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class WebImageResource extends Resource
{
    protected static ?string $model = WebImage::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';
    
    protected static ?string $navigationLabel = 'صور الموقع';
    
    protected static ?string $modelLabel = 'صورة';
    
    protected static ?string $pluralModelLabel = 'صور الموقع';

    protected static ?string $navigationGroup = 'إدارة المحتوى';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('معلومات الصورة')
                    ->schema([
                        Forms\Components\Select::make('section')
                            ->label('القسم')
                            ->options([
                                'hero' => 'الهيرو / البانر الرئيسي',
                                'about' => 'من نحن',
                                'services' => 'الخدمات',
                                'team' => 'الفريق',
                                'testimonials' => 'آراء العملاء',
                                'partners' => 'الشركاء',
                                'logos' => 'الشعارات',
                                'backgrounds' => 'الخلفيات',
                            ])
                            ->required()
                            ->native(false),
                        Forms\Components\TextInput::make('key')
                            ->label('المفتاح')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255)
                            ->helperText('مفتاح فريد للوصول للصورة برمجياً'),
                        Forms\Components\FileUpload::make('image_path')
                            ->label('الصورة')
                            ->image()
                            ->required()
                            ->directory('web-images')
                            ->visibility('public')
                            ->imageResizeMode('contain')
                            ->imageCropAspectRatio(null)
                            ->imageResizeTargetWidth(1920)
                            ->imageResizeTargetHeight(1080),
                    ])->columns(2),

                Forms\Components\Section::make('النص البديل')
                    ->schema([
                        Forms\Components\TextInput::make('alt_text_ar')
                            ->label('النص البديل بالعربية')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('alt_text_en')
                            ->label('النص البديل بالإنجليزية')
                            ->maxLength(255),
                        Forms\Components\Textarea::make('description')
                            ->label('وصف للمشرف')
                            ->rows(2),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')
                    ->label('الصورة')
                    ->disk('public')
                    ->square()
                    ->size(80),
                Tables\Columns\TextColumn::make('section')
                    ->label('القسم')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'hero' => 'الهيرو',
                        'about' => 'من نحن',
                        'services' => 'الخدمات',
                        'team' => 'الفريق',
                        'logos' => 'الشعارات',
                        'backgrounds' => 'الخلفيات',
                        default => $state,
                    })
                    ->sortable(),
                Tables\Columns\TextColumn::make('key')
                    ->label('المفتاح')
                    ->searchable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('alt_text_ar')
                    ->label('النص البديل')
                    ->limit(30),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('آخر تحديث')
                    ->dateTime('Y/m/d')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('section')
                    ->label('القسم')
                    ->options([
                        'hero' => 'الهيرو',
                        'about' => 'من نحن',
                        'services' => 'الخدمات',
                        'team' => 'الفريق',
                        'logos' => 'الشعارات',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make()->label('تعديل'),
                Tables\Actions\DeleteAction::make()->label('حذف'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWebImages::route('/'),
            'create' => Pages\CreateWebImage::route('/create'),
            'edit' => Pages\EditWebImage::route('/{record}/edit'),
        ];
    }
}
