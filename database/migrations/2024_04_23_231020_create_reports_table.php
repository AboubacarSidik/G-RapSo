<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('prof_id');
            $table->unsignedBigInteger('prof_id');
            $table->foreign('prof_id')->references('id')->on('profs');
            $table->string('theme');
            $table->string('nom_entreprise')->nullable();
            $table->string('nom_maitre_stage')->nullable();
            $table->text('resume');
            $table->text('objectifs');
            $table->text('methodologie')->nullable();
            $table->text('resultats')->nullable();
            $table->text('conclusions');
            $table->date('date_soutenance');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
