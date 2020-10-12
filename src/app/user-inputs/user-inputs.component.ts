import { Component, OnInit } from '@angular/core';
import { Hero } from '../pipes/hero';
import { TestService } from '../pipes/test.service';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css']
})
export class UserInputsComponent implements OnInit {
  heroes: Hero[]
  constructor(heroService: TestService) {
    this.heroes = heroService.getHeroes()
    console.log(this.heroes)
   }

  ngOnInit(): void {
  }

}
