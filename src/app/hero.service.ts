import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  
  getHeroes2(): Promise<Hero[]> {
     return Promise.resolve(HEROES);
  }

  getHeroes(): Hero[] {
     return HEROES;
  }

  getHeroSlowly(): Promise<Hero[]>{

   // return Promise.resolve(this.getHeroes2());

     return new Promise(resolve => {
         setTimeout(() => resolve(this.getHeroes()), 2000);
     });

  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes2()
                .then(heroes => heroes.find(hero => hero.id === id));
  }

}