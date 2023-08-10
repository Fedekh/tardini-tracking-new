<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        // Validazione dei dati del modulo di registrazione...

        $user = new User([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'level' => $request->level,
            'code' => $request->code,
            'branch' => $request->branch,
        ]);

        $user->save();

        return response()->json(['message' => 'Registration successful']);
    }

    public function login(Request $request)
    {
        // Validazione dei dati del modulo di login...

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }


        $token = $user->createToken('auth-token')->accessToken;

        return response()->json(['token' => $token]);
    }
    
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out'], 200);
    }
}
