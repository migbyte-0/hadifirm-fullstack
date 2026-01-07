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
}
