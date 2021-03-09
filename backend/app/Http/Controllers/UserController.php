<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\User\UserRepositoryInterface;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    protected $user;

    public function __construct(UserRepositoryInterface $user)
    {
        $this->user = $user;
    }

    #[Route("/api/users", methods: ["PUT"])]
    public function update(UserUpdateRequest $request)
    {
        $user = $this->user->update([
            array_combine([
                "password" => Hash::make($request->input('password'))
            ], $request->only('name', 'password'))
        ], $request->user()->id);

        return \response(new UserResource($user), Response::HTTP_ACCEPTED);
    }
}
