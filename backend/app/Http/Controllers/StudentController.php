<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    #[Route("/api/students", methods: ["GET"])]
    public function index()
    {
        $student = Student::with(['user','guardian'])->get();

        return StudentResource::collection($student);
    }
}
