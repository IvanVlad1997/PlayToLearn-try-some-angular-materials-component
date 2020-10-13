import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(value: string): string {
    let newStr = `${value} Pipe`;
    
    return newStr;
  }

}
