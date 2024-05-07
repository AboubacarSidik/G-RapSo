<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' =>new UserResource($this->user_id), 
            'titre' => $this->titre,
            'description' => $this->description,
            'status' => $this->status,
            'equipe' => $this->equipe,
            'date_debut' => (new Carbon($this->date_debut))->format('d-m-Y'),
            'date_fin' => (new Carbon($this->date_fin))->format('d-m-Y'),
            'created_at'=> (new Carbon($this->created_at))->format('d-m-Y'),
            'updated_at'=> (new Carbon($this->updated_at))->format('d-m-Y'),
        ];
    }
}
