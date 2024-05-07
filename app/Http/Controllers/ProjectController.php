<?php

// app/Http/Controllers/ProjectController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\project;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Collection;
use App\Http\Resources\ProjectResource;
use Illuminate\Support\Facades\Auth;


class ProjectController extends Controller
{

     /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Project/create");
    }


    public function index() {
        $query = Project::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }


        $projects = $query->paginate(10)->onEachSide(1);
        return inertia("Project/Index", [
            "projects" => ProjectResource::Collection($projects),
        ]
    
    );
    }


        public function store(Request $request)
    {
        $newproject = new Project();
        $newproject->fill($request->all());
        //$newproject->user_id = auth()->id();
        $newproject['user_id'] = Auth::id();
        $newproject->save();

        $projects = Project::all();
        // Redirige l'utilisateur vers la liste des rapports après avoir créé le rapport
        // return Inertia::render('Reports/Index', ['reports' => $reports]);
        return Inertia::render('prof');
    }


    public function edit(Project $project)
    {
        return inertia('Project/Edit',);
    }

    // Met à jour un rapport existant dans la base de données
    public function update(Request $request, $id)
    {

            // Validation des données du formulaire
    
        $validatedData = $request->validate([
                    'titre' => 'required|string',
                    'description' => 'required|text',
                    'status' => 'required|string',
                    'equipe' => 'required|text',
                    'date_debut' => 'required|date',
                    'date_fin' => 'required|date|after:date_debut',
                    // 'selected_users' => 'required|array',
                    // 'selected_users.*' => 'exists:users,id',
                ]);
        
       
        // Récupère le rapport spécifique à mettre à jour en fonction de son ID
        $project = Project::findOrFail($id);

        // Met à jour les données du rapport avec les données validées
        $project->update($validatedData);

        // Redirige l'utilisateur vers la liste des rapports après avoir mis à jour le rapport
        // return Inertia::render('Reports/Show', ['report' => $report]);
        return Inertia::render('/prof');
    }


    // Affiche un rapport spécifique
    public function show($id)
    {
        // Récupère le rapport spécifique à afficher en fonction de son ID
        $project = Project::findOrFail($id);
        // Retourne une vue (utilise le moteur de rendu Inertia) qui affiche les détails du rapport
        return Inertia::render('Project/Show', ['project' => $project]);
    }


    public function destroy(Project $project)
    {
        $name = $project->name;
        $project->delete();
        if ($project->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($project->image_path));
        }
        return to_route('project.index')
            ->with('success', "Project \"$name\" was deleted");
    }

}
