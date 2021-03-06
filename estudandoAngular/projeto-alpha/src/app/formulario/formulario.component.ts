import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  //Criando as props para controlar o formulário
  dataForm: any
  email: any

  //chamando o hook para priorizar a instância da classe
  ngOnInit() {
    this.dataForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^@]*@[^@]*')
      ])),
      senha: new FormControl('', this.validacaoSenha)
    })
  }

  //Vamos criar um método para validar a senha
  validacaoSenha(senhaDigitada: any): any {
    if (senhaDigitada.value.length >= 8) {
     return{senha: true}
    } else {
      return null
    }
  }

  //Vamos criar um método para exibir o resultado do "controle" de formulário pela camada lógica
  exibirDados(umDado:any) {
    this.email = umDado.email
  }
}
