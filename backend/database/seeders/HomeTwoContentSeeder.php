<?php

namespace Database\Seeders;

use App\Models\HomePageContent;
use App\Models\HomePageItem;
use Illuminate\Database\Seeder;

class HomeTwoContentSeeder extends Seeder
{
    public function run(): void
    {
        $homeVersion = 'home_two';

        // ========================================
        // HERO SECTION
        // ========================================
        $heroContent = [
            ['key' => 'subtitle', 'value' => 'ملتزمون بحماية حقوقك ومستقبلك', 'type' => 'text'],
            ['key' => 'title_line1', 'value' => 'نحن الأفضل في', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'مكتب المحاماة', 'type' => 'text'],
            ['key' => 'description', 'value' => 'نقدم خدمات قانونية متميزة تشمل الترافع أمام جميع المحاكم والجهات القضائية، وتقديم الاستشارات القانونية المتخصصة في مختلف المجالات.', 'type' => 'textarea'],
            ['key' => 'button_primary_text', 'value' => 'استشارة مجانية', 'type' => 'text'],
            ['key' => 'button_primary_link', 'value' => '/consultation', 'type' => 'text'],
            ['key' => 'button_secondary_text', 'value' => 'تواصل معنا', 'type' => 'text'],
            ['key' => 'button_secondary_link', 'value' => '/contact', 'type' => 'text'],
            ['key' => 'circle_text', 'value' => 'مكتب المحامي هادي الحصين مرحباً بكم', 'type' => 'text'],
            ['key' => 'marquee_text', 'value' => 'نحن الأفضل في مكتب المحاماة', 'type' => 'text'],
            ['key' => 'phone_number', 'value' => '+966501234567', 'type' => 'text'],
        ];

        foreach ($heroContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'hero', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        // ========================================
        // VIDEO SECTION
        // ========================================
        $videoContent = [
            ['key' => 'title', 'value' => 'مكتب المحامي هادي الحصين', 'type' => 'text'],
            ['key' => 'video_url', 'value' => 'https://www.youtube.com/embed/YOUR_VIDEO_ID', 'type' => 'text'],
        ];

        foreach ($videoContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'video', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        // ========================================
        // SERVICES SLIDER SECTION
        // ========================================
        $services = [
            [
                'title' => 'رسوم قانونية معقولة',
                'description' => 'نحرص على تقديم خدمات قانونية بأسعار تنافسية ومناسبة لجميع العملاء.',
            ],
            [
                'title' => 'دعم متواصل على مدار الساعة',
                'description' => 'فريقنا متاح دائماً للرد على استفساراتكم وتقديم الدعم القانوني اللازم.',
            ],
            [
                'title' => 'خطط دفع مرنة',
                'description' => 'نوفر خيارات دفع متعددة تناسب ظروفكم المالية وتسهل عليكم الحصول على خدماتنا.',
            ],
        ];

        foreach ($services as $index => $service) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'services_slider', 'order' => $index],
                ['content' => $service, 'is_active' => true]
            );
        }

        // ========================================
        // CALL SERVICE SECTION
        // ========================================
        $callServiceContent = [
            ['key' => 'text', 'value' => 'تبحث عن استشارة قانونية مجانية؟', 'type' => 'text'],
            ['key' => 'phone_number', 'value' => '+966501234567', 'type' => 'text'],
            ['key' => 'phone_display', 'value' => '(966) 501-234567', 'type' => 'text'],
        ];

        foreach ($callServiceContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'call_service', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        // ========================================
        // SPECIAL SERVICES SECTION
        // ========================================
        $specialServicesContent = [
            ['key' => 'subtitle', 'value' => 'أفضل خدماتنا', 'type' => 'text'],
            ['key' => 'title', 'value' => 'خدماتنا', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'المتميزة', 'type' => 'text'],
            ['key' => 'description', 'value' => 'نقدم مجموعة شاملة من الخدمات القانونية المتخصصة التي تلبي احتياجات عملائنا.', 'type' => 'textarea'],
        ];

        foreach ($specialServicesContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'special_services', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        $specialServices = [
            ['title' => 'الدفاع الجنائي', 'description' => 'نقدم خدمات الدفاع في القضايا الجنائية بكفاءة عالية.'],
            ['title' => 'القضايا الأسرية', 'description' => 'متخصصون في قضايا الأحوال الشخصية والأسرة.'],
            ['title' => 'الاعتداء والضرب', 'description' => 'نترافع في قضايا الاعتداء بمختلف أنواعها.'],
        ];

        foreach ($specialServices as $index => $service) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'special_services', 'order' => $index],
                ['content' => $service, 'is_active' => true]
            );
        }

        // ========================================
        // LEGAL PRACTICE AREAS SECTION
        // ========================================
        $practiceAreasContent = [
            ['key' => 'subtitle', 'value' => 'أفضل خدماتنا', 'type' => 'text'],
            ['key' => 'title', 'value' => 'مجالات الممارسة', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'القانونية', 'type' => 'text'],
        ];

        foreach ($practiceAreasContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'practice_areas', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        $practiceAreas = [
            ['title' => 'الدفاع الجنائي', 'description' => 'نقدم خدمات الدفاع في القضايا الجنائية.'],
            ['title' => 'مراجعة العقود', 'description' => 'صياغة ومراجعة العقود القانونية.'],
            ['title' => 'قضايا الهجرة', 'description' => 'استشارات وخدمات قانونية للهجرة.'],
            ['title' => 'القانون التجاري', 'description' => 'خدمات قانونية للشركات والأعمال.'],
        ];

        foreach ($practiceAreas as $index => $area) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'practice_areas', 'order' => $index],
                ['content' => $area, 'is_active' => true]
            );
        }

        // ========================================
        // PORTFOLIO/CASE STUDY SECTION
        // ========================================
        $portfolioContent = [
            ['key' => 'subtitle', 'value' => 'أحدث دراسات الحالة', 'type' => 'text'],
            ['key' => 'title', 'value' => 'تصفح أعمالنا', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'دراسات الحالة', 'type' => 'text'],
            ['key' => 'button_text', 'value' => 'استشارة مجانية', 'type' => 'text'],
        ];

        foreach ($portfolioContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'portfolio', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        $caseStudies = [
            ['title' => 'القانون التجاري', 'link' => '/case-detail'],
            ['title' => 'مراجعة العقود', 'link' => '/case-detail'],
            ['title' => 'الدفاع الجنائي', 'link' => '/case-detail'],
            ['title' => 'قانون الشركات', 'link' => '/case-detail'],
            ['title' => 'قضايا الهجرة', 'link' => '/case-detail'],
        ];

        foreach ($caseStudies as $index => $study) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'case_studies', 'order' => $index],
                ['content' => $study, 'is_active' => true]
            );
        }

        // ========================================
        // CTA SECTION
        // ========================================
        $ctaContent = [
            ['key' => 'title', 'value' => 'يمكننا مساعدتك!', 'type' => 'text'],
            ['key' => 'description', 'value' => 'سريع وسهل، بدون أي التزام.', 'type' => 'text'],
            ['key' => 'button_text', 'value' => 'استشارة مجانية', 'type' => 'text'],
            ['key' => 'button_link', 'value' => '/consultation', 'type' => 'text'],
        ];

        foreach ($ctaContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'cta', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        // ========================================
        // TESTIMONIALS SECTION
        // ========================================
        $testimonialsContent = [
            ['key' => 'subtitle', 'value' => 'آراء عملائنا', 'type' => 'text'],
            ['key' => 'title', 'value' => 'ماذا يقول', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'عملاؤنا', 'type' => 'text'],
            ['key' => 'button_text', 'value' => 'استشارة مجانية', 'type' => 'text'],
        ];

        foreach ($testimonialsContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'testimonials', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        $testimonials = [
            [
                'name' => 'أحمد محمد',
                'location' => 'الرياض',
                'role' => 'رجل أعمال',
                'content' => 'تجربة ممتازة مع المكتب، فريق محترف وخدمات قانونية متميزة. أنصح بالتعامل معهم.',
                'rating' => '5',
                'reviews_count' => '12.5k',
            ],
            [
                'name' => 'فاطمة العلي',
                'location' => 'جدة',
                'role' => 'محامية',
                'content' => 'خدمات قانونية احترافية ودعم متواصل. سعيدة جداً بالنتائج التي حققناها معاً.',
                'rating' => '5',
                'reviews_count' => '10.5k',
            ],
            [
                'name' => 'خالد السعيد',
                'location' => 'الدمام',
                'role' => 'مدير شركة',
                'content' => 'أفضل مكتب محاماة تعاملت معه. كفاءة عالية واحترافية في التعامل.',
                'rating' => '5',
                'reviews_count' => '15.5k',
            ],
        ];

        foreach ($testimonials as $index => $testimonial) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'testimonials', 'order' => $index],
                ['content' => $testimonial, 'is_active' => true]
            );
        }

        // ========================================
        // TEAM SECTION
        // ========================================
        $teamContent = [
            ['key' => 'subtitle', 'value' => 'أفضل خدماتنا', 'type' => 'text'],
            ['key' => 'title', 'value' => 'فريق العمل', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'المتميز', 'type' => 'text'],
        ];

        foreach ($teamContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'team', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        $teamMembers = [
            [
                'name' => 'أ. هادي الحصين',
                'role' => 'محامي تجاري',
                'linkedin' => '#',
                'twitter' => '#',
                'facebook' => '#',
            ],
            [
                'name' => 'أ. سارة أحمد',
                'role' => 'محامية أسرية',
                'linkedin' => '#',
                'twitter' => '#',
                'facebook' => '#',
            ],
            [
                'name' => 'أ. محمد علي',
                'role' => 'محامي جنائي',
                'linkedin' => '#',
                'twitter' => '#',
                'facebook' => '#',
            ],
            [
                'name' => 'أ. نورة السالم',
                'role' => 'مستشار قانوني',
                'linkedin' => '#',
                'twitter' => '#',
                'facebook' => '#',
            ],
        ];

        foreach ($teamMembers as $index => $member) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'team', 'order' => $index],
                ['content' => $member, 'is_active' => true]
            );
        }

        // ========================================
        // COUNTER SECTION
        // ========================================
        $counters = [
            ['number' => '2', 'suffix' => 'k+', 'label' => 'مشروع مكتمل'],
            ['number' => '95', 'suffix' => '%', 'label' => 'نسبة النجاح'],
            ['number' => '08', 'suffix' => '', 'label' => 'سنوات الخبرة'],
        ];

        foreach ($counters as $index => $counter) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'counters', 'order' => $index],
                ['content' => $counter, 'is_active' => true]
            );
        }

        // ========================================
        // CONTACT/CONSULTANCY SECTION
        // ========================================
        $contactContent = [
            ['key' => 'title', 'value' => 'يمكننا مساعدتك! سريع وسهل، ولا يوجد', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'أي التزام.', 'type' => 'text'],
            ['key' => 'description', 'value' => 'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم، ولكن الأغلبية.', 'type' => 'textarea'],
            ['key' => 'form_name_placeholder', 'value' => 'الاسم الكامل', 'type' => 'text'],
            ['key' => 'form_phone_placeholder', 'value' => '(966) 501-234567', 'type' => 'text'],
            ['key' => 'form_email_placeholder', 'value' => 'example@email.com', 'type' => 'text'],
            ['key' => 'form_message_placeholder', 'value' => 'رسالتك', 'type' => 'text'],
            ['key' => 'form_button_text', 'value' => 'استشارة مجانية', 'type' => 'text'],
        ];

        foreach ($contactContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'contact', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        // ========================================
        // FAQ SECTION
        // ========================================
        $faqContent = [
            ['key' => 'subtitle', 'value' => 'الأسئلة الشائعة', 'type' => 'text'],
            ['key' => 'title', 'value' => 'نقدم لكم', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'الأسئلة والأجوبة', 'type' => 'text'],
            ['key' => 'description', 'value' => 'نجيب على أكثر الأسئلة شيوعاً حول خدماتنا القانونية وطريقة عملنا.', 'type' => 'textarea'],
            ['key' => 'button_text', 'value' => 'جميع القضايا', 'type' => 'text'],
        ];

        foreach ($faqContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'faq', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        $faqs = [
            [
                'question' => 'ما هي أنواع القضايا التي تتعاملون معها؟',
                'answer' => 'نتعامل مع مجموعة واسعة من القضايا تشمل القضايا التجارية، الجنائية، الأسرية، العمالية، والعقارية.',
            ],
            [
                'question' => 'كيف يمكنني حجز استشارة قانونية؟',
                'answer' => 'يمكنك حجز استشارة من خلال موقعنا الإلكتروني أو الاتصال بنا مباشرة. نوفر استشارات أولية مجانية.',
            ],
            [
                'question' => 'ما هي تكلفة الخدمات القانونية؟',
                'answer' => 'تختلف التكلفة حسب نوع القضية وتعقيدها. نقدم تقديراً واضحاً للتكاليف قبل البدء في أي إجراء.',
            ],
            [
                'question' => 'هل تقدمون خدمات للشركات والمؤسسات؟',
                'answer' => 'نعم، نقدم خدمات قانونية شاملة للشركات تشمل تأسيس الشركات، العقود، والاستشارات القانونية المستمرة.',
            ],
            [
                'question' => 'كم تستغرق القضية عادةً؟',
                'answer' => 'يعتمد ذلك على نوع القضية وتعقيدها. نحرص على إبقاء عملائنا على اطلاع دائم بتطورات قضاياهم.',
            ],
        ];

        foreach ($faqs as $index => $faq) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'faqs', 'order' => $index],
                ['content' => $faq, 'is_active' => true]
            );
        }

        // ========================================
        // BLOG SECTION
        // ========================================
        $blogContent = [
            ['key' => 'subtitle', 'value' => 'آخر الأخبار والمقالات', 'type' => 'text'],
            ['key' => 'title', 'value' => 'مدونة القانون', 'type' => 'text'],
            ['key' => 'title_highlight', 'value' => 'والمستجدات النظامية', 'type' => 'text'],
        ];

        foreach ($blogContent as $item) {
            HomePageContent::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'blog', 'key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'], 'is_active' => true]
            );
        }

        $blogs = [
            [
                'title' => 'أهمية التوثيق الرسمي في حماية الحقوق المالية.',
                'author' => 'إدارة المكتب',
                'category' => 'قانوني',
                'date' => '30 ديسمبر 2025',
                'link' => '/blog-detail',
            ],
            [
                'title' => 'دليل المنشآت في التعامل مع القضايا العمالية والتجارية.',
                'author' => 'إدارة المكتب',
                'category' => 'قانوني',
                'date' => '30 ديسمبر 2025',
                'link' => '/blog-detail',
            ],
            [
                'title' => 'الأنظمة الجديدة في المحاكم السعودية وكيفية الاستفادة منها.',
                'author' => 'إدارة المكتب',
                'category' => 'قانوني',
                'date' => '30 ديسمبر 2025',
                'link' => '/blog-detail',
            ],
        ];

        foreach ($blogs as $index => $blog) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'blogs', 'order' => $index],
                ['content' => $blog, 'is_active' => true]
            );
        }

        // ========================================
        // PARTNERS SECTION
        // ========================================
        $partners = [
            ['name' => 'شريك 1', 'link' => '#'],
            ['name' => 'شريك 2', 'link' => '#'],
            ['name' => 'شريك 3', 'link' => '#'],
            ['name' => 'شريك 4', 'link' => '#'],
            ['name' => 'شريك 5', 'link' => '#'],
        ];

        foreach ($partners as $index => $partner) {
            HomePageItem::updateOrCreate(
                ['home_version' => $homeVersion, 'section' => 'partners', 'order' => $index],
                ['content' => $partner, 'is_active' => true]
            );
        }
    }
}
