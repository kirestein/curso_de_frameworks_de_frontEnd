import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  //vamos implementar as props Pipe
  title: string = "Dudu três gols de cobertura no R. Ceni (Do meio de campo)"
  numFloat: number = 678.94
  dataHoje: Date = new Date()
  numDecimal: number = 4893547.9563
  objLiteral = {
    name: 'Erik',
    address: {
      street: 'Rua Dos Bobos',
      number: '0'
    }
  }
  mesesAno: Array<string> = ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Junho', 'Julho', 'Agos', 'Set', 'Out', 'Nov', 'Dez']
  numPercentual: number = 0.35
}
