import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  public Add(no1:any,no2:any)
  {
    return no1+no2;
  }

  public Sub(no1:any,no2:any)
  {
    return no1-no2;
  }
}
