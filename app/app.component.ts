import { Component } from 'angular2/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul
      class="heroes"
      >
      <li
        [class.selected]="hero === selectedHero"
        *ngFor="#hero of heroes"
        (click)="onSelect(hero)"
        >
        <span
          class="badge"
          >{{hero.id}}</span>
          &nbsp;{{hero.name}}
      </li>
    </ul>
    <my-hero-detail
      [hero]="selectedHero"
      >
    </my-hero-detail>
  `,
  directives: [
    HeroDetailComponent
  ]
})
export class AppComponent {
  title: string = 'Tour of Heroes';
  heroes: Hero[] = HEROES;
  selectedHero: Hero; // undefined

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
