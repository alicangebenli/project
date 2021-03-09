<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $typeSplit = explode('\\',$this->userable_type);

        return [
            'name' => $this->name,
            'email' => $this->email,
            'type' => end($typeSplit)
        ];
    }
}
