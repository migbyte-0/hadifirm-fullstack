<?php

return [
    'components' => [
        'actions' => [
            'label' => 'إجراءات',
        ],
        'builder' => [
            'actions' => [
                'clone' => [
                    'label' => 'نسخ',
                ],
                'add' => [
                    'label' => 'إضافة إلى :label',
                ],
                'add_between' => [
                    'label' => 'إدراج بين الكتل',
                ],
                'delete' => [
                    'label' => 'حذف',
                ],
                'reorder' => [
                    'label' => 'نقل',
                ],
                'move_down' => [
                    'label' => 'تحريك لأسفل',
                ],
                'move_up' => [
                    'label' => 'تحريك لأعلى',
                ],
                'collapse' => [
                    'label' => 'طي',
                ],
                'expand' => [
                    'label' => 'توسيع',
                ],
                'collapse_all' => [
                    'label' => 'طي الكل',
                ],
                'expand_all' => [
                    'label' => 'توسيع الكل',
                ],
            ],
        ],
        'checkbox_list' => [
            'actions' => [
                'deselect_all' => [
                    'label' => 'إلغاء تحديد الكل',
                ],
                'select_all' => [
                    'label' => 'تحديد الكل',
                ],
            ],
        ],
        'file_upload' => [
            'editor' => [
                'actions' => [
                    'cancel' => [
                        'label' => 'إلغاء',
                    ],
                    'drag_crop' => [
                        'label' => 'وضع السحب "قص"',
                    ],
                    'drag_move' => [
                        'label' => 'وضع السحب "تحريك"',
                    ],
                    'flip_horizontal' => [
                        'label' => 'قلب أفقي',
                    ],
                    'flip_vertical' => [
                        'label' => 'قلب عمودي',
                    ],
                    'move_down' => [
                        'label' => 'تحريك للأسفل',
                    ],
                    'move_left' => [
                        'label' => 'تحريك لليسار',
                    ],
                    'move_right' => [
                        'label' => 'تحريك لليمين',
                    ],
                    'move_up' => [
                        'label' => 'تحريك للأعلى',
                    ],
                    'reset' => [
                        'label' => 'إعادة تعيين',
                    ],
                    'rotate_left' => [
                        'label' => 'تدوير لليسار',
                    ],
                    'rotate_right' => [
                        'label' => 'تدوير لليمين',
                    ],
                    'set_aspect_ratio' => [
                        'label' => 'تعيين نسبة العرض إلى الارتفاع إلى :ratio',
                    ],
                    'save' => [
                        'label' => 'حفظ',
                    ],
                    'zoom_100' => [
                        'label' => 'تكبير إلى 100%',
                    ],
                    'zoom_in' => [
                        'label' => 'تكبير',
                    ],
                    'zoom_out' => [
                        'label' => 'تصغير',
                    ],
                ],
                'fields' => [
                    'height' => [
                        'label' => 'الارتفاع',
                        'unit' => 'بكسل',
                    ],
                    'rotation' => [
                        'label' => 'الدوران',
                        'unit' => 'درجة',
                    ],
                    'width' => [
                        'label' => 'العرض',
                        'unit' => 'بكسل',
                    ],
                    'x_position' => [
                        'label' => 'X',
                        'unit' => 'بكسل',
                    ],
                    'y_position' => [
                        'label' => 'Y',
                        'unit' => 'بكسل',
                    ],
                ],
                'aspect_ratios' => [
                    'label' => 'نسب العرض إلى الارتفاع',
                    'no_fixed' => [
                        'label' => 'حر',
                    ],
                ],
            ],
        ],
        'key_value' => [
            'actions' => [
                'add' => [
                    'label' => 'إضافة صف',
                ],
                'delete' => [
                    'label' => 'حذف صف',
                ],
                'reorder' => [
                    'label' => 'إعادة ترتيب صف',
                ],
            ],
            'fields' => [
                'key' => [
                    'label' => 'المفتاح',
                ],
                'value' => [
                    'label' => 'القيمة',
                ],
            ],
        ],
        'markdown_editor' => [
            'toolbar_buttons' => [
                'attach_files' => 'إرفاق ملفات',
                'blockquote' => 'اقتباس',
                'bold' => 'عريض',
                'bullet_list' => 'قائمة نقطية',
                'code_block' => 'كتلة كود',
                'heading' => 'عنوان',
                'italic' => 'مائل',
                'link' => 'رابط',
                'ordered_list' => 'قائمة مرقمة',
                'redo' => 'إعادة',
                'strike' => 'يتوسطه خط',
                'table' => 'جدول',
                'undo' => 'تراجع',
            ],
        ],
        'repeater' => [
            'actions' => [
                'add' => [
                    'label' => 'إضافة إلى :label',
                ],
                'add_between' => [
                    'label' => 'إدراج بين',
                ],
                'clone' => [
                    'label' => 'نسخ',
                ],
                'collapse' => [
                    'label' => 'طي',
                ],
                'collapse_all' => [
                    'label' => 'طي الكل',
                ],
                'delete' => [
                    'label' => 'حذف',
                ],
                'expand' => [
                    'label' => 'توسيع',
                ],
                'expand_all' => [
                    'label' => 'توسيع الكل',
                ],
                'move_down' => [
                    'label' => 'تحريك لأسفل',
                ],
                'move_up' => [
                    'label' => 'تحريك لأعلى',
                ],
                'reorder' => [
                    'label' => 'نقل',
                ],
            ],
        ],
        'rich_editor' => [
            'dialogs' => [
                'link' => [
                    'actions' => [
                        'link' => 'ربط',
                        'unlink' => 'إلغاء الربط',
                    ],
                    'label' => 'الرابط',
                    'placeholder' => 'أدخل الرابط',
                ],
            ],
            'toolbar_buttons' => [
                'attach_files' => 'إرفاق ملفات',
                'blockquote' => 'اقتباس',
                'bold' => 'عريض',
                'bullet_list' => 'قائمة نقطية',
                'code_block' => 'كتلة كود',
                'h1' => 'عنوان 1',
                'h2' => 'عنوان 2',
                'h3' => 'عنوان 3',
                'italic' => 'مائل',
                'link' => 'رابط',
                'ordered_list' => 'قائمة مرقمة',
                'redo' => 'إعادة',
                'strike' => 'يتوسطه خط',
                'underline' => 'تسطير',
                'undo' => 'تراجع',
            ],
        ],
        'select' => [
            'actions' => [
                'create_option' => [
                    'label' => 'إنشاء',
                    'modal' => [
                        'heading' => 'إنشاء',
                        'actions' => [
                            'create' => [
                                'label' => 'إنشاء',
                            ],
                            'create_another' => [
                                'label' => 'إنشاء وإنشاء آخر',
                            ],
                        ],
                    ],
                ],
                'edit_option' => [
                    'label' => 'تعديل',
                    'modal' => [
                        'heading' => 'تعديل',
                        'actions' => [
                            'save' => [
                                'label' => 'حفظ',
                            ],
                        ],
                    ],
                ],
            ],
            'boolean' => [
                'true' => 'نعم',
                'false' => 'لا',
            ],
            'loading_message' => 'جاري التحميل...',
            'max_items_message' => 'يمكن اختيار :count فقط.',
            'no_search_results_message' => 'لا توجد نتائج مطابقة للبحث.',
            'placeholder' => 'اختر خياراً',
            'searching_message' => 'جاري البحث...',
        ],
        'tags_input' => [
            'placeholder' => 'وسم جديد',
        ],
        'wizard' => [
            'actions' => [
                'previous_step' => [
                    'label' => 'السابق',
                ],
                'next_step' => [
                    'label' => 'التالي',
                ],
            ],
        ],
    ],
];
