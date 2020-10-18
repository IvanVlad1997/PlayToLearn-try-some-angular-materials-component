import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  testServiceBoolean: boolean = true;

  constructor() { }

  onClick(): void {
    console.log(this.testServiceBoolean)
    this.testServiceBoolean = !this.testServiceBoolean;
    console.log(this.testServiceBoolean)
  }
}
