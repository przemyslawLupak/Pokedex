import { Abilities } from './abilities';
import { Types } from './types';
import { Stats } from './stats';

export class PokemonDetails {
    abilities:Abilities[];
    height:number;
    id:number;
    name:string;
    stats:Stats[];
    types:Types[];
    weight:number;
    
}
