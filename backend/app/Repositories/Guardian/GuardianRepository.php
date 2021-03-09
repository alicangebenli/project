<?php

namespace App\Repositories\Guardian;

use App\Models\Guardian;
use App\Models\User;
use \App\Repositories\Guardian\GuardianRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class GuardianRepository implements GuardianRepositoryInterface
{
    public function create(array $data): Guardian
    {
        return Guardian::create($data);
    }
}
