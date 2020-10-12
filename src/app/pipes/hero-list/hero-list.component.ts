import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { TestService } from '../test.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];

  constructor(heroService: TestService) { 
    this.heroes = heroService.getHeroes()
    console.log(this.heroes)
  }

  ngOnInit(): void {
  }

}
