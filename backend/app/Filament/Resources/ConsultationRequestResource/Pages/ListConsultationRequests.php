<?php

namespace App\Filament\Resources\ConsultationRequestResource\Pages;

use App\Filament\Resources\ConsultationRequestResource;
use Filament\Resources\Pages\ListRecords;
use Filament\Actions;

class ListConsultationRequests extends ListRecords
{
    protected static string $resource = ConsultationRequestResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()
                ->label('إضافة طلب جديد'),
        ];
    }
}
