import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  //Vamos criar um anunciador do evento que enviará um dataset para o pai
  @Output() anunciador = new EventEmitter<any>()

  //vamos criar um objeto literal para receber o conjunto de dados
  objDados: any = {}

  //vamos criar um método para USANDO O ANUNCIADOR enviar os dados
  enviarDados(): void {
    this.anunciador.emit(this.objDados)
  }
}
