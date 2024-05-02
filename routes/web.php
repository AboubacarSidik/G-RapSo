<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TrackingController;

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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
/*Routes For Report */
Route::get('/reports', [ReportController::class, 'index'])->name('reports.index');
Route::get('/reports/create', [ReportController::class, 'create'])->name('reports.create');
Route::get('/reports/{id}/edit', [ReportController::class, 'edit'])->name('reports.edit');
Route::get('/reports/{id}', [ReportController::class, 'show'])->name('reports.show');
Route::post('/reports', [ReportController::class, 'store'])->name('reports.store');
Route::put('/reports/{id}', [ReportController::class, 'update'])->name('reports.update');
Route::get('/reports/{id}/delete', [ReportController::class, 'delete'])->name('reports.delete');
Route::delete('/reports/{id}', [ReportController::class, 'destroy'])->name('reports.destroy');

/* Routes for Tracking*/
Route::get('/tracking', [TrackingController::class, 'index'])->name('tracking.index');

require __DIR__.'/auth.php';
