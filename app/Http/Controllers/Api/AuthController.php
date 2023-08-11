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

        $existingUser = User::where('email', $request->email)->first();
        if ($existingUser) {
            return response()->json(['error' => 'Email già in uso'], 400);
        }
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
        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('auth-token')->accessToken;
            return response()->json(['token' => $token]);
        } else {
            return response()->json(['error' => 'Credenziali errate'], 401);
        }
    }


    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out'], 200);
    }
}
