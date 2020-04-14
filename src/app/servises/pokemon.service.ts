import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {  Pokemon } from '../common/pokemon';
import{PokemonCategory}from'../common/pokemon-category'
import { PokemonType } from '../common/pokemon-type';
import { getLocaleExtraDayPeriods } from '@angular/common';
import { TypeList } from '../common/type-list';
import { PokemonDetails } from '../common/pokemon-details';
import { Abilities } from '../common/abilities';
import { Stats } from '../common/stats';
import { Types } from '../common/types';
import { Species } from '../common/species';
import { PokemonEvolution } from '../common/pokemon-evolution';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private categoryUrl ="http://localhost:8080/api/v1/book-category?size=4";
  private baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=964";
  private primaryUrl = "https://pokeapi.co/api/v2/type";
  private pokemonDetailUrl ="https://pokeapi.co/api/v2/pokemon/";
  private pokemonSpeciesUrl ="https://pokeapi.co/api/v2/pokemon-species/";
  constructor(private httpClient: HttpClient) { }


  getPokemones():Observable<Pokemon[]>{

  return this.httpClient.get<GetResponcePokemones>(this.baseUrl).pipe(
    map(responce=> responce.results)
  ); 
  }
 getPokemonesByType(pokemonIndex:number):Observable<PokemonType[]>{
   const localUrl= `${this.primaryUrl}/${pokemonIndex}?limit=150`;
   return this.httpClient.get<GetResponcePokemonesByType>(localUrl).pipe(
     map(responce=> responce.pokemon)
   )
 }

 getPokemonDetails(pokemonIndex:number):Observable<PokemonDetails>{
  const localUrl= `${this.pokemonDetailUrl}${pokemonIndex}`;
  return this.httpClient.get<PokemonDetails>(localUrl).pipe(
    map(responce=> responce)
  )
}

getPokemonTypes():Observable<TypeList[]>{
  let typeUrl="https://pokeapi.co/api/v2/type";
  return this.httpClient.get<GetResponceType>(typeUrl).pipe(
    map(responce=> responce.results)
  )
}
getPokemonSpecies(id:number):Observable<Species>{
  const localUrl= `${this.pokemonSpeciesUrl}${id}`;
  return this.httpClient.get<GetResponcePokemonSpec>(localUrl).pipe(
    map(responce=> responce.evolution_chain))
}
getPokemonEvolution(url:string):Observable<PokemonEvolution>{
  return this.httpClient.get<GetResponcePokemonEvolution>(url).pipe(
    map(responce=> responce.chain)) 
}
}

interface GetResponceType{
  
  results:TypeList[];
}
interface GetResponcePokemonSpec{
  evolution_chain:Species;
}

interface GetResponcePokemones{

  results:Pokemon[];
}
interface GetResponcePokemonEvolution{

  chain:PokemonEvolution;
}
    
  interface GetResponcePokemonesByType{
    damage_relactions:{
      double_damage_from:PokemonType[];
      double_damage_to:PokemonType[];
      half_damage_from:PokemonType[];
      half_damage_to:PokemonType[];
      no_damage_from:PokemonType[];
      no_damage_to:PokemonType[];
    }
    game_indices:{
      game_index:number[];
      generation:Pokemon[];
    }
    generation:Pokemon;
    id:number;
    move_damage_class:Pokemon;
    moves:Pokemon[];
    name:string;
    names:{
      language:Pokemon[];
    }
     pokemon:PokemonType[];
    
    
  }