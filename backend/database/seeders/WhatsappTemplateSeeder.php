<?php

namespace Database\Seeders;

use App\Models\WhatsappTemplate;
use Illuminate\Database\Seeder;

class WhatsappTemplateSeeder extends Seeder
{
    public function run(): void
    {
        $templates = [
            [
                'name' => 'قبول طلب الاستشارة',
                'key' => 'accept_request',
                'message_ar' => 'السلام عليكم {name}،

يسعدنا إبلاغكم بأنه تم قبول طلب الاستشارة الخاص بكم.

📅 التاريخ: {date}
⏰ الوقت: {time}
📋 نوع الاستشارة: {consultation_type}

نتطلع لخدمتكم في مكتب المحامي هادي محمد الحصين.

للاستفسارات: اتصل بنا على الرقم الموحد',
                'message_en' => 'Hello {name},

We are pleased to inform you that your consultation request has been accepted.

📅 Date: {date}
⏰ Time: {time}
📋 Consultation Type: {consultation_type}

We look forward to serving you at Attorney Hadi Mohammed Al-Husain Office.',
                'description' => 'رسالة ترسل عند قبول طلب الاستشارة',
                'is_active' => true,
            ],
            [
                'name' => 'رفض طلب الاستشارة',
                'key' => 'reject_request',
                'message_ar' => 'السلام عليكم {name}،

نأسف لإبلاغكم بأنه تعذر قبول طلب الاستشارة الخاص بكم في الموعد المطلوب.

السبب: الموعد غير متاح حالياً

نرجو منكم إعادة حجز موعد آخر من خلال موقعنا الإلكتروني.

مع تحيات مكتب المحامي هادي محمد الحصين',
                'message_en' => 'Hello {name},

We regret to inform you that we were unable to accept your consultation request at the requested time.

Reason: The time slot is not currently available

Please rebook another appointment through our website.

Regards, Attorney Hadi Mohammed Al-Husain Office',
                'description' => 'رسالة ترسل عند رفض طلب الاستشارة',
                'is_active' => true,
            ],
            [
                'name' => 'مشاركة طلب الاستشارة',
                'key' => 'share_request',
                'message_ar' => '📋 طلب استشارة جديد

👤 الاسم: {name}
📱 الهاتف: {phone}
📋 نوع الاستشارة: {consultation_type}
📅 التاريخ المطلوب: {date}
⏰ الوقت المطلوب: {time}
📝 الملاحظات: {notes}',
                'message_en' => '📋 New Consultation Request

👤 Name: {name}
📱 Phone: {phone}
📋 Type: {consultation_type}
📅 Requested Date: {date}
⏰ Requested Time: {time}
📝 Notes: {notes}',
                'description' => 'رسالة لمشاركة تفاصيل الطلب',
                'is_active' => true,
            ],
            [
                'name' => 'تذكير بالموعد',
                'key' => 'appointment_reminder',
                'message_ar' => 'السلام عليكم {name}،

نود تذكيركم بموعد الاستشارة القادم:

📅 التاريخ: {date}
⏰ الوقت: {time}
📋 نوع الاستشارة: {consultation_type}

نتطلع لرؤيتكم في مكتب المحامي هادي محمد الحصين.

للإلغاء أو التعديل، يرجى الاتصال بنا مسبقاً.',
                'message_en' => 'Hello {name},

We would like to remind you of your upcoming consultation:

📅 Date: {date}
⏰ Time: {time}
📋 Type: {consultation_type}

We look forward to seeing you.

For cancellation or modification, please contact us in advance.',
                'description' => 'رسالة تذكير بالموعد',
                'is_active' => true,
            ],
        ];

        foreach ($templates as $template) {
            WhatsappTemplate::create($template);
        }
    }
}
