import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validInput]',
  standalone: true
})
export class ValidInputDirective {

  constructor(
    private el:ElementRef
  ) { }

  @HostListener("keyup") method(){
    this.checkInputValidate(this.el.nativeElement)
  }

  checkInputValidate(el:any){
    const valid = el.validity.valid
    const id = el.id
    const divEl = document.querySelector(`#${id} + div`)
    if(!valid){
      el.className= "invalid"
      divEl!.innerHTML = el.validationMessage
    }else{
      el.className= ""
      divEl!.innerHTML = ""
    }
  }

}
