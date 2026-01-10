<?php

return [
    'modal' => [
        'confirmation' => 'هل أنت متأكد؟',
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

    'create' => [
        'single' => [
            'label' => 'إضافة :label',
            'modal' => [
                'heading' => 'إضافة :label',
                'actions' => [
                    'create' => [
                        'label' => 'إضافة',
                    ],
                    'create_another' => [
                        'label' => 'إضافة وإضافة آخر',
                    ],
                ],
            ],
            'notifications' => [
                'created' => [
                    'title' => 'تم الإضافة',
                ],
            ],
        ],
    ],

    'delete' => [
        'single' => [
            'label' => 'حذف',
            'modal' => [
                'heading' => 'حذف :label',
                'actions' => [
                    'delete' => [
                        'label' => 'حذف',
                    ],
                ],
            ],
            'notifications' => [
                'deleted' => [
                    'title' => 'تم الحذف',
                ],
            ],
        ],
        'multiple' => [
            'label' => 'حذف المحدد',
            'modal' => [
                'heading' => 'حذف :label المحددة',
                'actions' => [
                    'delete' => [
                        'label' => 'حذف',
                    ],
                ],
            ],
            'notifications' => [
                'deleted' => [
                    'title' => 'تم الحذف',
                ],
            ],
        ],
    ],

    'edit' => [
        'single' => [
            'label' => 'تعديل',
            'modal' => [
                'heading' => 'تعديل :label',
                'actions' => [
                    'save' => [
                        'label' => 'حفظ التغييرات',
                    ],
                ],
            ],
            'notifications' => [
                'saved' => [
                    'title' => 'تم الحفظ',
                ],
            ],
        ],
    ],

    'view' => [
        'single' => [
            'label' => 'عرض',
            'modal' => [
                'heading' => 'عرض :label',
                'actions' => [
                    'close' => [
                        'label' => 'إغلاق',
                    ],
                ],
            ],
        ],
    ],

    'replicate' => [
        'single' => [
            'label' => 'نسخ',
            'modal' => [
                'heading' => 'نسخ :label',
                'actions' => [
                    'replicate' => [
                        'label' => 'نسخ',
                    ],
                ],
            ],
            'notifications' => [
                'replicated' => [
                    'title' => 'تم النسخ',
                ],
            ],
        ],
    ],

    'restore' => [
        'single' => [
            'label' => 'استعادة',
            'modal' => [
                'heading' => 'استعادة :label',
                'actions' => [
                    'restore' => [
                        'label' => 'استعادة',
                    ],
                ],
            ],
            'notifications' => [
                'restored' => [
                    'title' => 'تم الاستعادة',
                ],
            ],
        ],
        'multiple' => [
            'label' => 'استعادة المحدد',
            'modal' => [
                'heading' => 'استعادة :label المحددة',
                'actions' => [
                    'restore' => [
                        'label' => 'استعادة',
                    ],
                ],
            ],
            'notifications' => [
                'restored' => [
                    'title' => 'تم الاستعادة',
                ],
            ],
        ],
    ],

    'force_delete' => [
        'single' => [
            'label' => 'حذف نهائي',
            'modal' => [
                'heading' => 'حذف :label نهائياً',
                'actions' => [
                    'delete' => [
                        'label' => 'حذف',
                    ],
                ],
            ],
            'notifications' => [
                'deleted' => [
                    'title' => 'تم الحذف',
                ],
            ],
        ],
        'multiple' => [
            'label' => 'حذف المحدد نهائياً',
            'modal' => [
                'heading' => 'حذف :label المحددة نهائياً',
                'actions' => [
                    'delete' => [
                        'label' => 'حذف',
                    ],
                ],
            ],
            'notifications' => [
                'deleted' => [
                    'title' => 'تم الحذف',
                ],
            ],
        ],
    ],
];
