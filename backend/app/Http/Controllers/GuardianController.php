<?php

namespace App\Http\Controllers;

use App\Http\Resources\GuardianResource;
use App\Models\User;
use App\Repositories\Guardian\GuardianRepositoryInterface;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GuardianController extends Controller
{
    protected $user;
    public function __construct(UserRepositoryInterface $user)
    {
        $this->user = $user;
    }

    #[Route("/api/parent", methods: ["GET"])]
    public function index(Request $request)
    {
        $data = $this->user->getWhereId($request->user()->id);
        return new GuardianResource($data);
    }
}
