<?php

return [
    'title' => 'تسجيل الدخول',
    'heading' => 'تسجيل الدخول إلى حسابك',
    'actions' => [
        'register' => [
            'before' => 'أو',
            'label' => 'إنشاء حساب',
        ],
        'request_password_reset' => [
            'label' => 'نسيت كلمة المرور؟',
        ],
    ],
    'form' => [
        'email' => [
            'label' => 'البريد الإلكتروني',
        ],
        'password' => [
            'label' => 'كلمة المرور',
        ],
        'remember' => [
            'label' => 'تذكرني',
        ],
        'actions' => [
            'authenticate' => [
                'label' => 'تسجيل الدخول',
            ],
        ],
    ],
    'messages' => [
        'failed' => 'بيانات الاعتماد هذه لا تتطابق مع سجلاتنا.',
    ],
    'notifications' => [
        'throttled' => [
            'title' => 'محاولات تسجيل دخول كثيرة',
            'body' => 'يرجى المحاولة مرة أخرى بعد :seconds ثانية.',
        ],
    ],
];
