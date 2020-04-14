import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/servises/pokemon.service';
import { PokemonDetails } from 'src/app/common/pokemon-details';
import { Abilities } from 'src/app/common/abilities';
import { PokemonEvolution } from 'src/app/common/pokemon-evolution';
import { Species } from 'src/app/common/species';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private _pokemonService:PokemonService,private _acticatedRoute:ActivatedRoute) { }
  currentPokemonID:number;
  pokemonDetails:PokemonDetails;
  pokemmonEvolution:PokemonEvolution;
  pokemonSpecies:Species;
  ngOnInit(): void {
    this._acticatedRoute.paramMap.subscribe(()=>{
      this.PokemonDetails();
    })
    
  }
  pickAbility(abilities:Abilities[]){
    for(let a=0;a<abilities.length;a++){
      if(abilities[a].is_hidden==false){
        return abilities[a].ability.name;
      }
    }
  }
  PokemonDetails(){
    const hasPokemonId: boolean = this._acticatedRoute.snapshot.paramMap.has('id');
   if(hasPokemonId){
     this.currentPokemonID = +this._acticatedRoute.snapshot.paramMap.get('id');
   }
   else{
     this.currentPokemonID=1;
   }

   this._pokemonService.getPokemonDetails(this.currentPokemonID).subscribe(
     data => this.pokemonDetails=data
   )
 }


}
