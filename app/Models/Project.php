<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

// app/Models/Project.php



class Project extends Model
{

    protected $table = 'projects';

    protected $fillable = [
        'titre', 
        'description',
        'status',
        'equipe', 
        'date_debut', 
        'date_fin'
    ];

   

    public function user_id()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}



