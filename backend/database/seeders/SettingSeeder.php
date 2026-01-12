<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // General Settings
            [
                'group' => 'general',
                'key' => 'site_name',
                'value' => 'مكتب المحامي هادي محمد الحصين',
                'type' => 'text',
                'description' => 'اسم الموقع الذي يظهر في العنوان والشعار',
            ],
            [
                'group' => 'general',
                'key' => 'site_description',
                'value' => 'مكتب محاماة متخصص في تقديم الخدمات القانونية والاستشارات',
                'type' => 'textarea',
                'description' => 'وصف قصير للموقع',
            ],
            
            // Contact Settings
            [
                'group' => 'contact',
                'key' => 'phone',
                'value' => '+966501234567',
                'type' => 'text',
                'description' => 'رقم الهاتف الرئيسي',
            ],
            [
                'group' => 'contact',
                'key' => 'whatsapp',
                'value' => '+966501234567',
                'type' => 'text',
                'description' => 'رقم الواتساب للتواصل',
            ],
            [
                'group' => 'contact',
                'key' => 'email',
                'value' => 'info@alhusain-law.com',
                'type' => 'text',
                'description' => 'البريد الإلكتروني الرسمي',
            ],
            [
                'group' => 'contact',
                'key' => 'address',
                'value' => 'الرياض، المملكة العربية السعودية',
                'type' => 'textarea',
                'description' => 'عنوان المكتب',
            ],
            
            // Social Media
            [
                'group' => 'social',
                'key' => 'twitter',
                'value' => 'https://twitter.com/alhusain_law',
                'type' => 'text',
                'description' => 'رابط حساب تويتر',
            ],
            [
                'group' => 'social',
                'key' => 'instagram',
                'value' => 'https://instagram.com/alhusain_law',
                'type' => 'text',
                'description' => 'رابط حساب انستقرام',
            ],
            [
                'group' => 'social',
                'key' => 'linkedin',
                'value' => 'https://linkedin.com/company/alhusain-law',
                'type' => 'text',
                'description' => 'رابط صفحة لينكد إن',
            ],
            
            // WhatsApp Settings
            [
                'group' => 'whatsapp',
                'key' => 'default_country_code',
                'value' => '+966',
                'type' => 'text',
                'description' => 'كود الدولة للأرقام',
            ],
            [
                'group' => 'whatsapp',
                'key' => 'admin_whatsapp',
                'value' => '+966501234567',
                'type' => 'text',
                'description' => 'رقم الواتساب لإرسال الإشعارات',
            ],
            
            // Home Screen Settings
            [
                'group' => 'general',
                'key' => 'active_home_screen',
                'value' => '1',
                'type' => 'text',
                'description' => 'تصميم الصفحة الرئيسية النشط (1-5)',
            ],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }
    }
}
