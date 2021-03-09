<?php


namespace App\Repositories\User;


use App\Models\User;

class UserRepository implements UserRepositoryInterface
{

    public function create($data): User
    {
        return User::create($data);
    }

    public function update($data, $id): User
    {
        $user = User::find($id);
        $data["password"] =
        $user->update($data);

        return $user;
    }

    public function getWhereId($id): User
    {
        return User::find($id);
    }
}
