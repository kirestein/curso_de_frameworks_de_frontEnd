import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  // vamos criar a propriedade com a expressão de uso da diretiva *ngFor
  subtitulo: string = '5 filmes sensacionais!'
  // criando nossa coleção de filmes sensacionais
  fimes: Filme[] = [
    {
      titulo: 'Laranja Mecânica',
      direcao: 'Stanley Kubrik',
      elenco: 'Malcom McDowel, Patrick Magee, Mcihael Bates',
      anoLancamento: '04 de setembro 1971'
    },
    {
      titulo: 'O Poderoso Chefão',
      direcao: 'Francis Ford',
      elenco: 'Marlon Brando, Al Paccino, James Caan',
      anoLancamento: '10 de setembro de 1972'
    },
    {
      titulo: 'Um Estranho no Ninho',
      direcao: 'Milos Forman',
      elenco: 'Jack Nicholson, Michael Berryman',
      anoLancamento: '26 de maio de 1976'
    },
    {
      titulo: 'A Lista de Schindler',
      direcao: 'Steven Spielberg',
      elenco: 'Liam Neeson, Ralph Fiennes, Ben Kinbgsley',
      anoLancamento: '11 de março de 1993'
    },
    {
      titulo: 'Forest Gump - O Contador de Histórias',
      direcao: 'Robert Zemeckis',
      elenco: 'Tom Hanks, Robin Wright, Gary Sinise',
      anoLancamento: '7 de dezembro de 1994'
    }
  ]
}

// vamos criar o nosso model domain - para dar o formato ao nosso dataset
class Filme {
  titulo!: string
  direcao!: string
  elenco!: string
  anoLancamento!: string
}
