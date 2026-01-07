<?php

namespace App\Filament\Resources\WebImageResource\Pages;

use App\Filament\Resources\WebImageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListWebImages extends ListRecords
{
    protected static string $resource = WebImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()->label('إضافة صورة جديدة'),
        ];
    }
}
