<?php

return [
    'actions' => [
        'modal' => [
            'actions' => [
                'cancel' => [
                    'label' => 'إلغاء',
                ],
                'confirm' => [
                    'label' => 'تأكيد',
                ],
                'submit' => [
                    'label' => 'إرسال',
                ],
            ],
        ],
    ],

    'pagination' => [
        'label' => 'التنقل بين الصفحات',
        'overview' => 'عرض :first إلى :last من :total نتيجة',
        'fields' => [
            'records_per_page' => [
                'label' => 'لكل صفحة',
                'options' => [
                    'all' => 'الكل',
                ],
            ],
        ],
        'actions' => [
            'first' => [
                'label' => 'الأولى',
            ],
            'go_to_page' => [
                'label' => 'انتقل إلى صفحة :page',
            ],
            'last' => [
                'label' => 'الأخيرة',
            ],
            'next' => [
                'label' => 'التالية',
            ],
            'previous' => [
                'label' => 'السابقة',
            ],
        ],
    ],
];
