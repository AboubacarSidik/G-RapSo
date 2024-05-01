<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project_User extends Model
{
    protected $table = 'project_user';

    protected $fillable = [
        'user_id', 
        'project_id',
        'name',
        'prenom',
    ];

    // Define relationships if needed
    public function User()
    {

        return $this->hasMany(User::class);
    }

    public function Project()
    {

        return $this->hasMany(Project::class);
    }

    public function userId()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function userName()
    {
        return $this->belongsTo(User::class, 'name');
    }

    public function userPrenom()
    {
        return $this->belongsTo(User::class, 'prenom');
    }

    public function projectId()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }
}
