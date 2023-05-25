import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.fontSize='24px';
  }
  // directive is applied on DOM element


}
