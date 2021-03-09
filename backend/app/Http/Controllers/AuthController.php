<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\Guardian;
use App\Models\User;
use App\Repositories\Guardian\GuardianRepositoryInterface;
use App\Repositories\Student\StudentRepositoryInterface;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    protected $guardian;
    protected $user;
    protected $student;

    public function __construct(GuardianRepositoryInterface $guardian, UserRepositoryInterface $user, StudentRepositoryInterface $student)
    {
        $this->guardian = $guardian;
        $this->user = $user;
        $this->student = $student;
    }

    #[Route("/api/register", methods: ["POST"])]
    public function register(AuthRegisterRequest $request)
    {
        $userable_type = Guardian::class;
        $student = $this->student->getWhere(["code" => $request->input('code')]);

        if(!$student) {
            return response()->json([
                "errors" =>  [
                    "code" => "Code in valid"
                ]
            ],Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $guardian = $this->guardian->create([
            'student_id' => $student->id
        ]);

        $user = $this->user->create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'userable_id' => $guardian->id,
            'userable_type' => $userable_type
        ]);

        return response(new UserResource($user), Response::HTTP_OK);
    }

    #[Route("/api/login", methods: ["POST"])]
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'error' => 'Invalid Credentials!',
            ], Response::HTTP_UNAUTHORIZED);
        }

        /** @var User $user */
        $user = Auth::user();

        $jwt = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $jwt, 60 * 24);

        return response([
            'jwt' => $jwt
        ], Response::HTTP_OK)->withCookie($cookie);
    }

    #[Route("/api/user", methods: ["GET"])]
    public function user(Request $request)
    {
        return new UserResource($request->user());
    }
}
