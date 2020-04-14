import { Component, OnInit } from '@angular/core';
import { PokemonType } from 'src/app/common/pokemon-type';
import { PokemonService } from 'src/app/servises/pokemon.service';
import { Pokemon } from 'src/app/common/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-of-type',
  templateUrl: './pokemon-of-type.component.html',
  styleUrls: ['./pokemon-of-type.component.css']
})
export class PokemonOfTypeComponent implements OnInit {
  pokemonesType:PokemonType[];
  currentCategoryId:number;
  constructor(private _pokemonService: PokemonService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=>{
      this.listBooks();
    })
  }
  cutUrl(pokemonUrl:string){
    let a:number = pokemonUrl.length
   
    if (a>38){
      return pokemonUrl=pokemonUrl.substr(34,5);
    }
    else if(a>37){
      pokemonUrl=pokemonUrl.substr(34,3);
      if(parseInt(pokemonUrl)<=807){
        return pokemonUrl
 
      }
    }
    else if(a<37){
      return  pokemonUrl=pokemonUrl.substr(34,1);
    }
    else{
     return  pokemonUrl=pokemonUrl.substr(34,2);
    }
  }
  listBooks(){
     const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get('id');
    }
    else{
      this.currentCategoryId=1;
    }

    this._pokemonService.getPokemonesByType(this.currentCategoryId).subscribe(
      data => this.pokemonesType= data
    )
  }

}
