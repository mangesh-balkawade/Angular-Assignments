import { Directive ,HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private eobj:ElementRef) {}

  @HostListener('mouseenter')onmouseenter()
  {
    this.eobj.nativeElement.style.color='red';
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.eobj.nativeElement.style.color='black';
  }

}
