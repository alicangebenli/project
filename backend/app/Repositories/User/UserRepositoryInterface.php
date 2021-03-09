<?php


namespace App\Repositories\User;


use App\Models\User;

interface UserRepositoryInterface
{
    public function create($data): User;

    public function update($data, $id): User;

    public function getWhereId($id): User;
}
