import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  //vamos criar as propriedades para vincularmos via ngStyle
  cores: string = '#380f6c'
  tamanho: number = 129

  //vamos instanciar a nossa classe
  objStyle: EstiloCss = new EstiloCss()
}

//Criando a classe para vincular a diretiva ngStyle
class EstiloCss {
  'color': string = '#33c9ff'
  'font-size': number = 80
  'font-weight': string = 'bold'
}
