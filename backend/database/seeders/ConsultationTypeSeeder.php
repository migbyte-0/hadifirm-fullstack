<?php

namespace Database\Seeders;

use App\Models\ConsultationType;
use Illuminate\Database\Seeder;

class ConsultationTypeSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            [
                'name_ar' => 'استشارة قانونية عامة',
                'name_en' => 'General Legal Consultation',
                'description_ar' => 'استشارات في مختلف المجالات القانونية',
                'description_en' => 'Consultations in various legal fields',
                'icon' => 'heroicon-o-scale',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'name_ar' => 'قضايا جنائية',
                'name_en' => 'Criminal Cases',
                'description_ar' => 'الدفاع في القضايا الجنائية والجرائم',
                'description_en' => 'Defense in criminal cases and crimes',
                'icon' => 'heroicon-o-shield-exclamation',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'name_ar' => 'قضايا الأحوال الشخصية',
                'name_en' => 'Personal Status Cases',
                'description_ar' => 'الطلاق، الحضانة، النفقة، والميراث',
                'description_en' => 'Divorce, custody, alimony, and inheritance',
                'icon' => 'heroicon-o-users',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'name_ar' => 'قضايا تجارية',
                'name_en' => 'Commercial Cases',
                'description_ar' => 'النزاعات التجارية والعقود',
                'description_en' => 'Commercial disputes and contracts',
                'icon' => 'heroicon-o-briefcase',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'name_ar' => 'قضايا عمالية',
                'name_en' => 'Labor Cases',
                'description_ar' => 'حقوق العمال والنزاعات مع أصحاب العمل',
                'description_en' => 'Workers rights and disputes with employers',
                'icon' => 'heroicon-o-building-office',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'name_ar' => 'قضايا عقارية',
                'name_en' => 'Real Estate Cases',
                'description_ar' => 'العقود العقارية والنزاعات على الملكية',
                'description_en' => 'Real estate contracts and property disputes',
                'icon' => 'heroicon-o-home',
                'sort_order' => 6,
                'is_active' => true,
            ],
            [
                'name_ar' => 'صياغة العقود',
                'name_en' => 'Contract Drafting',
                'description_ar' => 'صياغة ومراجعة العقود القانونية',
                'description_en' => 'Drafting and reviewing legal contracts',
                'icon' => 'heroicon-o-document-text',
                'sort_order' => 7,
                'is_active' => true,
            ],
            [
                'name_ar' => 'استشارة أخرى',
                'name_en' => 'Other Consultation',
                'description_ar' => 'أنواع أخرى من الاستشارات القانونية',
                'description_en' => 'Other types of legal consultations',
                'icon' => 'heroicon-o-question-mark-circle',
                'sort_order' => 8,
                'is_active' => true,
            ],
        ];

        foreach ($types as $type) {
            ConsultationType::create($type);
        }
    }
}
