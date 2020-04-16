import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servises/pokemon.service';
import { TypeList } from 'src/app/common/type-list';
import { startWith } from 'rxjs/operators';
const CACHE_KEY='HtppTypeKey'
@Component({
  selector: 'app-pokemon-category',
  templateUrl: './pokemon-category.component.html',
  styleUrls: ['./pokemon-category.component.css']
})
export class PokemonCategoryComponent implements OnInit {
  types:TypeList[];
  typ;
  constructor(private _pokemonService : PokemonService) { }
  ngOnInit(): void {
    this.TypeList();
  }
 
  
  TypeList(){
    this._pokemonService.getPokemonTypes().subscribe(
      data => this.types= data)
      
    this.typ.subscribe(next=> 
      localStorage[CACHE_KEY]=JSON.stringify(next));

    this.typ = this.typ.pipe(
      startWith(JSON.parse(localStorage[CACHE_KEY] || '[]'))
    )
  }
  
 }

