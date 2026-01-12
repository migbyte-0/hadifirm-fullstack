<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Table for contact page content (text, links)
        Schema::create('contact_page_contents', function (Blueprint $table) {
            $table->id();
            $table->string('section'); // hero, info, counter, footer
            $table->string('key');
            $table->text('value')->nullable();
            $table->string('type')->default('text'); // text, textarea, html, link
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->unique(['section', 'key']);
            $table->index('section');
        });

        // Table for contact page media (images, icons, map)
        Schema::create('contact_page_media', function (Blueprint $table) {
            $table->id();
            $table->string('section'); // hero, info, map, footer
            $table->string('key'); // background_image, phone_icon, map_image, etc.
            $table->string('file_path');
            $table->string('file_name');
            $table->string('file_type'); // image, icon, svg
            $table->string('mime_type')->nullable();
            $table->integer('file_size')->nullable();
            $table->string('alt_text')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->index('section');
        });

        // Table for repeatable items (offices, social links, quick links)
        Schema::create('contact_page_items', function (Blueprint $table) {
            $table->id();
            $table->string('section'); // offices, social_links, quick_links, counters
            $table->json('content'); // Flexible JSON for different item types
            $table->string('image_path')->nullable();
            $table->string('icon_path')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->index('section');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_page_items');
        Schema::dropIfExists('contact_page_media');
        Schema::dropIfExists('contact_page_contents');
    }
};
