<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\facades\Auth;

class prof
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!Auth::check()) {
            return redirect()->route('login');
        }

        $userRole=Auth::user()->role;

        if($userRole == 2) {
            return redirect()->route('admin');
        }

        if($userRole == 1) {
            
            return $next($request);
        }

        if($userRole == 0) {
            return redirect()->route('dashboard');
        }
    }
}
