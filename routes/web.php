<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostsController;
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

Route::get('/posts', [PostsController::class, 'index'])->name('posts.index');
Route::get('/posts/new', [PostsController::class, 'new'])->name('posts.new');

Route::get('/products',function(){
    return Inertia::render('AllProductComponent'); 
});

Route::get('/students',function(){
    return Inertia::render('AllStudentComponent'); 
});

Route::get('/appliance',function(){
    return Inertia::render('ApplianceComponent'); 
});

Route::get('/color',function(){
    return Inertia::render('ColorComponent'); 
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
