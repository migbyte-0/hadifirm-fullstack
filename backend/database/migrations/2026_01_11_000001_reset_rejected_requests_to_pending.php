<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Reset all rejected requests to pending for fresh start
        // This is a one-time migration for existing test data
        DB::table('consultation_requests')
            ->where('status', 'rejected')
            ->update(['status' => 'pending']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Cannot reverse this migration as we don't know original states
    }
};
