import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servises/pokemon.service';
import { PokemonCategory } from 'src/app/common/pokemon-category';
import { PokemonType } from 'src/app/common/pokemon-type';
import { TypeList } from 'src/app/common/type-list';

@Component({
  selector: 'app-pokemon-category',
  templateUrl: './pokemon-category.component.html',
  styleUrls: ['./pokemon-category.component.css']
})
export class PokemonCategoryComponent implements OnInit {
  types:TypeList[]
  constructor(private _pokemonService : PokemonService) { }
  ngOnInit(): void {
    this.TypeList();
  }
 
  
  TypeList(){
    this._pokemonService.getPokemonTypes().subscribe(
      data => this.types= data)
  }
  
 }

