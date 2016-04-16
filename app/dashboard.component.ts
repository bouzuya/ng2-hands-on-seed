import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  template: `
    <h3>Top Heroes</h3>
    <div>
      <div
        *ngFor="#hero of heroes"
        (click)="goToDetail(hero)"
        >
        <div>
          <h4>{{hero.name}}</h4>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService
  ) {
  }

  ngOnInit(): any {
    this.getHeroes();
  }

  goToDetail(hero: Hero): void {
    const link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }

  private getHeroes(): void {
    this._heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
