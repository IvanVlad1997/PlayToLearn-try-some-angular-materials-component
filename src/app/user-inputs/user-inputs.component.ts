import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../pipes/hero';
import { TestService } from '../pipes/test.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css']
})
export class UserInputsComponent implements OnInit {

  // @ViewChild('f',{static:false}) modelForm: NgForm;

  testForm = {
    name: '',
    canFly: false
  }

  heroes: Hero[]
  constructor(heroService: TestService) {
    this.heroes = heroService.getHeroes()
    console.log(this.heroes)
   }
  value = ''

  ngOnInit(): void {
  }

  
  // addHero(value:Hero) {
  //   this.heroes.push(value) ;
  //   console.log(this.heroes)
  // }

  onSubmit() {
    // this.submitted = true;
    // this.name = this.modelForm.value.name;
    console.log(this.testForm)
    let lastId = this.heroes[this.heroes.length - 1].id +1
    console.log(lastId)
    let newHero: Hero = {
      name: this.testForm.name,
      isSecret: this.testForm.canFly,
      id: lastId
    }
   
    this.heroes.push(newHero)
    
    // this.modelForm.reset();
   
  }
  


}
