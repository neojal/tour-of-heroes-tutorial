import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  {id: 1, name: 'The Coon'},
  {id: 2, name: 'Mysterion'},
  {id: 3, name: 'Human Kite'},
  {id: 4, name: 'Toolshed'},
  {id: 5, name: 'Mosquito'},
  {id: 6, name: 'Tupperware'},
  {id: 7, name: 'Iron Maiden'},
  {id: 8, name: 'Mint-Berry Crunch'}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes - The SouthPark Series';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
