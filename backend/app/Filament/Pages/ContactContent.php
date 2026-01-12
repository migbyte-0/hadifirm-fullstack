<?php

namespace App\Filament\Pages;

use App\Models\ContactPageContent;
use App\Models\ContactPageMedia;
use App\Models\ContactPageItem;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Illuminate\Support\Facades\DB;

class ContactContent extends Page implements HasForms
{
    use InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-phone';
    protected static ?string $navigationLabel = 'محتوى صفحة التواصل';
    protected static ?string $title = 'إدارة محتوى صفحة التواصل';
    protected static ?string $navigationGroup = 'إدارة المحتوى';
    protected static ?int $navigationSort = 3;
    protected static string $view = 'filament.pages.contact-content';

    public ?array $data = [];

    public function mount(): void
    {
        $this->loadContent();
    }

    protected function loadContent(): void
    {
        $content = ContactPageContent::all()->groupBy('section');
        $items = ContactPageItem::all()->groupBy('section');
        $media = ContactPageMedia::all()->groupBy('section');

        $data = [];

        // Load text content
        foreach ($content as $section => $sectionContent) {
            foreach ($sectionContent as $item) {
                $data["{$section}_{$item->key}"] = $item->value;
            }
        }

        // Load items
        foreach (['social_links', 'quick_links', 'counters'] as $section) {
            $sectionItems = $items->get($section, collect());
            $data[$section] = $sectionItems->map(function ($item) {
                return array_merge($item->content ?? [], [
                    'id' => $item->id,
                    'icon' => $item->icon_path,
                ]);
            })->toArray();
        }

        // Load media
        foreach ($media as $section => $sectionMedia) {
            foreach ($sectionMedia as $item) {
                $data["{$section}_{$item->key}"] = $item->file_path;
            }
        }

        $this->form->fill($data);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Tabs::make('ContactContent')
                    ->tabs([
                        // Hero Section Tab
                        Tab::make('قسم الهيرو')
                            ->icon('heroicon-o-home')
                            ->schema([
                                Section::make('محتوى البانر الرئيسي')
                                    ->schema([
                                        TextInput::make('hero_title')
                                            ->label('عنوان الصفحة')
                                            ->default('تواصل معنا')
                                            ->required(),
                                        TextInput::make('hero_breadcrumb_home')
                                            ->label('نص الرئيسية')
                                            ->default('الرئيسية'),
                                        TextInput::make('hero_phone_number')
                                            ->label('رقم الهاتف')
                                            ->default('0551099998'),
                                        TextInput::make('hero_phone_display')
                                            ->label('عرض رقم الهاتف')
                                            ->default('0551099998'),
                                    ])->columns(2),
                                Section::make('صور البانر')
                                    ->schema([
                                        FileUpload::make('hero_background_image')
                                            ->label('صورة الخلفية')
                                            ->image()
                                            ->directory('contact/hero')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp']),
                                        FileUpload::make('hero_phone_icon')
                                            ->label('أيقونة الهاتف')
                                            ->directory('contact/icons')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                    ])->columns(2),
                                Section::make('روابط التواصل الاجتماعي')
                                    ->schema([
                                        Repeater::make('social_links')
                                            ->label('روابط التواصل')
                                            ->schema([
                                                TextInput::make('label')
                                                    ->label('الاختصار')
                                                    ->placeholder('fb, TW, IN')
                                                    ->required(),
                                                TextInput::make('name')
                                                    ->label('الاسم')
                                                    ->placeholder('فيسبوك')
                                                    ->required(),
                                                TextInput::make('url')
                                                    ->label('الرابط')
                                                    ->url()
                                                    ->required(),
                                            ])
                                            ->columns(3)
                                            ->defaultItems(4)
                                            ->collapsible()
                                            ->reorderableWithButtons(),
                                    ]),
                            ]),

                        // Contact Info Tab
                        Tab::make('معلومات التواصل')
                            ->icon('heroicon-o-information-circle')
                            ->schema([
                                Section::make('الهاتف')
                                    ->schema([
                                        TextInput::make('info_phone_label')
                                            ->label('تسمية الهاتف')
                                            ->default('رقم الهاتف'),
                                        TextInput::make('info_phone_1')
                                            ->label('رقم الهاتف 1')
                                            ->required(),
                                        TextInput::make('info_phone_2')
                                            ->label('رقم الهاتف 2'),
                                        FileUpload::make('info_phone_icon')
                                            ->label('أيقونة الهاتف')
                                            ->directory('contact/icons')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                    ])->columns(2),
                                Section::make('البريد الإلكتروني')
                                    ->schema([
                                        TextInput::make('info_email_label')
                                            ->label('تسمية البريد')
                                            ->default('البريد الإلكتروني'),
                                        TextInput::make('info_email_1')
                                            ->label('البريد 1')
                                            ->email()
                                            ->required(),
                                        TextInput::make('info_email_2')
                                            ->label('البريد 2')
                                            ->email(),
                                        FileUpload::make('info_email_icon')
                                            ->label('أيقونة البريد')
                                            ->directory('contact/icons')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                    ])->columns(2),
                                Section::make('العنوان')
                                    ->schema([
                                        TextInput::make('info_location_label')
                                            ->label('تسمية العنوان')
                                            ->default('العنوان'),
                                        TextInput::make('info_location_1')
                                            ->label('العنوان - السطر 1')
                                            ->required(),
                                        TextInput::make('info_location_2')
                                            ->label('العنوان - السطر 2'),
                                        FileUpload::make('info_location_icon')
                                            ->label('أيقونة الموقع')
                                            ->directory('contact/icons')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                    ])->columns(2),
                            ]),

                        // Map Tab
                        Tab::make('الخريطة')
                            ->icon('heroicon-o-map')
                            ->schema([
                                Section::make('صورة الخريطة')
                                    ->description('قم برفع صورة للموقع على الخريطة (يمكن للزوار مشاهدة موقع المكتب)')
                                    ->schema([
                                        TextInput::make('map_title')
                                            ->label('عنوان قسم الخريطة')
                                            ->default('موقعنا على الخريطة'),
                                        FileUpload::make('map_image')
                                            ->label('صورة الخريطة')
                                            ->image()
                                            ->directory('contact/map')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                                            ->helperText('قم برفع صورة للموقع على Google Maps أو أي خريطة أخرى'),
                                    ]),
                            ]),

                        // Counters Tab
                        Tab::make('الإحصائيات')
                            ->icon('heroicon-o-chart-bar')
                            ->schema([
                                Section::make('عدادات الإنجازات')
                                    ->schema([
                                        TextInput::make('counter_title')
                                            ->label('عنوان قسم الإحصائيات')
                                            ->default('إنجازاتنا'),
                                        Repeater::make('counters')
                                            ->label('العدادات')
                                            ->schema([
                                                TextInput::make('value')
                                                    ->label('الرقم')
                                                    ->numeric()
                                                    ->required(),
                                                TextInput::make('suffix')
                                                    ->label('اللاحقة')
                                                    ->placeholder('k+, %, +')
                                                    ->required(),
                                                TextInput::make('label')
                                                    ->label('الوصف')
                                                    ->required(),
                                            ])
                                            ->columns(3)
                                            ->defaultItems(3)
                                            ->collapsible()
                                            ->reorderableWithButtons(),
                                    ]),
                            ]),

                        // Footer Tab
                        Tab::make('التذييل')
                            ->icon('heroicon-o-document-text')
                            ->schema([
                                Section::make('معلومات المكتب')
                                    ->schema([
                                        FileUpload::make('footer_logo')
                                            ->label('شعار المكتب')
                                            ->image()
                                            ->directory('contact/footer')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/png', 'image/svg+xml', 'image/webp']),
                                        TextInput::make('footer_logo_alt')
                                            ->label('نص بديل للشعار')
                                            ->default('مكتب المحامي هادي الحصين'),
                                        Textarea::make('footer_description')
                                            ->label('وصف المكتب')
                                            ->rows(3),
                                    ]),
                                Section::make('الروابط السريعة')
                                    ->schema([
                                        TextInput::make('footer_quick_links_title')
                                            ->label('عنوان الروابط السريعة')
                                            ->default('روابط سريعة'),
                                        Repeater::make('quick_links')
                                            ->label('الروابط')
                                            ->schema([
                                                TextInput::make('name')
                                                    ->label('اسم الرابط')
                                                    ->required(),
                                                TextInput::make('url')
                                                    ->label('الرابط')
                                                    ->required(),
                                            ])
                                            ->columns(2)
                                            ->defaultItems(5)
                                            ->collapsible()
                                            ->reorderableWithButtons(),
                                    ]),
                                Section::make('المكتب الأول')
                                    ->schema([
                                        TextInput::make('footer_office_1_title')
                                            ->label('اسم المكتب')
                                            ->default('المكتب الرئيسي'),
                                        TextInput::make('footer_office_1_address_1')
                                            ->label('العنوان - السطر 1'),
                                        TextInput::make('footer_office_1_address_2')
                                            ->label('العنوان - السطر 2'),
                                        TextInput::make('footer_office_1_phone')
                                            ->label('رقم الهاتف'),
                                    ])->columns(2),
                                Section::make('المكتب الثاني')
                                    ->schema([
                                        TextInput::make('footer_office_2_title')
                                            ->label('اسم المكتب')
                                            ->default('فرع جدة'),
                                        TextInput::make('footer_office_2_address_1')
                                            ->label('العنوان - السطر 1'),
                                        TextInput::make('footer_office_2_address_2')
                                            ->label('العنوان - السطر 2'),
                                        TextInput::make('footer_office_2_phone')
                                            ->label('رقم الهاتف'),
                                    ])->columns(2),
                                Section::make('النشرة البريدية وحقوق النشر')
                                    ->schema([
                                        TextInput::make('footer_newsletter_title')
                                            ->label('عنوان النشرة البريدية')
                                            ->default('هل تريد التواصل معنا؟'),
                                        TextInput::make('footer_newsletter_placeholder')
                                            ->label('نص حقل البريد')
                                            ->default('أدخل بريدك الإلكتروني...'),
                                        TextInput::make('footer_copyright_text')
                                            ->label('نص حقوق النشر')
                                            ->default('جميع الحقوق محفوظة © 2024 مكتب المحامي هادي الحصين'),
                                    ]),
                            ]),
                    ])
                    ->columnSpanFull(),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();

        DB::beginTransaction();
        
        try {
            // Save text content
            $contentFields = [
                'hero' => ['title', 'breadcrumb_home', 'phone_number', 'phone_display'],
                'info' => ['phone_label', 'phone_1', 'phone_2', 'email_label', 'email_1', 'email_2', 'location_label', 'location_1', 'location_2'],
                'map' => ['title'],
                'counter' => ['title'],
                'footer' => ['logo_alt', 'description', 'quick_links_title', 'office_1_title', 'office_1_address_1', 'office_1_address_2', 'office_1_phone', 'office_2_title', 'office_2_address_1', 'office_2_address_2', 'office_2_phone', 'newsletter_title', 'newsletter_placeholder', 'copyright_text'],
            ];

            foreach ($contentFields as $section => $keys) {
                foreach ($keys as $key) {
                    $fieldKey = "{$section}_{$key}";
                    if (isset($data[$fieldKey])) {
                        ContactPageContent::updateOrCreate(
                            ['section' => $section, 'key' => $key],
                            ['value' => $data[$fieldKey], 'type' => 'text', 'is_active' => true]
                        );
                    }
                }
            }

            // Save media
            $mediaFields = [
                'hero' => ['background_image', 'phone_icon'],
                'info' => ['phone_icon', 'email_icon', 'location_icon'],
                'map' => ['image'],
                'footer' => ['logo'],
            ];

            foreach ($mediaFields as $section => $keys) {
                foreach ($keys as $key) {
                    $fieldKey = "{$section}_{$key}";
                    if (!empty($data[$fieldKey])) {
                        ContactPageMedia::updateOrCreate(
                            ['section' => $section, 'key' => $key],
                            [
                                'file_path' => $data[$fieldKey],
                                'file_name' => basename($data[$fieldKey]),
                                'file_type' => 'image',
                                'is_active' => true,
                            ]
                        );
                    }
                }
            }

            // Save items
            $itemSections = ['social_links', 'quick_links', 'counters'];
            
            foreach ($itemSections as $section) {
                if (isset($data[$section]) && is_array($data[$section])) {
                    // Delete existing items
                    ContactPageItem::where('section', $section)->delete();
                    
                    // Create new items
                    foreach ($data[$section] as $index => $itemData) {
                        $content = $itemData;
                        unset($content['id'], $content['icon']);
                        
                        ContactPageItem::create([
                            'section' => $section,
                            'content' => $content,
                            'icon_path' => $itemData['icon'] ?? null,
                            'order' => $index,
                            'is_active' => true,
                        ]);
                    }
                }
            }

            // Clear cache
            ContactPageContent::clearCache();
            ContactPageMedia::clearCache();
            ContactPageItem::clearCache();

            DB::commit();

            Notification::make()
                ->title('تم الحفظ بنجاح')
                ->success()
                ->send();

        } catch (\Exception $e) {
            DB::rollBack();
            
            Notification::make()
                ->title('حدث خطأ')
                ->body($e->getMessage())
                ->danger()
                ->send();
        }
    }
}
