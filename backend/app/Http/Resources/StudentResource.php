<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $guardianName = "";
        if($this->guardian) {
            $guardianName = $this->guardian->user->name;
        }

        $guardianEmail = "";
        if($this->guardian) {
            $guardianEmail = $this->guardian->user->email;
        }

        return [
            'id' => $this->user->id,
            'name' => $this->user->name,
            'email' => $this->user->email,
            'guardianName' => $guardianName,
            'guardianEmail' => $guardianEmail
        ];
    }
}
