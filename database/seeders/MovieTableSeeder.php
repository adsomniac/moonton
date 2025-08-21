<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Spiderman: Brand New Day',
                'slug' => 'spiderman-brand-new-day',
                'category' => 'Action',
                'video_url' => 'https://you.com/video1',
                'thumbnail' => 'https://example.com/thumbnail1.jpg',
                'rating' => 4.5,
                'is_featured' => 1,
            ],
            [
                'name' => 'Batman: The Dark Knight',
                'slug' => 'batman-the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://example.com/video2',
                'thumbnail' => 'https://example.com/thumbnail2.jpg',
                'rating' => 4.7,
                'is_featured' => 0,
            ],
            [
                'name' => 'Superman: Man of Steel',
                'slug' => 'superman-man-of-steel',
                'category' => 'Action',
                'video_url' => 'https://example.com/video3',
                'thumbnail' => 'https://example.com/thumbnail3.jpg',
                'rating' => 4.6,
                'is_featured' => 1,
            ],
        ];

        Movie::insert($movies);
    }
}
