<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
     /**
     * The table associated with the model.
     *
     * @var string>
     */
    protected $table = 'reports';

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'theme',
        'nom_entreprise',
        'nom_maitre_stage',
        'resume',
        'objectifs',
        'methodologie',
        'resultats',
        'conclusions',
        'date_soutenance',

    ];
}
