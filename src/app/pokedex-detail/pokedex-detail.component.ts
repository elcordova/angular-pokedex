import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, TypePokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.scss']
})
export class PokedexDetailComponent implements OnInit {

  types = Object.values(TypePokemon);
  @Input() pokemon:Pokemon = <Pokemon>{}
  @Output() onSave:EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  @Output() onCancel:EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(){
    this.onSave.emit(this.pokemon);
  }

}
