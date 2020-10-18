import { Component, OnInit } from '@angular/core';
import {TestserviceService} from './testservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  testServiceVar: boolean;
  constructor(private testService: TestserviceService) {
    this.testServiceVar = this.testService.testServiceBoolean;
    console.log(this.testServiceVar)
  }

  ngOnInit(): void {


  }

  onClick(): void {
    console.log('ada')
    this.testService.onClick();
    this.testServiceVar = this.testService.testServiceBoolean;
  }

}
