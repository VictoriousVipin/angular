import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDeeksha]'
})
export class DeekshaDirective {
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.color = 'red'; 
  }

}
