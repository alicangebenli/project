<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Guardian
 * @package App\Models
 * @property boolean $timestamps
 */
class Guardian extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'student_id'
    ];

    public function user()
    {
        return $this->morphOne(User::class, 'userable');
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
