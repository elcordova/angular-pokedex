export interface Pokemon {
  id?: number;
  name: string;
  image: string;
  type: TypePokemon;
  hp: number;
  attack: number;
  defense: number;
  idAuthor: number;
  created_at?: string;
  updated_at?: string;
}


export enum TypePokemon {
  FIRE = 'fire',
  WATER = 'water',
  NORMAL = 'normal',
  BUG = 'bug',
  POISON = 'poison',
}
