import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/models/pokemon.model';

@Injectable({providedIn: 'root'})
export class PokemonService {

  private baseServiceUrl = 'https://pokemon-pichincha.herokuapp.com/pokemons/';
  idAuthor = 1;
  constructor(private http: HttpClient) { }

  getAllPokemons():Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseServiceUrl}?idAuthor=${this.idAuthor}`);
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    pokemon.idAuthor = this.idAuthor;
    return this.http.post<Pokemon>(this.baseServiceUrl, pokemon);
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.baseServiceUrl}${pokemon.id}`, pokemon);
  }

  deletePokemon(id: number): Observable<Pokemon> {
    return this.http.delete<Pokemon>(`${this.baseServiceUrl}${id}`);
  }

}
