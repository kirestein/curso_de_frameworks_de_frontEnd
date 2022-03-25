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

  //vamos criar um método para receber os dados e vincular na viw do pai
  recebendoDados(dadosRecebidos: any) {
    let receptora: string = `${dadosRecebidos.nome} obrigado por se cadastrar \n`

    receptora = `${receptora} o email ${dadosRecebidos.email} foi cadastrado com sucesso!`

    alert(receptora)
  }
}
