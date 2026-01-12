<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactPageContentSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        // Clear existing data
        DB::table('contact_page_contents')->truncate();
        DB::table('contact_page_items')->truncate();

        // ========================================
        // ALL CONTENT
        // ========================================
        $allContent = [
            // HERO SECTION
            ['section' => 'hero', 'key' => 'title', 'value' => 'تواصل معنا', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'breadcrumb_home', 'value' => 'الرئيسية', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'phone_number', 'value' => '0551099998', 'type' => 'text'],
            ['section' => 'hero', 'key' => 'phone_display', 'value' => '0551099998', 'type' => 'text'],

            // INFO SECTION
            ['section' => 'info', 'key' => 'phone_label', 'value' => 'رقم الهاتف', 'type' => 'text'],
            ['section' => 'info', 'key' => 'phone_1', 'value' => '0551099998', 'type' => 'text'],
            ['section' => 'info', 'key' => 'phone_2', 'value' => '0551099998', 'type' => 'text'],
            ['section' => 'info', 'key' => 'email_label', 'value' => 'البريد الإلكتروني', 'type' => 'text'],
            ['section' => 'info', 'key' => 'email_1', 'value' => 'hade1616@hotmail.com', 'type' => 'text'],
            ['section' => 'info', 'key' => 'email_2', 'value' => 'info@hadifirm.sa', 'type' => 'text'],
            ['section' => 'info', 'key' => 'location_label', 'value' => 'العنوان', 'type' => 'text'],
            ['section' => 'info', 'key' => 'location_1', 'value' => 'المملكة العربية السعودية', 'type' => 'text'],
            ['section' => 'info', 'key' => 'location_2', 'value' => 'الرياض - حي الملقا', 'type' => 'text'],

            // MAP SECTION
            ['section' => 'map', 'key' => 'title', 'value' => 'موقعنا على الخريطة', 'type' => 'text'],

            // COUNTER SECTION
            ['section' => 'counter', 'key' => 'title', 'value' => 'إنجازاتنا', 'type' => 'text'],

            // FOOTER SECTION
            ['section' => 'footer', 'key' => 'logo_alt', 'value' => 'مكتب المحامي هادي الحصين', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'description', 'value' => 'نقدم خدمات قانونية متميزة تشمل الترافع أمام جميع المحاكم والجهات القضائية، وتقديم الاستشارات القانونية المتخصصة.', 'type' => 'textarea'],
            ['section' => 'footer', 'key' => 'quick_links_title', 'value' => 'روابط سريعة', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'office_1_title', 'value' => 'المكتب الرئيسي', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'office_1_address_1', 'value' => 'المملكة العربية السعودية', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'office_1_address_2', 'value' => 'الرياض - حي الملقا', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'office_1_phone', 'value' => '0551099998', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'office_2_title', 'value' => 'فرع جدة', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'office_2_address_1', 'value' => 'جدة', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'office_2_address_2', 'value' => 'شارع التحلية', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'office_2_phone', 'value' => '0551099998', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'newsletter_title', 'value' => 'هل تريد التواصل معنا؟', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'newsletter_placeholder', 'value' => 'أدخل بريدك الإلكتروني...', 'type' => 'text'],
            ['section' => 'footer', 'key' => 'copyright_text', 'value' => 'جميع الحقوق محفوظة © 2024 مكتب المحامي هادي الحصين', 'type' => 'text'],
        ];

        // Insert all content
        foreach ($allContent as $item) {
            DB::table('contact_page_contents')->insert([
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
            // Social Links
            ['section' => 'social_links', 'order' => 0, 'content' => ['name' => 'فيسبوك', 'label' => 'fb', 'url' => 'https://www.facebook.com']],
            ['section' => 'social_links', 'order' => 1, 'content' => ['name' => 'تويتر', 'label' => 'TW', 'url' => 'https://www.twitter.com']],
            ['section' => 'social_links', 'order' => 2, 'content' => ['name' => 'انستقرام', 'label' => 'IN', 'url' => 'https://www.instagram.com']],
            ['section' => 'social_links', 'order' => 3, 'content' => ['name' => 'لينكد إن', 'label' => 'BE', 'url' => 'https://www.linkedin.com']],

            // Quick Links
            ['section' => 'quick_links', 'order' => 0, 'content' => ['name' => 'الخدمات القانونية', 'url' => '/services']],
            ['section' => 'quick_links', 'order' => 1, 'content' => ['name' => 'تواصل معنا', 'url' => '/contact']],
            ['section' => 'quick_links', 'order' => 2, 'content' => ['name' => 'الأسئلة الشائعة', 'url' => '/faq']],
            ['section' => 'quick_links', 'order' => 3, 'content' => ['name' => 'آراء العملاء', 'url' => '/testimonials']],
            ['section' => 'quick_links', 'order' => 4, 'content' => ['name' => 'عن المكتب', 'url' => '/about']],

            // Counters
            ['section' => 'counters', 'order' => 0, 'content' => ['value' => 2, 'suffix' => 'k+', 'label' => 'قضية منجزة']],
            ['section' => 'counters', 'order' => 1, 'content' => ['value' => 95, 'suffix' => '%', 'label' => 'نسبة النجاح']],
            ['section' => 'counters', 'order' => 2, 'content' => ['value' => 20, 'suffix' => '+', 'label' => 'سنوات الخبرة']],
        ];

        // Insert all items
        foreach ($allItems as $item) {
            DB::table('contact_page_items')->insert([
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
