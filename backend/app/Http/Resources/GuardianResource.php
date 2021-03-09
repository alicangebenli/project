<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GuardianResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $studentName = '';
        if(!$this->userable->student->user->name) {
            $studentName = $this->userable->user->student;
        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'studentName' => $this->userable->student->user->name
        ];
    }
}
