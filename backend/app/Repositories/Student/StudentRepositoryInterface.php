<?php


namespace App\Repositories\Student;


use App\Models\Student;

interface StudentRepositoryInterface
{
    public function getWhere(array $data): Student;
}
