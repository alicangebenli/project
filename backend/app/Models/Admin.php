<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Admin
 * @package App\Models
 * @property boolean $timestamps;
 */
class Admin extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [];

    public function user()
    {
        return $this->morphOne(User::class,'userable');
    }
}
