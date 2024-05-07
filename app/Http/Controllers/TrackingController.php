<?php

namespace App\Http\Controllers;

use App\Models\Tracking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrackingController extends Controller
{
    // Affiche le calendrier des soutenances à venir et passées
    public function index()
    {
        $upcoming = Tracking::upcoming();
        $past = Tracking::past();

        return Inertia::render('Track/Tracking', compact('upcoming', 'past'));
    }
}
