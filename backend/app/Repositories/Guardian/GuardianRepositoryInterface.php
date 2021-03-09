<?php
namespace App\Repositories\Guardian;

use App\Models\Guardian;
interface GuardianRepositoryInterface
{
    public function create(array $data): Guardian;
}
