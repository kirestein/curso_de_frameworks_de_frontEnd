import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlterarTexto]'
})
export class AlterarTextoDirective {

  constructor(elementoHTML: ElementRef) {
    console.log(elementoHTML)
    elementoHTML.nativeElement.innerText = 'Este é o texto inserido a partir da diretiva customizada'
  }

}
