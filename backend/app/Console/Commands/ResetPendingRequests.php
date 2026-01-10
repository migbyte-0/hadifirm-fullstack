<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ConsultationRequest;

class ResetPendingRequests extends Command
{
    protected $signature = 'requests:reset-pending';
    protected $description = 'Reset all rejected requests to pending status';

    public function handle()
    {
        $count = ConsultationRequest::where('status', 'rejected')
            ->update(['status' => 'pending']);
        
        $this->info("Updated {$count} requests to pending status.");
        
        return Command::SUCCESS;
    }
}
