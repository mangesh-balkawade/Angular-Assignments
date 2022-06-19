import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value:number, ...args: number[]): unknown {
   let mult:number=value;
   for (let index = 0; index < args.length; index++) {
      mult=mult*args[index];
   }
   return mult;
  }

}
