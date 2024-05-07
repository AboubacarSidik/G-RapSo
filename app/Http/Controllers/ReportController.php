<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use App\Http\Resources\ReportResource;
use Inertia\Inertia;

class ReportController extends Controller
{
    // Affiche la liste de tous les rapports
    public function index()
    {
        $query = Report::query();

        // $sortField = request("sort_field", 'created_at');
        // $sortDirection = request("sort_direction", "desc");

        // if (request("name")) {
        //     $query->where("name", "like", "%" . request("name") . "%");
        // }
        // if (request("status")) {
        //     $query->where("status", request("status"));
        // }


        $reports = $query->paginate(10)->onEachSide(1);
        return inertia("Reports/Index", [
            "reports" => ReportResource::Collection($reports),
        ]);
        // Récupère tous les rapports de la base de données
        // $reports = Report::all();
        // Retourne une vue (utilise le moteur de rendu Inertia) qui affiche la liste des rapports
        // return Inertia::render('Reports/Index', ['reports' => $reports]);
    }

    // Affiche le formulaire pour créer un nouveau rapport
    public function create()
    {
        // Retourne une vue (utilise le moteur de rendu Inertia) qui affiche le formulaire de création de rapport
        return Inertia::render('Reports/Create');
    }

    // Stocke un nouveau rapport dans la base de données
    public function store(Request $request)
    {
        $newreport = new Report();
        $newreport->fill($request->all());
        $newreport->user_id = auth()->id();
        $newreport->save();

        $reports = Report::all();
        // Redirige l'utilisateur vers la liste des rapports après avoir créé le rapport
        return Inertia::render('Reports/Index', ['reports' => $reports]);
    }

    // Affiche le formulaire pour éditer un rapport existant
    public function edit($id)
    {
        // Récupère le rapport spécifique à éditer en fonction de son ID
        $report = Report::findOrFail($id);
        // Retourne une vue (utilise le moteur de rendu Inertia) qui affiche le formulaire d'édition de rapport
        return Inertia::render('Reports/Edit', ['report' => $report]);
    }

    // Met à jour un rapport existant dans la base de données
    public function update(Request $request, $id)
    {
        // Validation des données
        $validatedData = $request->validate([
            'theme' => 'required|string|max:255',
            'nom_entreprise' => 'nullable|string|max:255',
            'nom_maitre_stage' => 'nullable|string|max:255',
            'resume' => 'required|string',
            'objectifs' => 'required|string',
            'methodologie' => 'nullable|string',
            'resultats' => 'nullable|string',
            'conclusions' => 'required|string',
            'date_soutenance' => 'required|date',
        ]);

        // Récupère le rapport spécifique à mettre à jour en fonction de son ID
        $report = Report::findOrFail($id);

        // Met à jour les données du rapport avec les données validées
        $report->update($validatedData);

        // Redirige l'utilisateur vers la liste des rapports après avoir mis à jour le rapport
        return Inertia::render('Reports/Show', ['report' => $report]);
    }

        public function delete($id)
    {
        $report = Report::findOrFail($id);
        return Inertia::render('Reports/Delete', ['report' => $report]);
    }

    
    public function destroy($id)
    {
        // Recherchez le rapport par son identifiant
        $reportdelete = Report::findOrFail($id);

        // Supprimez le rapport
        $reportdelete->delete();
        $reports = Report::all();
        // Redirigez l'utilisateur vers une autre page, par exemple la liste des rapports
        return Inertia::render('Reports/Index', ['reports' => $reports])->with('success', 'Report deleted successfully');
    }

    // Affiche un rapport spécifique
    public function show($id)
    {
        // Récupère le rapport spécifique à afficher en fonction de son ID
        $report = Report::findOrFail($id);
        // Retourne une vue (utilise le moteur de rendu Inertia) qui affiche les détails du rapport
        return Inertia::render('Reports/Show', ['report' => $report]);
    }
}
