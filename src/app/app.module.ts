import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonService } from './servises/pokemon.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonCategoryComponent } from './components/pokemon-category/pokemon-category.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { NgxPopper } from 'angular-popper';
import { PokemonOfTypeComponent } from './components/pokemon-of-type/pokemon-of-type.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AboutComponent } from './components/about/about.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';

const routes: Routes=[
  {path:'pokemones',component:PokemonListComponent},
  {path:'type/:id', component:PokemonOfTypeComponent},
  {path:'pokemon/:id', component:PokemonDetailsComponent},
  {path:'',redirectTo:'pokemones',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PageNotFoundComponent,
    PokemonCategoryComponent,
    PokemonDetailsComponent,
    PokemonOfTypeComponent,
    AboutComponent,
    KontaktComponent
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
