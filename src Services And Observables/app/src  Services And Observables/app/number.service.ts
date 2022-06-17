import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(no: number):boolean {
    let flag: boolean = true;
    if (no == 1 || no == 2) {
      flag=false;
    }
   else
   {
    for (let index = 2; index <= no / 2; index++) {
      if (no % index == 0) {
        flag = false;
        break;
      }
    }
  }
    
    return flag;
  }
}
