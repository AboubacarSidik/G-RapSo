<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// app/Models/Project.php



class Project extends Model
{

    protected $table = 'projects';

    protected $fillable = [
        'titre', 
        'description', 
        'date_debut', 
        'date_fin'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'project_user', 'project_id', 'user_id');
    }

    // public function project_user()
    // {

        

    //     return $this->hasMany(project_user::class);
    // }

    // public function userId()
    // {
    //     return $this->belongsTo(project_user::class, 'user_id');
    // }

//     public function updatedBy()
//     {
//         return $this->belongsTo(User::class, 'updated_by');
//     }
}



