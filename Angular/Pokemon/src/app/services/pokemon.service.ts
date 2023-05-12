import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PokemonData } from 'src/models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl:string = '';

  constructor(
    private http:HttpClient
  ){
    
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    return this.http.get<PokemonData>(`${this.baseUrl}${pokemonName}`);
    //return this.pokeData;
  }
}
