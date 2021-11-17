import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from 'src/models/pokemon.model';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.pokemon = <Pokemon>{hp:101,defense:101,attack:101, id:1};
    expect(component).toBeTruthy();
  });

  it('should attack load max width style on 100', () => {
    component.pokemon = <Pokemon>{hp:101,defense:101,attack:101, id:1};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.progressbar-attack>div').style.width).toEqual('100%');
  });

  it('should defense load max width style on 100', () => {
    component.pokemon = <Pokemon>{hp:101, defense:101, attack:101, id:1};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.progressbar-defense>div').style.width).toEqual('100%');
  });



  it('should hp load max width style on 100', () => {
    component.pokemon = <Pokemon>{ hp:101, defense:101, attack:101, id:1};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.progressbar-hp>div').style.width).toEqual('100%');
  });

});
