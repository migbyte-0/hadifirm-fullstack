<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Check if setting already exists
        $exists = DB::table('settings')->where('key', 'active_home_screen')->exists();
        
        if (!$exists) {
            DB::table('settings')->insert([
                'group' => 'general',
                'key' => 'active_home_screen',
                'value' => '1',
                'type' => 'text',
                'description' => 'تصميم الصفحة الرئيسية النشط (1-5)',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    public function down(): void
    {
        DB::table('settings')->where('key', 'active_home_screen')->delete();
    }
};
