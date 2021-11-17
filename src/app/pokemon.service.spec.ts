import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Pokemon } from 'src/models/pokemon.model';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add idAuthor to the request', () => {
    service.idAuthor = 1;
    const pokemonRequest = <Pokemon>{ name: 'pikachu' }
    const httpClient = TestBed.get(HttpClient);
    const spy = spyOn(httpClient, 'post').and.callThrough();
    service.createPokemon(pokemonRequest);
    expect(pokemonRequest.idAuthor).toBeDefined();
  });
});
