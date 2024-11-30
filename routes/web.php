<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome',[
        'greeting' => 'Hello'
    ]);
})->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

use App\Http\Controllers\UserController;
Route::resource('/user', UserController::class);
