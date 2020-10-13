import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: Hero[]): Hero[] {
    return value.filter(hero => hero.isSecret);
  }

}
