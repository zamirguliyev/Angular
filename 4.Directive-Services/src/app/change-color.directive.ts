import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[changeColor]',
  standalone: true
})
export class ChangeColorDirective {
  @Input('changeColor') color :string | undefined
  @Input('name') name :string | undefined

  constructor(private el:ElementRef) { }

  @HostListener("mouseenter") method1(){
    this.el.nativeElement.style=`color: ${this.color}`
    this.el.nativeElement.innerHTML = this.name
    console.log("enter mause")
  }

  
  @HostListener("mouseleave") method2(){
      this.el.nativeElement.style="color:black"
    console.log("leave mause")
  }


}
