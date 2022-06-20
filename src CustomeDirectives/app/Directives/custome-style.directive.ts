import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective {

  constructor(private eobj:ElementRef) { 
    this.eobj.nativeElement.style.background='yellow';
    this.eobj.nativeElement.style.fontWeight='bold';
  }

  

}
