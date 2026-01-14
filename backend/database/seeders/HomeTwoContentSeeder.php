<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HomeTwoContentSeeder extends Seeder
{
    public function run(): void
    {
        $homeVersion = 'home_two';
        $now = now();

        // Clear existing data first
        DB::table('home_page_contents')->where('home_version', $homeVersion)->delete();
        DB::table('home_page_items')->where('home_version', $homeVersion)->delete();

        // ========================================
        // ALL CONTENT
        // ========================================
        $allContent = [
            // HERO SECTION
            ['section' => 'hero', 'key' => 'subtitle', 'value' => 'ملتزمون بحماية حقوقك ومستقبلك', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'title_line1', 'value' => 'نحن الأفضل في', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'title_highlight', 'value' => 'مكتب المحاماة', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'description', 'value' => 'نقدم خدمات قانونية متميزة تشمل الترافع أمام جميع المحاكم والجهات القضائية، وتقديم الاستشارات القانونية المتخصصة في مختلف المجالات.', 'type' => 'textarea'],
            ['section' => 'hero', 'key' => 'button_primary_text', 'value' => 'استشارة مجانية', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'button_primary_link', 'value' => '/consultation', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'button_secondary_text', 'value' => 'تواصل معنا', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'button_secondary_link', 'value' => '/contact', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'circle_text', 'value' => 'مكتب المحامي هادي الحصين مرحباً بكم', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'marquee_text', 'value' => 'نحن الأفضل في مكتب المحاماة', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'phone_number', 'value' => '+966501234567', 'type' => 'text'],

            // VIDEO SECTION
            ['section' => 'video', 'key' => 'title', 'value' => 'مكتب المحامي هادي الحصين', 'type' => 'text'],
            ['section' => 'video', 'key' => 'video_url', 'value' => 'https://www.youtube.com/embed/YOUR_VIDEO_ID', 'type' => 'text'],
            ['section' => 'video', 'key' => 'show_play_icon', 'value' => '1', 'type' => 'text'],

            // CALL SERVICE SECTION
            ['section' => 'call_service', 'key' => 'text', 'value' => 'تبحث عن استشارة قانونية مجانية؟', 'type' => 'text'],
            ['section' => 'call_service', 'key' => 'phone_number', 'value' => '+966501234567', 'type' => 'text'],
            ['section' => 'call_service', 'key' => 'phone_display', 'value' => '(966) 501-234567', 'type' => 'text'],

            // SPECIAL SERVICES SECTION
            ['section' => 'special_services', 'key' => 'subtitle', 'value' => 'أفضل خدماتنا', 'type' => 'text'],
            ['section' => 'special_services', 'key' => 'title', 'value' => 'خدماتنا', 'type' => 'text'],
            ['section' => 'special_services', 'key' => 'title_highlight', 'value' => 'المتميزة', 'type' => 'text'],
            ['section' => 'special_services', 'key' => 'description', 'value' => 'نقدم مجموعة شاملة من الخدمات القانونية المتخصصة التي تلبي احتياجات عملائنا.', 'type' => 'textarea'],

            // LEGAL PRACTICE AREAS SECTION
            ['section' => 'practice_areas', 'key' => 'subtitle', 'value' => 'أفضل خدماتنا', 'type' => 'text'],
            ['section' => 'practice_areas', 'key' => 'title', 'value' => 'مجالات الممارسة', 'type' => 'text'],
            ['section' => 'practice_areas', 'key' => 'title_highlight', 'value' => 'القانونية', 'type' => 'text'],

            // PORTFOLIO SECTION
            ['section' => 'portfolio', 'key' => 'subtitle', 'value' => 'دراسات الحالة', 'type' => 'text'],
            ['section' => 'portfolio', 'key' => 'title', 'value' => 'أحدث', 'type' => 'text'],
            ['section' => 'portfolio', 'key' => 'title_highlight', 'value' => 'القضايا', 'type' => 'text'],

            // CTA SECTION
            ['section' => 'cta', 'key' => 'title', 'value' => 'هل تحتاج إلى استشارة قانونية؟', 'type' => 'text'],
            ['section' => 'cta', 'key' => 'description', 'value' => 'تواصل معنا الآن للحصول على استشارة مجانية من فريق المحامين المتخصصين لدينا', 'type' => 'textarea'],
            ['section' => 'cta', 'key' => 'button_text', 'value' => 'احجز موعدك الآن', 'type' => 'text'],
            ['section' => 'cta', 'key' => 'button_link', 'value' => '/consultation', 'type' => 'text'],

            // TESTIMONIALS SECTION
            ['section' => 'testimonials', 'key' => 'subtitle', 'value' => 'آراء العملاء', 'type' => 'text'],
            ['section' => 'testimonials', 'key' => 'title', 'value' => 'ماذا يقول', 'type' => 'text'],
            ['section' => 'testimonials', 'key' => 'title_highlight', 'value' => 'عملاؤنا', 'type' => 'text'],

            // TEAM SECTION
            ['section' => 'team', 'key' => 'subtitle', 'value' => 'فريقنا', 'type' => 'text'],
            ['section' => 'team', 'key' => 'title', 'value' => 'تعرف على', 'type' => 'text'],
            ['section' => 'team', 'key' => 'title_highlight', 'value' => 'محامينا', 'type' => 'text'],

            // COUNTERS SECTION
            ['section' => 'counters', 'key' => 'title', 'value' => 'إنجازاتنا بالأرقام', 'type' => 'text'],

            // CONTACT SECTION
            ['section' => 'contact', 'key' => 'subtitle', 'value' => 'تواصل معنا', 'type' => 'text'],
            ['section' => 'contact', 'key' => 'title', 'value' => 'اطلب', 'type' => 'text'],
            ['section' => 'contact', 'key' => 'title_highlight', 'value' => 'استشارتك', 'type' => 'text'],
            ['section' => 'contact', 'key' => 'form_name_placeholder', 'value' => 'الاسم الكامل', 'type' => 'text'],
            ['section' => 'contact', 'key' => 'form_email_placeholder', 'value' => 'البريد الإلكتروني', 'type' => 'text'],
            ['section' => 'contact', 'key' => 'form_phone_placeholder', 'value' => 'رقم الهاتف', 'type' => 'text'],
            ['section' => 'contact', 'key' => 'form_service_placeholder', 'value' => 'نوع الخدمة', 'type' => 'text'],
            ['section' => 'contact', 'key' => 'form_message_placeholder', 'value' => 'رسالتك', 'type' => 'text'],
            ['section' => 'contact', 'key' => 'form_button_text', 'value' => 'إرسال الطلب', 'type' => 'text'],

            // FAQ SECTION
            ['section' => 'faq', 'key' => 'subtitle', 'value' => 'الأسئلة الشائعة', 'type' => 'text'],
            ['section' => 'faq', 'key' => 'title', 'value' => 'أسئلة', 'type' => 'text'],
            ['section' => 'faq', 'key' => 'title_highlight', 'value' => 'متكررة', 'type' => 'text'],

            // BLOG SECTION
            ['section' => 'blog', 'key' => 'subtitle', 'value' => 'المدونة', 'type' => 'text'],
            ['section' => 'blog', 'key' => 'title', 'value' => 'آخر', 'type' => 'text'],
            ['section' => 'blog', 'key' => 'title_highlight', 'value' => 'المقالات', 'type' => 'text'],

            // PARTNERS SECTION
            ['section' => 'partners', 'key' => 'title', 'value' => 'شركاؤنا', 'type' => 'text'],
        ];

        // Insert all content
        foreach ($allContent as $item) {
            DB::table('home_page_contents')->insert([
                'home_version' => $homeVersion,
                'section' => $item['section'],
                'key' => $item['key'],
                'value' => $item['value'],
                'type' => $item['type'],
                'is_active' => true,
                'order' => 0,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ========================================
        // ALL ITEMS
        // ========================================
        $allItems = [
            // Services Slider
            ['section' => 'services_slider', 'order' => 0, 'content' => ['title' => 'رسوم قانونية معقولة', 'description' => 'نحرص على تقديم خدمات قانونية بأسعار تنافسية ومناسبة لجميع العملاء.']],
            ['section' => 'services_slider', 'order' => 1, 'content' => ['title' => 'دعم متواصل على مدار الساعة', 'description' => 'فريقنا متاح دائماً للرد على استفساراتكم وتقديم الدعم القانوني اللازم.']],
            ['section' => 'services_slider', 'order' => 2, 'content' => ['title' => 'خطط دفع مرنة', 'description' => 'نوفر خيارات دفع متعددة تناسب ظروفكم المالية وتسهل عليكم الحصول على خدماتنا.']],

            // Special Services
            ['section' => 'special_services', 'order' => 0, 'content' => ['title' => 'الدفاع الجنائي', 'description' => 'نقدم خدمات الدفاع في القضايا الجنائية بكفاءة عالية.']],
            ['section' => 'special_services', 'order' => 1, 'content' => ['title' => 'القضايا الأسرية', 'description' => 'متخصصون في قضايا الأحوال الشخصية والأسرة.']],
            ['section' => 'special_services', 'order' => 2, 'content' => ['title' => 'الاعتداء والضرب', 'description' => 'نترافع في قضايا الاعتداء بمختلف أنواعها.']],

            // Practice Areas
            ['section' => 'practice_areas', 'order' => 0, 'content' => ['title' => 'القانون الجنائي', 'description' => 'دفاع متخصص في القضايا الجنائية']],
            ['section' => 'practice_areas', 'order' => 1, 'content' => ['title' => 'قانون الأسرة', 'description' => 'قضايا الطلاق والحضانة والنفقة']],
            ['section' => 'practice_areas', 'order' => 2, 'content' => ['title' => 'القانون التجاري', 'description' => 'العقود التجارية والشركات']],
            ['section' => 'practice_areas', 'order' => 3, 'content' => ['title' => 'القانون العقاري', 'description' => 'قضايا الملكية والعقارات']],
            ['section' => 'practice_areas', 'order' => 4, 'content' => ['title' => 'قانون العمل', 'description' => 'حماية حقوق العمال وأصحاب العمل']],
            ['section' => 'practice_areas', 'order' => 5, 'content' => ['title' => 'القضايا المالية', 'description' => 'النزاعات المالية والمصرفية']],

            // Portfolio
            ['section' => 'portfolio', 'order' => 0, 'content' => ['title' => 'قضية تجارية كبرى', 'category' => 'تجاري', 'description' => 'فزنا بقضية تجارية بقيمة 10 مليون ريال']],
            ['section' => 'portfolio', 'order' => 1, 'content' => ['title' => 'قضية أحوال شخصية', 'category' => 'أسري', 'description' => 'نجاح في قضية حضانة معقدة']],
            ['section' => 'portfolio', 'order' => 2, 'content' => ['title' => 'قضية جنائية', 'category' => 'جنائي', 'description' => 'براءة موكلنا في قضية جنائية']],

            // Testimonials
            ['section' => 'testimonials', 'order' => 0, 'content' => ['name' => 'أحمد محمد', 'position' => 'رجل أعمال', 'content' => 'خدمة قانونية ممتازة وفريق محترف جداً. أنصح بهم بشدة.', 'rating' => 5]],
            ['section' => 'testimonials', 'order' => 1, 'content' => ['name' => 'فاطمة علي', 'position' => 'مديرة شركة', 'content' => 'ساعدوني في حل قضية معقدة بكفاءة عالية. شكراً لكم.', 'rating' => 5]],
            ['section' => 'testimonials', 'order' => 2, 'content' => ['name' => 'خالد عبدالله', 'position' => 'مستثمر', 'content' => 'فريق محترف ومتفاني. أفضل مكتب محاماة تعاملت معه.', 'rating' => 5]],

            // Team
            ['section' => 'team', 'order' => 0, 'content' => ['name' => 'المحامي هادي الحصين', 'position' => 'المؤسس والمدير', 'bio' => 'خبرة أكثر من 20 عاماً في المحاماة']],
            ['section' => 'team', 'order' => 1, 'content' => ['name' => 'المحامي سعد العتيبي', 'position' => 'محامي رئيسي', 'bio' => 'متخصص في القضايا الجنائية']],
            ['section' => 'team', 'order' => 2, 'content' => ['name' => 'المحامية نورة الشمري', 'position' => 'محامية', 'bio' => 'متخصصة في قانون الأسرة']],
            ['section' => 'team', 'order' => 3, 'content' => ['name' => 'المحامي فهد القحطاني', 'position' => 'محامي', 'bio' => 'متخصص في القانون التجاري']],

            // Counters
            ['section' => 'counters', 'order' => 0, 'content' => ['label' => 'قضية ناجحة', 'value' => 1250, 'suffix' => '+']],
            ['section' => 'counters', 'order' => 1, 'content' => ['label' => 'عميل سعيد', 'value' => 850, 'suffix' => '+']],
            ['section' => 'counters', 'order' => 2, 'content' => ['label' => 'سنة خبرة', 'value' => 20, 'suffix' => '+']],
            ['section' => 'counters', 'order' => 3, 'content' => ['label' => 'محامي متخصص', 'value' => 15, 'suffix' => '']],

            // FAQ
            ['section' => 'faq', 'order' => 0, 'content' => ['question' => 'ما هي تكلفة الاستشارة الأولية؟', 'answer' => 'نقدم استشارة أولية مجانية لمدة 30 دقيقة لتقييم قضيتك وتحديد الخطوات التالية.']],
            ['section' => 'faq', 'order' => 1, 'content' => ['question' => 'كم يستغرق حل القضية عادةً؟', 'answer' => 'تعتمد مدة القضية على نوعها وتعقيدها. نحرص على إبقائك على اطلاع دائم بمستجدات قضيتك.']],
            ['section' => 'faq', 'order' => 2, 'content' => ['question' => 'هل يمكنني الدفع بالتقسيط؟', 'answer' => 'نعم، نوفر خطط دفع مرنة تناسب ظروفك المالية. تواصل معنا لمعرفة المزيد.']],
            ['section' => 'faq', 'order' => 3, 'content' => ['question' => 'ما هي مجالات تخصصكم؟', 'answer' => 'نتخصص في القانون الجنائي، الأحوال الشخصية، القانون التجاري، العقارات، وقانون العمل.']],

            // Blog
            ['section' => 'blog', 'order' => 0, 'content' => ['title' => 'أهمية التوثيق في العقود التجارية', 'excerpt' => 'تعرف على أهمية التوثيق القانوني للعقود التجارية وكيفية حماية حقوقك.', 'date' => '2024-01-15']],
            ['section' => 'blog', 'order' => 1, 'content' => ['title' => 'حقوق المرأة في نظام الأحوال الشخصية', 'excerpt' => 'نظرة شاملة على حقوق المرأة في النظام السعودي للأحوال الشخصية.', 'date' => '2024-01-10']],
            ['section' => 'blog', 'order' => 2, 'content' => ['title' => 'كيف تحمي حقوقك كموظف', 'excerpt' => 'دليل شامل لحماية حقوقك في بيئة العمل وفقاً لنظام العمل السعودي.', 'date' => '2024-01-05']],

            // Partners
            ['section' => 'partners', 'order' => 0, 'content' => ['name' => 'شريك 1', 'logo_alt' => 'شعار الشريك 1']],
            ['section' => 'partners', 'order' => 1, 'content' => ['name' => 'شريك 2', 'logo_alt' => 'شعار الشريك 2']],
            ['section' => 'partners', 'order' => 2, 'content' => ['name' => 'شريك 3', 'logo_alt' => 'شعار الشريك 3']],
            ['section' => 'partners', 'order' => 3, 'content' => ['name' => 'شريك 4', 'logo_alt' => 'شعار الشريك 4']],
            ['section' => 'partners', 'order' => 4, 'content' => ['name' => 'شريك 5', 'logo_alt' => 'شعار الشريك 5']],
        ];

        // Insert all items
        foreach ($allItems as $item) {
            DB::table('home_page_items')->insert([
                'home_version' => $homeVersion,
                'section' => $item['section'],
                'content' => json_encode($item['content']),
                'order' => $item['order'],
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }
}
