import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMakeRed]'
})
export class MakeredDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
   }

}


@Directive({
  selector: 'appMakeGreen'
})
export class MakeGreenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'green';
   }

}

@Directive({
  selector: 'appMakeColored'
})
export class MakeColoredDirective implements OnInit {
   @Input() private color?: string;
   constructor(private el: ElementRef) {}
   public ngOnInit(): void {
    this.el.nativeElement.style.color = this.color;
  }
}
@Directive({
  selector: '[myIf]'
})
export class MyIfDirective implements OnInit {
  @Input() public myIf: boolean;
   constructor(private el: ElementRef) {}
   public ngOnInit(): void {
     if(this.myIf) {
      console.log("myIF true", this.myIf);
     } else {
      console.log("myIF false", this.myIf);
     }
     console.log(this.el.nativeElement);
    //this.el.nativeElement.style.display = this.myIf ? 'none' : 'block' ;
  }
}
