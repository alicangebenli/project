<?php


namespace App\Repositories\Student;


use App\Models\Student;

class StudentRepository implements StudentRepositoryInterface
{
    public function getWhere(array $data): Student
    {
        return Student::where($data)->first();
    }
}
