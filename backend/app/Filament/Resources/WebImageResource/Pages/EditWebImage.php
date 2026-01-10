<?php

namespace App\Filament\Resources\WebImageResource\Pages;

use App\Filament\Resources\WebImageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditWebImage extends EditRecord
{
    protected static string $resource = WebImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()->label('حذف'),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getSavedNotificationTitle(): ?string
    {
        return 'تم تحديث الصورة بنجاح';
    }

    protected function getFormActions(): array
    {
        return [
            $this->getSaveFormAction()->label('حفظ التغييرات'),
            $this->getCancelFormAction()->label('إلغاء'),
        ];
    }
}
