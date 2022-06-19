import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let add:number=value;
   for (let index = 0; index < args.length; index++) {
     add=add+args[index];
   }
   return add;
  }

}
