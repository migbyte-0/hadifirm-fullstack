<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WebContentResource\Pages;
use App\Models\WebContent;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class WebContentResource extends Resource
{
    protected static ?string $model = WebContent::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    
    protected static ?string $navigationLabel = 'محتوى الموقع';
    
    protected static ?string $modelLabel = 'محتوى';
    
    protected static ?string $pluralModelLabel = 'محتوى الموقع';

    protected static ?string $navigationGroup = 'إدارة المحتوى';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('معلومات المحتوى')
                    ->schema([
                        Forms\Components\Select::make('section')
                            ->label('القسم')
                            ->options([
                                'hero' => 'الهيرو / البانر الرئيسي',
                                'about' => 'من نحن',
                                'services' => 'الخدمات',
                                'team' => 'الفريق',
                                'testimonials' => 'آراء العملاء',
                                'contact' => 'اتصل بنا',
                                'footer' => 'الفوتر',
                                'meta' => 'بيانات SEO',
                            ])
                            ->required()
                            ->native(false),
                        Forms\Components\TextInput::make('key')
                            ->label('المفتاح')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255)
                            ->helperText('مفتاح فريد للوصول للمحتوى برمجياً'),
                        Forms\Components\Select::make('type')
                            ->label('النوع')
                            ->options([
                                'text' => 'نص قصير',
                                'textarea' => 'نص طويل',
                                'json' => 'JSON',
                            ])
                            ->default('text')
                            ->required()
                            ->native(false)
                            ->live(),
                    ])->columns(3),

                Forms\Components\Section::make('المحتوى')
                    ->schema([
                        Forms\Components\TextInput::make('value_ar')
                            ->label('القيمة بالعربية')
                            ->maxLength(65535)
                            ->visible(fn ($get) => $get('type') === 'text'),
                        Forms\Components\Textarea::make('value_ar')
                            ->label('القيمة بالعربية')
                            ->rows(5)
                            ->visible(fn ($get) => $get('type') === 'textarea'),
                        Forms\Components\Textarea::make('value_ar')
                            ->label('القيمة بالعربية (JSON)')
                            ->rows(8)
                            ->visible(fn ($get) => $get('type') === 'json'),
                            
                        Forms\Components\TextInput::make('value_en')
                            ->label('القيمة بالإنجليزية')
                            ->maxLength(65535)
                            ->visible(fn ($get) => $get('type') === 'text'),
                        Forms\Components\Textarea::make('value_en')
                            ->label('القيمة بالإنجليزية')
                            ->rows(5)
                            ->visible(fn ($get) => $get('type') === 'textarea'),
                        Forms\Components\Textarea::make('value_en')
                            ->label('القيمة بالإنجليزية (JSON)')
                            ->rows(8)
                            ->visible(fn ($get) => $get('type') === 'json'),

                        Forms\Components\Textarea::make('description')
                            ->label('وصف للمشرف')
                            ->rows(2)
                            ->helperText('ملاحظة للمشرف لتوضيح استخدام هذا المحتوى'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('section')
                    ->label('القسم')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'hero' => 'info',
                        'about' => 'success',
                        'services' => 'warning',
                        'contact' => 'danger',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'hero' => 'الهيرو',
                        'about' => 'من نحن',
                        'services' => 'الخدمات',
                        'team' => 'الفريق',
                        'testimonials' => 'الآراء',
                        'contact' => 'اتصل بنا',
                        'footer' => 'الفوتر',
                        'meta' => 'SEO',
                        default => $state,
                    })
                    ->sortable(),
                Tables\Columns\TextColumn::make('key')
                    ->label('المفتاح')
                    ->searchable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('type')
                    ->label('النوع')
                    ->badge(),
                Tables\Columns\TextColumn::make('value_ar')
                    ->label('القيمة')
                    ->limit(50)
                    ->wrap(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('آخر تحديث')
                    ->dateTime('Y/m/d h:i A')
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
                        'contact' => 'اتصل بنا',
                        'footer' => 'الفوتر',
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
            ])
            ->defaultSort('section');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWebContents::route('/'),
            'create' => Pages\CreateWebContent::route('/create'),
            'edit' => Pages\EditWebContent::route('/{record}/edit'),
        ];
    }
}
