import { Component } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pokedex';


  savePokemon(event: Pokemon){
    console.log(event);
  }


  editPokemon(){
  }

  deletePokemon(){
  }
}
