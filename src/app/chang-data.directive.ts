import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangData]'
})
export class ChangDataDirective {

  constructor(Element:ElementRef) { 
    console.log(Element);
    Element.nativeElement.innerText="Text is changed by changeText Directive.";
  }

}
