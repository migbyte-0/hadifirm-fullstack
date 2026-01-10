<?php

namespace App\Filament\Resources\AvailableSlotResource\Pages;

use App\Filament\Resources\AvailableSlotResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAvailableSlot extends EditRecord
{
    protected static string $resource = AvailableSlotResource::class;

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
