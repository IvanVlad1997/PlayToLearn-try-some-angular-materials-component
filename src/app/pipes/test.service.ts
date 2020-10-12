import { Injectable } from '@angular/core';
import { HEROES } from './heroes'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getHeroes() { return HEROES }
}
