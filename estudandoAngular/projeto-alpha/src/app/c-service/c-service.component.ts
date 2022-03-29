import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/Product';

@Component({
  selector: 'app-c-service',
  templateUrl: './c-service.component.html',
  styleUrls: ['./c-service.component.css']
})
export class CServiceComponent {
  // casting das propriedades que serão usadas
  cestaProdutos!:Product[]
  objDoService

  //chamando o construtor
  constructor(){
    this.objDoService = new ProductService()
  }

  // criando uma função para - através do uso do objeto criado -  acessar a lista de produtos
  acessandoListaProdutos(){
    this.cestaProdutos = this.objDoService.listarProdutos()
  }

}
