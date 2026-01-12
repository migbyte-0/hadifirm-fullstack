<?php

namespace App\Filament\Pages;

use App\Models\Setting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Illuminate\Support\Facades\Cache;

class HomeScreenSettings extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-home-modern';
    
    protected static ?string $navigationLabel = 'الصفحة الرئيسية';
    
    protected static ?string $title = 'إعدادات الصفحة الرئيسية';
    
    protected static ?string $navigationGroup = 'الإعدادات';
    
    protected static ?int $navigationSort = 0;

    protected static string $view = 'filament.pages.home-screen-settings';

    public ?array $data = [];

    public function mount(): void
    {
        $setting = Setting::where('key', 'active_home_screen')->first();
        $this->form->fill([
            'active_home_screen' => $setting?->value ?? '1',
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('اختيار تصميم الصفحة الرئيسية')
                    ->description('اختر التصميم الذي تريد عرضه للزوار في الصفحة الرئيسية')
                    ->schema([
                        Forms\Components\Radio::make('active_home_screen')
                            ->label('التصميم النشط')
                            ->options([
                                '1' => 'التصميم الأول (الافتراضي)',
                                '2' => 'التصميم الثاني',
                                '3' => 'التصميم الثالث',
                                '4' => 'التصميم الرابع',
                                '5' => 'التصميم الخامس',
                            ])
                            ->descriptions([
                                '1' => 'تصميم كلاسيكي مع صورة رئيسية كبيرة',
                                '2' => 'تصميم عصري مع فيديو في الخلفية',
                                '3' => 'تصميم بسيط مع شريط تمرير للصور',
                                '4' => 'تصميم احترافي مع إحصائيات',
                                '5' => 'تصميم مميز مع رسوم متحركة',
                            ])
                            ->required()
                            ->inline(false)
                            ->columnSpanFull(),
                    ]),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();
        
        Setting::updateOrCreate(
            ['key' => 'active_home_screen'],
            [
                'value' => $data['active_home_screen'],
                'type' => 'text',
                'group' => 'general',
                'description' => 'تصميم الصفحة الرئيسية النشط',
            ]
        );

        // Clear cache
        Cache::forget('setting_active_home_screen');
        Cache::forget('settings_group_general');

        Notification::make()
            ->title('تم الحفظ بنجاح')
            ->body('تم تحديث تصميم الصفحة الرئيسية')
            ->success()
            ->send();
    }
}
