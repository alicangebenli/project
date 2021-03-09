<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Student
 * @package App\Models
 * @property boolean $timestamps;
 */
class Student extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'code'
    ];

    public function user()
    {
        return $this->morphOne(User::class,'userable');
    }

    public function guardian()
    {
        return $this->hasOne(Guardian::class);
    }
}
