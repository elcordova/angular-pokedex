import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  filteredList: Pokemon[] = [];
  currentSearchTerm: string = '';
  creatingNew=false;
  currentPokemon!: Pokemon;
  constructor(private pokemonService: PokemonService){
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((data) => {
      this.pokemonList = data;
      this.filteredList=data;
    });
  }

  searchTerm(termino:string) {
    this.currentSearchTerm = termino;
    this.filteredList=this.pokemonList.filter((pokemon) => {
      return pokemon.name.toLowerCase().indexOf(termino.toLowerCase())>=0;
    })
  }
  openEditForm(pokemon: Pokemon){
    this.currentPokemon={...pokemon};
  }

  savePokemon(pokemon: Pokemon){
    if(pokemon.id){
      this.pokemonService.updatePokemon(pokemon).subscribe((data:Pokemon) => {
        this.pokemonList = this.pokemonList.map((p) => {
          if(p.id === pokemon.id){
            return data;
          }
          return p;
        });
        this.cancelForm();
        this.updateFilter()
      });
    }else{
      this.pokemonService.createPokemon(pokemon).subscribe((data) => {
        this.pokemonList.push(data);
        this.cancelForm();
        this.updateFilter()
      });
    }
  }

  updateFilter(){
    this.searchTerm(this.currentSearchTerm)
  }
  deletePokemon(pokemon: Pokemon){
    this.pokemonService.deletePokemon(<number>pokemon.id).subscribe(() => {
      this.pokemonList = this.pokemonList.filter((p) => p.id !== pokemon.id);
      this.filteredList = this.filteredList.filter((p) => p.id !== pokemon.id);
    });
  }

  openNewForm(){
    this.currentPokemon = <Pokemon>{};
  }

  cancelForm(){
    this.currentPokemon = <Pokemon><unknown>null;
  }
}
