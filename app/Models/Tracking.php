<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Tracking extends Model
{
    use HasFactory;

    protected $table = 'reports';

    protected $fillable = [
        'date_soutenance',
        'report_id', // Lien vers le rapport de soutenance
    ];

    // Relation avec le modèle Report
    public function report()
    {
        return $this->belongsTo(Report::class);
    }

    // Méthode pour récupérer les soutenances à venir
    public static function upcoming()
    {
        return self::with('report')->where('date_soutenance', '>', Carbon::now())->orderBy('date_soutenance')->get();
    }

    // Méthode pour récupérer les soutenances passées
    public static function past()
    {
        return self::with('report')->where('date_soutenance', '<', Carbon::now())->orderBy('date_soutenance')->get();
    }
}