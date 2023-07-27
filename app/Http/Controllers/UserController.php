<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show(Request $request): Response
    {
        return Inertia::render('User/Show', [
          'user' => $request->user()
        ]);
    }
}