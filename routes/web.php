<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('stufaps');
})->name('home');

Route::get('/stufaps', function () {
    return Inertia::render('stufaps');
})->name('stufaps');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

/*
|--------------------------------------------------------------------------
| TEMPORARY DEPLOYMENT ROUTES — DELETE AFTER USE
|--------------------------------------------------------------------------
| These routes exist only because shared cPanel hosting has no terminal.
| Each route is gated by a ?token= query string. Change DEPLOY_TOKEN below
| to a long random string before uploading, and DELETE THIS WHOLE BLOCK
| once your site is live and working. Leaving these routes in production
| is a serious security risk — they expose Artisan commands to the public.
*/

if (app()->environment('production')) {
    $deployToken = 'CHANGE-ME-TO-A-LONG-RANDOM-STRING';

    $guard = function () use ($deployToken) {
        abort_unless(request('token') === $deployToken, 403, 'Forbidden');
    };

    Route::get('/run-migrate', function () use ($guard) {
        $guard();
        Artisan::call('migrate', ['--force' => true]);
        return '<pre>'.e(Artisan::output()).'</pre>';
    });

    Route::get('/run-storage-link', function () use ($guard) {
        $guard();
        $target = base_path('storage/app/public');
        $link = public_path('storage');
        if (file_exists($link)) {
            return 'Symlink already exists.';
        }
        return symlink($target, $link)
            ? 'Symlink created!'
            : 'Failed to create symlink — your host may have disabled symlink().';
    });

    Route::get('/run-optimize', function () use ($guard) {
        $guard();
        Artisan::call('config:cache');
        Artisan::call('route:cache');
        Artisan::call('view:cache');
        return 'Caches built: config, route, view.';
    });

    Route::get('/run-optimize-clear', function () use ($guard) {
        $guard();
        Artisan::call('optimize:clear');
        return '<pre>'.e(Artisan::output()).'</pre>';
    });
}
