<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        return Inertia::render('User/Index',[
            'users' => User::all()
        ]);
    }

    public function create(){
        return Inertia::render('User/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
            'password' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
        ]);
        //ユーザ登録処理
        User::create($validated);
        return redirect()->route('user.index');
    }
}
