import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private eobj:ElementRef) { }

  @HostListener('mouseenter')onmouseenter()
  {
    this.eobj.nativeElement.style.color='green';
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.eobj.nativeElement.style.color='black';
  }

}
