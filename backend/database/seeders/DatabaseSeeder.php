<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user for Filament if not exists
        if (!User::where('email', 'admin@zstal.com')->exists()) {
            User::create([
                'name' => 'Admin User',
                'email' => 'admin@zstal.com',
                'password' => Hash::make('ZstalAdmin2024!'), // Change this after first login!
                'email_verified_at' => now(),
            ]);
        }

        $this->call([
            ConsultationTypeSeeder::class,
            AvailableSlotSeeder::class,
            WhatsappTemplateSeeder::class,
            SettingSeeder::class,
        ]);
    }
}
