import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  hero = {
    id: 1,
    name: 'Windstorm!'
  };

  heroes = [];

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
   this.heroService.getHeroes().then(
     heroes => this.heroes = heroes
   );
  }

  onHeroSelect(hero) {
    this.selectedHero = hero;
  }
  addHero(name){
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  onHeroDelete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }


}
