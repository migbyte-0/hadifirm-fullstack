<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Main table for storing all home page content (text, html)
        Schema::create('home_page_contents', function (Blueprint $table) {
            $table->id();
            $table->string('home_version')->default('home_two'); // home_one, home_two, etc.
            $table->string('section'); // hero, video, services, cta, etc.
            $table->string('key'); // title, subtitle, description, button_text, etc.
            $table->text('value')->nullable();
            $table->string('type')->default('text'); // text, textarea, html, json
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->unique(['home_version', 'section', 'key']);
            $table->index(['home_version', 'section']);
        });

        // Table for storing media (images, icons, SVGs)
        Schema::create('home_page_media', function (Blueprint $table) {
            $table->id();
            $table->string('home_version')->default('home_two');
            $table->string('section'); // hero, video, services, team, etc.
            $table->string('key'); // background_image, logo, icon_1, member_photo, etc.
            $table->string('file_path'); // storage path
            $table->string('file_name');
            $table->string('file_type'); // image, icon, svg
            $table->string('mime_type')->nullable();
            $table->integer('file_size')->nullable();
            $table->string('alt_text')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->index(['home_version', 'section']);
        });

        // Table for repeatable items (services, team members, testimonials, FAQs, blogs, partners)
        Schema::create('home_page_items', function (Blueprint $table) {
            $table->id();
            $table->string('home_version')->default('home_two');
            $table->string('section'); // services, team, testimonials, faqs, blogs, partners
            $table->json('content'); // JSON with all item fields
            $table->string('image_path')->nullable();
            $table->string('icon_path')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->index(['home_version', 'section', 'order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('home_page_items');
        Schema::dropIfExists('home_page_media');
        Schema::dropIfExists('home_page_contents');
    }
};
