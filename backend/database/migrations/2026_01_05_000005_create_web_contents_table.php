<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('web_contents', function (Blueprint $table) {
            $table->id();
            $table->string('section'); // hero, about, services, footer, etc.
            $table->string('key')->unique();
            $table->string('type')->default('text'); // text, textarea, image, json
            $table->text('value_ar')->nullable();
            $table->text('value_en')->nullable();
            $table->text('description')->nullable(); // Admin hint
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('web_contents');
    }
};
