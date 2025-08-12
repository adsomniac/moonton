<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role; // Import yang benar

class RoleTableSeeder extends Seeder
{
    public function run(): void
    {
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'user']);
    }
}