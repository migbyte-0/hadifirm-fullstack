<?php

namespace App\Filament\Resources\WebContentResource\Pages;

use App\Filament\Resources\WebContentResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditWebContent extends EditRecord
{
    protected static string $resource = WebContentResource::class;

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
        return 'تم حفظ التغييرات بنجاح';
    }

    protected function getFormActions(): array
    {
        return [
            $this->getSaveFormAction()->label('حفظ التغييرات'),
            $this->getCancelFormAction()->label('إلغاء'),
        ];
    }
}
