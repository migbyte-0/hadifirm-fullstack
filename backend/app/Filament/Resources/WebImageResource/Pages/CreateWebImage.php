<?php

namespace App\Filament\Resources\WebImageResource\Pages;

use App\Filament\Resources\WebImageResource;
use Filament\Resources\Pages\CreateRecord;

class CreateWebImage extends CreateRecord
{
    protected static string $resource = WebImageResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotificationTitle(): ?string
    {
        return 'تم إضافة الصورة بنجاح';
    }
}
