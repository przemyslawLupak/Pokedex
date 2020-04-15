import { Component, OnInit, Inject, ElementRef, HostListener, HostBinding } from '@angular/core';
import { Pokemon } from 'src/app/common/pokemon';
import { PokemonService } from 'src/app/servises/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { startWith } from 'rxjs/operators';
declare const scrollTop:any;
const  CACHE_KEY='HttpPokemonKey';
@Component({
  selector: 'app-book-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemones:Pokemon[];
  currentCategoryId= 1;
  startIndex=0;
  endIndex=100;
  poki;
  constructor(private _pokemonService: PokemonService,private _activatedRoute: ActivatedRoute,
    public el: ElementRef<HTMLElement>) { }
 
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=>{
      this.listPokemones();
    })
  }
  decreaseIndex(){
    if(this.startIndex>0){
    this.startIndex-=100;
    this.endIndex-=100;
    }
  }
  increaseIndex(){
    if(this.startIndex<800){
    this.startIndex+=100;
    this.endIndex+=100;
    }
  }
  call(){
    scrollTop()
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
  getArrayFromNumber(leng: number){
      return new Array((leng+36)/100);
  }
  updateIndex(pageIndex){
    this.startIndex=pageIndex*100;
    this.endIndex=this.startIndex+100;

  }
  listPokemones(){
    this.poki =this._pokemonService.getPokemones().subscribe(
      data => this.pokemones=data);

    this.poki.subscribe(next=> 
      localStorage[CACHE_KEY]=JSON.stringify(next));

    this.poki = this.poki.pipe(
      startWith(JSON.parse(localStorage[CACHE_KEY] || '[]'))
    )
   
 }
  
}
