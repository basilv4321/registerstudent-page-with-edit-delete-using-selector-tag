import { Directive,ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private ele:ElementRef) { 

  }


  @HostListener('mouseenter') onMouseenter(){
    this.ele.nativeElement.style.backgroundColor='red'
    this.ele.nativeElement.style.color='white'
  }
  @HostListener('mouseleave') onMouseleave(){
    this.ele.nativeElement.style.backgroundColor='white'
    this.ele.nativeElement.style.color='black'
    
  }
}
