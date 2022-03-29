import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //vamos criar um método para receber os dados do formulário
  recebedorDados(dadosRecebidos: any) {
    alert(`O email recebido foi: ${dadosRecebidos.email}`)
  }
}
