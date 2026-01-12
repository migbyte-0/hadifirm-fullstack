<?php

namespace App\Filament\Pages;

use App\Models\HomePageContent;
use App\Models\HomePageMedia;
use App\Models\HomePageItem;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Illuminate\Support\Facades\Storage;
use Livewire\WithFileUploads;

class HomeTwoContent extends Page
{
    use WithFileUploads;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationLabel = 'محتوى الصفحة الرئيسية';
    protected static ?string $title = 'إدارة محتوى الصفحة الرئيسية الثانية';
    protected static ?string $navigationGroup = 'إدارة المحتوى';
    protected static ?int $navigationSort = 1;
    protected static string $view = 'filament.pages.home-two-content';

    public ?array $data = [];
    public string $activeTab = 'hero';

    protected $homeVersion = 'home_two';

    public function mount(): void
    {
        $this->loadAllContent();
    }

    protected function loadAllContent(): void
    {
        $content = HomePageContent::where('home_version', $this->homeVersion)->get();
        $items = HomePageItem::where('home_version', $this->homeVersion)->orderBy('section')->orderBy('order')->get();
        $media = HomePageMedia::where('home_version', $this->homeVersion)->get();

        // Load text content
        foreach ($content as $item) {
            $this->data["{$item->section}_{$item->key}"] = $item->value;
        }

        // Load items as JSON for repeaters
        $groupedItems = $items->groupBy('section');
        foreach ($groupedItems as $section => $sectionItems) {
            $this->data["{$section}_items"] = $sectionItems->map(function ($item) {
                return array_merge($item->content, [
                    'id' => $item->id,
                    'image_path' => $item->image_path,
                    'icon_path' => $item->icon_path,
                    'is_active' => $item->is_active,
                ]);
            })->toArray();
        }

        // Load media
        foreach ($media as $item) {
            $this->data["{$item->section}_{$item->key}_media"] = $item->file_path;
        }

        $this->form->fill($this->data);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('sections')
                    ->tabs([
                        // ==========================================
                        // HERO SECTION TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('hero')
                            ->label('القسم الرئيسي (Hero)')
                            ->icon('heroicon-o-star')
                            ->schema([
                                Forms\Components\Section::make('النصوص الرئيسية')
                                    ->schema([
                                        Forms\Components\TextInput::make('hero_subtitle')
                                            ->label('العنوان الفرعي')
                                            ->placeholder('ملتزمون بحماية حقوقك ومستقبلك'),
                                        Forms\Components\TextInput::make('hero_title_line1')
                                            ->label('العنوان - السطر الأول')
                                            ->placeholder('نحن الأفضل في'),
                                        Forms\Components\TextInput::make('hero_title_highlight')
                                            ->label('العنوان - الجزء المميز (باللون الذهبي)')
                                            ->placeholder('مكتب المحاماة'),
                                        Forms\Components\Textarea::make('hero_description')
                                            ->label('الوصف')
                                            ->rows(3),
                                    ])->columns(2),
                                
                                Forms\Components\Section::make('الأزرار')
                                    ->schema([
                                        Forms\Components\TextInput::make('hero_button_primary_text')
                                            ->label('نص الزر الأساسي'),
                                        Forms\Components\TextInput::make('hero_button_primary_link')
                                            ->label('رابط الزر الأساسي'),
                                        Forms\Components\TextInput::make('hero_button_secondary_text')
                                            ->label('نص الزر الثانوي'),
                                        Forms\Components\TextInput::make('hero_button_secondary_link')
                                            ->label('رابط الزر الثانوي'),
                                    ])->columns(2),

                                Forms\Components\Section::make('عناصر إضافية')
                                    ->schema([
                                        Forms\Components\TextInput::make('hero_circle_text')
                                            ->label('نص الدائرة المتحركة'),
                                        Forms\Components\TextInput::make('hero_marquee_text')
                                            ->label('النص المتحرك'),
                                        Forms\Components\TextInput::make('hero_phone_number')
                                            ->label('رقم الهاتف')
                                            ->tel(),
                                    ])->columns(2),

                                Forms\Components\Section::make('الصور والأيقونات')
                                    ->schema([
                                        Forms\Components\FileUpload::make('hero_background_media')
                                            ->label('صورة الخلفية')
                                            ->image()
                                            ->directory('home-two/hero')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp']),
                                        Forms\Components\FileUpload::make('hero_logo_media')
                                            ->label('الشعار الصغير (للدائرة)')
                                            ->image()
                                            ->directory('home-two/hero')
                                            ->visibility('public'),
                                        Forms\Components\FileUpload::make('hero_shape_media')
                                            ->label('شكل الخلفية')
                                            ->image()
                                            ->directory('home-two/hero')
                                            ->visibility('public'),
                                    ])->columns(3),
                            ]),

                        // ==========================================
                        // VIDEO SECTION TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('video')
                            ->label('قسم الفيديو')
                            ->icon('heroicon-o-video-camera')
                            ->schema([
                                Forms\Components\Section::make('محتوى الفيديو')
                                    ->schema([
                                        Forms\Components\TextInput::make('video_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('video_video_url')
                                            ->label('رابط الفيديو (YouTube Embed)')
                                            ->url()
                                            ->placeholder('https://www.youtube.com/embed/VIDEO_ID'),
                                        Forms\Components\FileUpload::make('video_banner_media')
                                            ->label('صورة الخلفية/البانر')
                                            ->image()
                                            ->directory('home-two/video')
                                            ->visibility('public'),
                                        Forms\Components\FileUpload::make('video_icon_media')
                                            ->label('أيقونة التشغيل')
                                            ->directory('home-two/video')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                    ])->columns(2),
                            ]),

                        // ==========================================
                        // SERVICES SLIDER TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('services')
                            ->label('بطاقات الخدمات')
                            ->icon('heroicon-o-briefcase')
                            ->schema([
                                Forms\Components\Section::make('الخدمات المعروضة في السلايدر')
                                    ->schema([
                                        Forms\Components\Repeater::make('services_slider_items')
                                            ->label('الخدمات')
                                            ->schema([
                                                Forms\Components\TextInput::make('title')
                                                    ->label('عنوان الخدمة')
                                                    ->required(),
                                                Forms\Components\Textarea::make('description')
                                                    ->label('وصف الخدمة')
                                                    ->rows(2),
                                                Forms\Components\FileUpload::make('icon_path')
                                                    ->label('أيقونة الخدمة')
                                                    ->directory('home-two/services')
                                                    ->visibility('public')
                                                    ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'خدمة جديدة'),
                                    ]),
                            ]),

                        // ==========================================
                        // CALL SERVICE TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('call_service')
                            ->label('شريط الاتصال')
                            ->icon('heroicon-o-phone')
                            ->schema([
                                Forms\Components\Section::make('شريط الاتصال')
                                    ->schema([
                                        Forms\Components\TextInput::make('call_service_text')
                                            ->label('النص'),
                                        Forms\Components\TextInput::make('call_service_phone_number')
                                            ->label('رقم الهاتف')
                                            ->tel(),
                                        Forms\Components\TextInput::make('call_service_phone_display')
                                            ->label('عرض الرقم'),
                                        Forms\Components\FileUpload::make('call_service_icon_media')
                                            ->label('أيقونة الهاتف')
                                            ->directory('home-two/call-service')
                                            ->visibility('public')
                                            ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                    ])->columns(2),
                            ]),

                        // ==========================================
                        // SPECIAL SERVICES TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('special_services')
                            ->label('الخدمات المميزة')
                            ->icon('heroicon-o-sparkles')
                            ->schema([
                                Forms\Components\Section::make('عناوين القسم')
                                    ->schema([
                                        Forms\Components\TextInput::make('special_services_subtitle')
                                            ->label('العنوان الفرعي'),
                                        Forms\Components\TextInput::make('special_services_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('special_services_title_highlight')
                                            ->label('الجزء المميز'),
                                        Forms\Components\Textarea::make('special_services_description')
                                            ->label('الوصف')
                                            ->rows(2),
                                    ])->columns(2),

                                Forms\Components\Section::make('صورة القسم')
                                    ->schema([
                                        Forms\Components\FileUpload::make('special_services_image_media')
                                            ->label('الصورة الرئيسية')
                                            ->image()
                                            ->directory('home-two/special-services')
                                            ->visibility('public'),
                                    ]),

                                Forms\Components\Section::make('قائمة الخدمات')
                                    ->schema([
                                        Forms\Components\Repeater::make('special_services_items')
                                            ->label('الخدمات')
                                            ->schema([
                                                Forms\Components\TextInput::make('title')
                                                    ->label('العنوان')
                                                    ->required(),
                                                Forms\Components\Textarea::make('description')
                                                    ->label('الوصف')
                                                    ->rows(2),
                                                Forms\Components\FileUpload::make('icon_path')
                                                    ->label('الأيقونة')
                                                    ->directory('home-two/special-services')
                                                    ->visibility('public')
                                                    ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'خدمة جديدة'),
                                    ]),
                            ]),

                        // ==========================================
                        // PRACTICE AREAS TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('practice_areas')
                            ->label('مجالات الممارسة')
                            ->icon('heroicon-o-scale')
                            ->schema([
                                Forms\Components\Section::make('عناوين القسم')
                                    ->schema([
                                        Forms\Components\TextInput::make('practice_areas_subtitle')
                                            ->label('العنوان الفرعي'),
                                        Forms\Components\TextInput::make('practice_areas_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('practice_areas_title_highlight')
                                            ->label('الجزء المميز'),
                                    ])->columns(3),

                                Forms\Components\Section::make('مجالات الممارسة')
                                    ->schema([
                                        Forms\Components\Repeater::make('practice_areas_items')
                                            ->label('المجالات')
                                            ->schema([
                                                Forms\Components\TextInput::make('title')
                                                    ->label('العنوان')
                                                    ->required(),
                                                Forms\Components\Textarea::make('description')
                                                    ->label('الوصف')
                                                    ->rows(2),
                                                Forms\Components\FileUpload::make('image_path')
                                                    ->label('الصورة')
                                                    ->image()
                                                    ->directory('home-two/practice-areas')
                                                    ->visibility('public'),
                                                Forms\Components\FileUpload::make('icon_path')
                                                    ->label('الأيقونة')
                                                    ->directory('home-two/practice-areas')
                                                    ->visibility('public')
                                                    ->acceptedFileTypes(['image/svg+xml', 'image/png']),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'مجال جديد'),
                                    ]),
                            ]),

                        // ==========================================
                        // PORTFOLIO/CASE STUDY TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('portfolio')
                            ->label('دراسات الحالة')
                            ->icon('heroicon-o-folder-open')
                            ->schema([
                                Forms\Components\Section::make('عناوين القسم')
                                    ->schema([
                                        Forms\Components\TextInput::make('portfolio_subtitle')
                                            ->label('العنوان الفرعي'),
                                        Forms\Components\TextInput::make('portfolio_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('portfolio_title_highlight')
                                            ->label('الجزء المميز'),
                                        Forms\Components\TextInput::make('portfolio_button_text')
                                            ->label('نص الزر'),
                                    ])->columns(2),

                                Forms\Components\Section::make('صور القسم')
                                    ->schema([
                                        Forms\Components\FileUpload::make('portfolio_image_media')
                                            ->label('الصورة الرئيسية')
                                            ->image()
                                            ->directory('home-two/portfolio')
                                            ->visibility('public'),
                                    ]),

                                Forms\Components\Section::make('دراسات الحالة')
                                    ->schema([
                                        Forms\Components\Repeater::make('case_studies_items')
                                            ->label('الدراسات')
                                            ->schema([
                                                Forms\Components\TextInput::make('title')
                                                    ->label('العنوان')
                                                    ->required(),
                                                Forms\Components\TextInput::make('link')
                                                    ->label('الرابط')
                                                    ->default('/case-detail'),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'دراسة جديدة'),
                                    ]),
                            ]),

                        // ==========================================
                        // CTA TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('cta')
                            ->label('قسم الدعوة للعمل')
                            ->icon('heroicon-o-megaphone')
                            ->schema([
                                Forms\Components\Section::make('محتوى CTA')
                                    ->schema([
                                        Forms\Components\TextInput::make('cta_title')
                                            ->label('العنوان'),
                                        Forms\Components\Textarea::make('cta_description')
                                            ->label('الوصف')
                                            ->rows(2),
                                        Forms\Components\TextInput::make('cta_button_text')
                                            ->label('نص الزر'),
                                        Forms\Components\TextInput::make('cta_button_link')
                                            ->label('رابط الزر'),
                                    ])->columns(2),

                                Forms\Components\Section::make('الصور')
                                    ->schema([
                                        Forms\Components\FileUpload::make('cta_image_media')
                                            ->label('صورة المحامي')
                                            ->image()
                                            ->directory('home-two/cta')
                                            ->visibility('public'),
                                        Forms\Components\FileUpload::make('cta_shape_media')
                                            ->label('الشكل الخلفي')
                                            ->image()
                                            ->directory('home-two/cta')
                                            ->visibility('public'),
                                    ])->columns(2),
                            ]),

                        // ==========================================
                        // TESTIMONIALS TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('testimonials')
                            ->label('آراء العملاء')
                            ->icon('heroicon-o-chat-bubble-left-right')
                            ->schema([
                                Forms\Components\Section::make('عناوين القسم')
                                    ->schema([
                                        Forms\Components\TextInput::make('testimonials_subtitle')
                                            ->label('العنوان الفرعي'),
                                        Forms\Components\TextInput::make('testimonials_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('testimonials_title_highlight')
                                            ->label('الجزء المميز'),
                                        Forms\Components\TextInput::make('testimonials_button_text')
                                            ->label('نص الزر'),
                                    ])->columns(2),

                                Forms\Components\Section::make('آراء العملاء')
                                    ->schema([
                                        Forms\Components\Repeater::make('testimonials_items')
                                            ->label('الآراء')
                                            ->schema([
                                                Forms\Components\TextInput::make('name')
                                                    ->label('الاسم')
                                                    ->required(),
                                                Forms\Components\TextInput::make('location')
                                                    ->label('المدينة'),
                                                Forms\Components\TextInput::make('role')
                                                    ->label('المنصب/الوظيفة'),
                                                Forms\Components\Textarea::make('content')
                                                    ->label('الرأي')
                                                    ->rows(3)
                                                    ->required(),
                                                Forms\Components\TextInput::make('rating')
                                                    ->label('التقييم')
                                                    ->numeric()
                                                    ->minValue(1)
                                                    ->maxValue(5)
                                                    ->default(5),
                                                Forms\Components\TextInput::make('reviews_count')
                                                    ->label('عدد التقييمات')
                                                    ->placeholder('12.5k'),
                                                Forms\Components\FileUpload::make('image_path')
                                                    ->label('صورة العميل')
                                                    ->image()
                                                    ->directory('home-two/testimonials')
                                                    ->visibility('public'),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['name'] ?? 'عميل جديد'),
                                    ]),
                            ]),

                        // ==========================================
                        // TEAM TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('team')
                            ->label('فريق العمل')
                            ->icon('heroicon-o-user-group')
                            ->schema([
                                Forms\Components\Section::make('عناوين القسم')
                                    ->schema([
                                        Forms\Components\TextInput::make('team_subtitle')
                                            ->label('العنوان الفرعي'),
                                        Forms\Components\TextInput::make('team_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('team_title_highlight')
                                            ->label('الجزء المميز'),
                                    ])->columns(3),

                                Forms\Components\Section::make('أعضاء الفريق')
                                    ->schema([
                                        Forms\Components\Repeater::make('team_items')
                                            ->label('الأعضاء')
                                            ->schema([
                                                Forms\Components\TextInput::make('name')
                                                    ->label('الاسم')
                                                    ->required(),
                                                Forms\Components\TextInput::make('role')
                                                    ->label('المنصب')
                                                    ->required(),
                                                Forms\Components\TextInput::make('linkedin')
                                                    ->label('لينكد إن')
                                                    ->url(),
                                                Forms\Components\TextInput::make('twitter')
                                                    ->label('تويتر')
                                                    ->url(),
                                                Forms\Components\TextInput::make('facebook')
                                                    ->label('فيسبوك')
                                                    ->url(),
                                                Forms\Components\FileUpload::make('image_path')
                                                    ->label('الصورة')
                                                    ->image()
                                                    ->directory('home-two/team')
                                                    ->visibility('public'),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['name'] ?? 'عضو جديد'),
                                    ]),
                            ]),

                        // ==========================================
                        // COUNTERS TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('counters')
                            ->label('العدادات')
                            ->icon('heroicon-o-chart-bar')
                            ->schema([
                                Forms\Components\Section::make('العدادات الإحصائية')
                                    ->schema([
                                        Forms\Components\Repeater::make('counters_items')
                                            ->label('العدادات')
                                            ->schema([
                                                Forms\Components\TextInput::make('number')
                                                    ->label('الرقم')
                                                    ->required(),
                                                Forms\Components\TextInput::make('suffix')
                                                    ->label('اللاحقة (k+, %, etc.)'),
                                                Forms\Components\TextInput::make('label')
                                                    ->label('التسمية')
                                                    ->required(),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(3)
                                            ->reorderable()
                                            ->collapsible()
                                            ->maxItems(4)
                                            ->itemLabel(fn (array $state): ?string => $state['label'] ?? 'عداد جديد'),
                                    ]),
                            ]),

                        // ==========================================
                        // CONTACT FORM TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('contact')
                            ->label('نموذج الاتصال')
                            ->icon('heroicon-o-envelope')
                            ->schema([
                                Forms\Components\Section::make('عناوين القسم')
                                    ->schema([
                                        Forms\Components\TextInput::make('contact_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('contact_title_highlight')
                                            ->label('الجزء المميز'),
                                        Forms\Components\Textarea::make('contact_description')
                                            ->label('الوصف')
                                            ->rows(2),
                                    ])->columns(2),

                                Forms\Components\Section::make('نصوص النموذج')
                                    ->schema([
                                        Forms\Components\TextInput::make('contact_form_name_placeholder')
                                            ->label('نص حقل الاسم'),
                                        Forms\Components\TextInput::make('contact_form_phone_placeholder')
                                            ->label('نص حقل الهاتف'),
                                        Forms\Components\TextInput::make('contact_form_email_placeholder')
                                            ->label('نص حقل البريد'),
                                        Forms\Components\TextInput::make('contact_form_message_placeholder')
                                            ->label('نص حقل الرسالة'),
                                        Forms\Components\TextInput::make('contact_form_button_text')
                                            ->label('نص الزر'),
                                    ])->columns(2),
                            ]),

                        // ==========================================
                        // FAQ TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('faq')
                            ->label('الأسئلة الشائعة')
                            ->icon('heroicon-o-question-mark-circle')
                            ->schema([
                                Forms\Components\Section::make('عناوين القسم')
                                    ->schema([
                                        Forms\Components\TextInput::make('faq_subtitle')
                                            ->label('العنوان الفرعي'),
                                        Forms\Components\TextInput::make('faq_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('faq_title_highlight')
                                            ->label('الجزء المميز'),
                                        Forms\Components\Textarea::make('faq_description')
                                            ->label('الوصف')
                                            ->rows(2),
                                        Forms\Components\TextInput::make('faq_button_text')
                                            ->label('نص الزر'),
                                    ])->columns(2),

                                Forms\Components\Section::make('الأسئلة والأجوبة')
                                    ->schema([
                                        Forms\Components\Repeater::make('faqs_items')
                                            ->label('الأسئلة')
                                            ->schema([
                                                Forms\Components\TextInput::make('question')
                                                    ->label('السؤال')
                                                    ->required(),
                                                Forms\Components\Textarea::make('answer')
                                                    ->label('الإجابة')
                                                    ->rows(3)
                                                    ->required(),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(1)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['question'] ?? 'سؤال جديد'),
                                    ]),
                            ]),

                        // ==========================================
                        // BLOG TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('blog')
                            ->label('المدونة')
                            ->icon('heroicon-o-newspaper')
                            ->schema([
                                Forms\Components\Section::make('عناوين القسم')
                                    ->schema([
                                        Forms\Components\TextInput::make('blog_subtitle')
                                            ->label('العنوان الفرعي'),
                                        Forms\Components\TextInput::make('blog_title')
                                            ->label('العنوان'),
                                        Forms\Components\TextInput::make('blog_title_highlight')
                                            ->label('الجزء المميز'),
                                    ])->columns(3),

                                Forms\Components\Section::make('المقالات')
                                    ->schema([
                                        Forms\Components\Repeater::make('blogs_items')
                                            ->label('المقالات')
                                            ->schema([
                                                Forms\Components\TextInput::make('title')
                                                    ->label('العنوان')
                                                    ->required(),
                                                Forms\Components\TextInput::make('author')
                                                    ->label('الكاتب'),
                                                Forms\Components\TextInput::make('category')
                                                    ->label('التصنيف'),
                                                Forms\Components\TextInput::make('date')
                                                    ->label('التاريخ'),
                                                Forms\Components\TextInput::make('link')
                                                    ->label('الرابط')
                                                    ->default('/blog-detail'),
                                                Forms\Components\FileUpload::make('image_path')
                                                    ->label('الصورة')
                                                    ->image()
                                                    ->directory('home-two/blog')
                                                    ->visibility('public'),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'مقال جديد'),
                                    ]),
                            ]),

                        // ==========================================
                        // PARTNERS TAB
                        // ==========================================
                        Forms\Components\Tabs\Tab::make('partners')
                            ->label('الشركاء')
                            ->icon('heroicon-o-building-office')
                            ->schema([
                                Forms\Components\Section::make('شعارات الشركاء')
                                    ->schema([
                                        Forms\Components\Repeater::make('partners_items')
                                            ->label('الشركاء')
                                            ->schema([
                                                Forms\Components\TextInput::make('name')
                                                    ->label('اسم الشريك')
                                                    ->required(),
                                                Forms\Components\TextInput::make('link')
                                                    ->label('الرابط')
                                                    ->url(),
                                                Forms\Components\FileUpload::make('image_path')
                                                    ->label('الشعار')
                                                    ->directory('home-two/partners')
                                                    ->visibility('public')
                                                    ->acceptedFileTypes(['image/svg+xml', 'image/png', 'image/webp']),
                                                Forms\Components\Toggle::make('is_active')
                                                    ->label('نشط')
                                                    ->default(true),
                                            ])
                                            ->columns(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn (array $state): ?string => $state['name'] ?? 'شريك جديد'),
                                    ]),
                            ]),
                    ])
                    ->persistTabInQueryString()
                    ->columnSpanFull(),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();
        
        // Save text content
        $this->saveTextContent($data);
        
        // Save items (repeaters)
        $this->saveItems($data);
        
        // Save media
        $this->saveMedia($data);

        // Clear all caches
        HomePageContent::clearCache($this->homeVersion);
        HomePageMedia::clearCache($this->homeVersion);
        HomePageItem::clearCache($this->homeVersion);

        Notification::make()
            ->title('تم الحفظ بنجاح')
            ->body('تم تحديث محتوى الصفحة الرئيسية')
            ->success()
            ->send();
    }

    protected function saveTextContent(array $data): void
    {
        $sections = [
            'hero' => ['subtitle', 'title_line1', 'title_highlight', 'description', 'button_primary_text', 'button_primary_link', 'button_secondary_text', 'button_secondary_link', 'circle_text', 'marquee_text', 'phone_number'],
            'video' => ['title', 'video_url'],
            'call_service' => ['text', 'phone_number', 'phone_display'],
            'special_services' => ['subtitle', 'title', 'title_highlight', 'description'],
            'practice_areas' => ['subtitle', 'title', 'title_highlight'],
            'portfolio' => ['subtitle', 'title', 'title_highlight', 'button_text'],
            'cta' => ['title', 'description', 'button_text', 'button_link'],
            'testimonials' => ['subtitle', 'title', 'title_highlight', 'button_text'],
            'team' => ['subtitle', 'title', 'title_highlight'],
            'contact' => ['title', 'title_highlight', 'description', 'form_name_placeholder', 'form_phone_placeholder', 'form_email_placeholder', 'form_message_placeholder', 'form_button_text'],
            'faq' => ['subtitle', 'title', 'title_highlight', 'description', 'button_text'],
            'blog' => ['subtitle', 'title', 'title_highlight'],
        ];

        foreach ($sections as $section => $keys) {
            foreach ($keys as $key) {
                $dataKey = "{$section}_{$key}";
                if (isset($data[$dataKey])) {
                    HomePageContent::setValue($section, $key, $data[$dataKey], $this->homeVersion);
                }
            }
        }
    }

    protected function saveItems(array $data): void
    {
        $itemSections = [
            'services_slider' => 'services_slider_items',
            'special_services' => 'special_services_items',
            'practice_areas' => 'practice_areas_items',
            'case_studies' => 'case_studies_items',
            'testimonials' => 'testimonials_items',
            'team' => 'team_items',
            'counters' => 'counters_items',
            'faqs' => 'faqs_items',
            'blogs' => 'blogs_items',
            'partners' => 'partners_items',
        ];

        foreach ($itemSections as $section => $dataKey) {
            if (isset($data[$dataKey]) && is_array($data[$dataKey])) {
                // Delete existing items for this section
                HomePageItem::where('home_version', $this->homeVersion)
                    ->where('section', $section)
                    ->delete();

                // Create new items
                foreach ($data[$dataKey] as $index => $item) {
                    $imagePath = $item['image_path'] ?? null;
                    $iconPath = $item['icon_path'] ?? null;
                    $isActive = $item['is_active'] ?? true;

                    // Remove non-content fields
                    unset($item['image_path'], $item['icon_path'], $item['is_active'], $item['id']);

                    HomePageItem::create([
                        'home_version' => $this->homeVersion,
                        'section' => $section,
                        'content' => $item,
                        'image_path' => $imagePath,
                        'icon_path' => $iconPath,
                        'order' => $index,
                        'is_active' => $isActive,
                    ]);
                }
            }
        }
    }

    protected function saveMedia(array $data): void
    {
        $mediaFields = [
            'hero_background_media' => ['section' => 'hero', 'key' => 'background'],
            'hero_logo_media' => ['section' => 'hero', 'key' => 'logo'],
            'hero_shape_media' => ['section' => 'hero', 'key' => 'shape'],
            'video_banner_media' => ['section' => 'video', 'key' => 'banner'],
            'video_icon_media' => ['section' => 'video', 'key' => 'icon'],
            'call_service_icon_media' => ['section' => 'call_service', 'key' => 'icon'],
            'special_services_image_media' => ['section' => 'special_services', 'key' => 'image'],
            'portfolio_image_media' => ['section' => 'portfolio', 'key' => 'image'],
            'cta_image_media' => ['section' => 'cta', 'key' => 'image'],
            'cta_shape_media' => ['section' => 'cta', 'key' => 'shape'],
        ];

        foreach ($mediaFields as $dataKey => $info) {
            if (isset($data[$dataKey]) && $data[$dataKey]) {
                $filePath = $data[$dataKey];
                
                // Get file info
                $fileName = basename($filePath);
                $extension = pathinfo($fileName, PATHINFO_EXTENSION);
                $fileType = in_array($extension, ['svg']) ? 'icon' : 'image';
                $mimeType = Storage::disk('public')->mimeType($filePath);
                $fileSize = Storage::disk('public')->size($filePath);

                HomePageMedia::updateOrCreate(
                    [
                        'home_version' => $this->homeVersion,
                        'section' => $info['section'],
                        'key' => $info['key'],
                    ],
                    [
                        'file_path' => $filePath,
                        'file_name' => $fileName,
                        'file_type' => $fileType,
                        'mime_type' => $mimeType,
                        'file_size' => $fileSize,
                        'is_active' => true,
                    ]
                );
            }
        }
    }
}
