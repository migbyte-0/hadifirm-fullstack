<?php

namespace App\Filament\Resources\WebContentResource\Pages;

use App\Filament\Resources\WebContentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListWebContents extends ListRecords
{
    protected static string $resource = WebContentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()->label('إضافة محتوى جديد'),
        ];
    }
}
