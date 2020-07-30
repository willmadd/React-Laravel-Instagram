<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gpxroute;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;

class ImageController extends Controller
{
    public function getImages ($slug) {
        
        // This will simulate an database call... obviously there's no database in this test project
        // database call would be something like...
        // DB::table('images')->where('slug', $slug);

        $path = public_path('images/'.$slug);
        $files = File::allFiles($path);

        $ImageData = collect($files)->map(function ($file) use ($slug) {
            return [
                "url"=>"images/${slug}/".basename($file),
                "likes"=>rand(1, 1000),
                "title"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            ];
        });

        return response()->json(
            $ImageData
        , 200);
    }
}
