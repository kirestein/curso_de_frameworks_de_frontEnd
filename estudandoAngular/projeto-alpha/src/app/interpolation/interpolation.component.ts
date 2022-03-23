import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent{
  //criando as propriedade para o data binding interpolation
  public clientesSelecionados: string[] = ['Erik', 'Fábio', 'Fernando']
  public x: number = 10
  public umArray: Array<number> = [10, 25, 32, 49, 34]
  public dataHoje: Date = new Date()

  public statusBool: boolean = true

  //Criando um método
  public exibirTexto(): string{
    return 'Texto retornado a partir de uma função!'
  }
}
