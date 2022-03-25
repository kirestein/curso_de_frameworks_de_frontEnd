import { Component } from '@angular/core';

@Component({
  selector: 'app-c-pai',
  templateUrl: './c-pai.component.html',
  styleUrls: ['./c-pai.component.css']
})
export class CPaiComponent {
  title = 'Angular-Alpha'

  //criar as propertys cujos valores serão enviados para o componente filho
  texto: string = 'Este é o texto que será exibido na janela de alerta'
  outroTexto: string = 'Texto enviado do componente-pai para o componente-filho'
}
