import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestandoService {
  //método para verificar se o ProductService está sendo executado corretamente
  unitario(mensagem: any) {
    console.log(mensagem)
  }
}
