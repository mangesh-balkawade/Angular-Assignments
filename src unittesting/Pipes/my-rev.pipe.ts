import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): unknown {
    let str:string='';
    for (let index = value.length-1; index>=0; index--) {
         str=str+value.charAt(index);
    }
    return str;
  }

}
