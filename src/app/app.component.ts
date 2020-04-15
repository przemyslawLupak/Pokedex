import { Component } from '@angular/core';
import { Pokemon } from './common/pokemon';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Pokedex");
  }

  
}
