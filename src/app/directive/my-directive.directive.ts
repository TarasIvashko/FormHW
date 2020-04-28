import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef: ElementRef) {

    console.log(this.elementRef.nativeElement.textContent);//??????????

    // this.elementRef.nativeElement.style.background = 'red';
  }

}
