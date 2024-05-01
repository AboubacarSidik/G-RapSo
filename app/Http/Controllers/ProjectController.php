<?php

// app/Http/Controllers/ProjectController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\project;

class ProjectController extends Controller
{

     /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Project/create");
    }


    public function store(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'titre' => 'required|string',
            'description' => 'required|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after:date_debut',
            // 'selected_users' => 'required|array',
            // 'selected_users.*' => 'exists:users,id',
        ]);

        // Create a new project
        $project = Project::create($validatedData);
        

        return to_route('prof')
            ->with('success', 'Projet créé avec succès');

        // Attach selected users to the project
        // $project->users()->attach($validatedData['selected_users']);

        // return response()->json(['message' => 'Project created successfully'], 201);
    }
}
