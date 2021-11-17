import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, TypePokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent  {
  @Input() pokemon!: Pokemon;
  @Output() onSave: EventEmitter<Pokemon> = new EventEmitter();

}
