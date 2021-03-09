<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AuthRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // student or admin etc.
            'type' => ['required', Rule::in('guardian')],
            'code' => 'required|string',
            'name' => 'required|string',
            'email' => 'required|email',
            'password'=> 'required|string'
        ];
    }
}
