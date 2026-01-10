<?php

return [
    'column_toggle' => [
        'heading' => 'الأعمدة',
    ],

    'columns' => [
        'text' => [
            'actions' => [
                'collapse_list' => 'إخفاء :count',
                'expand_list' => 'إظهار :count المزيد',
            ],
            'more_list_items' => 'و :count المزيد',
        ],
    ],

    'fields' => [
        'bulk_select_page' => [
            'label' => 'تحديد/إلغاء تحديد جميع العناصر للإجراءات الجماعية.',
        ],
        'bulk_select_record' => [
            'label' => 'تحديد/إلغاء تحديد العنصر :key للإجراءات الجماعية.',
        ],
        'bulk_select_group' => [
            'label' => 'تحديد/إلغاء تحديد المجموعة :title للإجراءات الجماعية.',
        ],
        'search' => [
            'label' => 'بحث',
            'placeholder' => 'بحث',
            'indicator' => 'بحث',
        ],
    ],

    'summary' => [
        'heading' => 'الملخص',
        'subheadings' => [
            'all' => 'جميع :label',
            'group' => 'ملخص :group',
            'page' => 'هذه الصفحة',
        ],
        'summarizers' => [
            'average' => [
                'label' => 'المتوسط',
            ],
            'count' => [
                'label' => 'العدد',
            ],
            'sum' => [
                'label' => 'المجموع',
            ],
        ],
    ],

    'actions' => [
        'disable_reordering' => [
            'label' => 'إنهاء إعادة الترتيب',
        ],
        'enable_reordering' => [
            'label' => 'إعادة ترتيب السجلات',
        ],
        'filter' => [
            'label' => 'تصفية',
        ],
        'group' => [
            'label' => 'تجميع',
        ],
        'open_bulk_actions' => [
            'label' => 'إجراءات جماعية',
        ],
        'toggle_columns' => [
            'label' => 'إظهار/إخفاء الأعمدة',
        ],
    ],

    'empty' => [
        'heading' => 'لا توجد سجلات',
        'description' => 'أنشئ :model للبدء.',
    ],

    'filters' => [
        'actions' => [
            'apply' => [
                'label' => 'تطبيق الفلاتر',
            ],
            'remove' => [
                'label' => 'إزالة الفلتر',
            ],
            'remove_all' => [
                'label' => 'إزالة جميع الفلاتر',
                'tooltip' => 'إزالة جميع الفلاتر',
            ],
            'reset' => [
                'label' => 'إعادة تعيين',
            ],
        ],
        'heading' => 'الفلاتر',
        'indicator' => 'الفلاتر النشطة',
        'multi_select' => [
            'placeholder' => 'الكل',
        ],
        'select' => [
            'placeholder' => 'الكل',
        ],
        'trashed' => [
            'label' => 'السجلات المحذوفة',
            'only_trashed' => 'المحذوفة فقط',
            'with_trashed' => 'مع المحذوفة',
            'without_trashed' => 'بدون المحذوفة',
        ],
    ],

    'grouping' => [
        'fields' => [
            'group' => [
                'label' => 'تجميع حسب',
                'placeholder' => 'تجميع حسب',
            ],
            'direction' => [
                'label' => 'اتجاه التجميع',
                'options' => [
                    'asc' => 'تصاعدي',
                    'desc' => 'تنازلي',
                ],
            ],
        ],
    ],

    'reorder_indicator' => 'اسحب وأفلت السجلات لإعادة الترتيب.',

    'selection_indicator' => [
        'selected_count' => ':count سجل محدد',
        'actions' => [
            'select_all' => [
                'label' => 'تحديد الكل :count',
            ],
            'deselect_all' => [
                'label' => 'إلغاء تحديد الكل',
            ],
        ],
    ],

    'sorting' => [
        'fields' => [
            'column' => [
                'label' => 'ترتيب حسب',
            ],
            'direction' => [
                'label' => 'اتجاه الترتيب',
                'options' => [
                    'asc' => 'تصاعدي',
                    'desc' => 'تنازلي',
                ],
            ],
        ],
    ],
];
