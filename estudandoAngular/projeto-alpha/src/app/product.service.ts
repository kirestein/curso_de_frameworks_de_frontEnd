import { Injectable } from '@angular/core';
import { Product } from 'src/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //vamos criar um método parra retornar uma lista de produtos
  listarProdutos() {
    //vamos criar uma props que será nossa lista de produtos
    let listaProdutos: Product[]

    //Vamos criar os itens da lista de produtos
    listaProdutos = [
      new Product(1, 'Quadro do Baby Yoda', 199),
      new Product(2, 'Máscara do Darth Vader', 159),
      new Product(3, 'Sabre de luz', 89)
    ]
  }
  
}
