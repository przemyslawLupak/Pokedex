import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonService } from './servises/pokemon.service';
import { RouterModule, Routes } from '@angular/router';
import { PaeNotFoundComponent } from './components/pae-not-found/pae-not-found.component';
import { PokemonCategoryComponent } from './components/pokemon-category/pokemon-category.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { NgxPopper } from 'angular-popper';
import { PokemonOfTypeComponent } from './components/pokemon-of-type/pokemon-of-type.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes=[
  {path:'pokemones',component:PokemonListComponent},
  {path:'type/:id', component:PokemonOfTypeComponent},
  {path:'pokemon/:id', component:PokemonDetailsComponent},
  {path:'',redirectTo:'pokemones',pathMatch:'full'},
  {path:'**',component:PaeNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PaeNotFoundComponent,
    PokemonCategoryComponent,
    PokemonDetailsComponent,
    PokemonOfTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPopper,
    LazyLoadImageModule
    
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
