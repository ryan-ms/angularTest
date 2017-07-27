import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
     return Promise.resolve(HEROES);
  }

  getHeroSlowly(): Promise<Hero[]>{

    return new Promise(resolve => {
        setTimeout(() => resolve(this.getHeroes()), 2000);
    });


  }

}