<?php

use App\Http\Controllers\Admin\ActivityController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DoctorsController;
use App\Http\Controllers\Admin\PatientsController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('Home');
});
Route::get('/about', function () {
    return inertia('About');
});
route::get('/login', [LoginController::class, 'index'])->name('login');
route::post('/login', [LoginController::class, 'checklogin']);

route::get('/register', [LoginController::class, 'register']);
route::post('/register', [LoginController::class, 'insert']);

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin')->group(function () {
        route::get('/dashboard', [DashboardController::class, 'index']);

        route::get('/doctors', [DoctorsController::class, 'index']);
        route::post('/doctors', [DoctorsController::class, 'insert']);
        route::post('/doctor-delete', [DoctorsController::class, 'delete']);
        route::post('/doctor-update', [DoctorsController::class, 'update']);

        route::get('/patients', [PatientsController::class, 'index']);
        route::post('/patients', [PatientsController::class, 'insert']);
        route::post('/patient-delete', [PatientsController::class, 'delete']);
        route::post('/patient-update', [PatientsController::class, 'update']);

        route::get('/activity', [ActivityController::class, 'index']);
        route::get('/settings', [SettingsController::class, 'index']);
        route::get('/profile', [ProfileController::class, 'index']);
    });

    Route::post('/logout', [LoginController::class, 'logout']);
});
