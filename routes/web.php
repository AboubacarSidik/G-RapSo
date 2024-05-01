<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Models\User;
use App\Models\project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'etudiant'])->name('dashboard');

Route::get('/admin', function () {
    return Inertia::render('admin');
})->middleware(['auth', 'verified', 'admin'])->name('admin');

Route::get('/prof', function () {
    return Inertia::render('prof');
})->middleware(['auth', 'verified', 'prof'])->name('prof');

Route::resource('/prof/project', ProjectController::class);

// Route::get('/prof/project', function () {
//     // $user = User::find(all);

//     return Inertia::render('Form/ProjectForm');
// })->middleware(['auth', 'verified', 'prof'])->name('prof');

// Route::get('/prof/create_project', [App\Http\Controllers\ProjectController::class, 'store'], function() {
//     return Inertia::render('Form/ProjectForm');
// })->middleware(['auth', 'verified', 'prof'])->name('ProjectController.store');

// Route::get('/prof/create_project', [ProjectController::class, 'store']);
// Route::get('/prof/create_project', 'ProjectController@create');
// Route::get('/prof/create', [ProjectController::class, 'create'])->name('project.create');
Route::get('/prof/create', function () {
    return Inertia::render('Project/create');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
