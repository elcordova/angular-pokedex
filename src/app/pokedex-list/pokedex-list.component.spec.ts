import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonService } from '../pokemon.service';

import { PokedexListComponent } from './pokedex-list.component';

describe('PokedexListComponent', () => {
  let component: PokedexListComponent;
  let fixture: ComponentFixture<PokedexListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PokedexListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a empty pokemon list', () => {
    expect(component.pokemonList.length).toBe(0);
  })

  it('should filter pokemon list', () => {
    component.pokemonList = [<Pokemon>{name: 'pikachu'}, <Pokemon>{name: 'bolbasour'}, <Pokemon>{name: 'charmander'}];
    component.searchTerm('bolbasour');
    expect(component.filteredList.length).toBe(1);
  });

  it('shoud call update function from pokemon service', () => {
    const pokemonService = TestBed.get(PokemonService);
    const spy = spyOn(pokemonService, 'updatePokemon').and.callThrough();
    component.savePokemon(<Pokemon>{name: 'pikachu', id: 1});
    expect(spy).toHaveBeenCalled();
  });

  it('shoud call create function from pokemon service', () => {
    const pokemonService = TestBed.get(PokemonService);
    const spy = spyOn(pokemonService, 'createPokemon').and.callThrough();
    component.savePokemon(<Pokemon>{name: 'pikachu'});
    expect(spy).toHaveBeenCalled();
  });
});
