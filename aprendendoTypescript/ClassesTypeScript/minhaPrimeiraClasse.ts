// vamos criar nossa primeira classe em TypeScript
class Saudacao {
  //escopo da classe ou class scope
  constructor(paramNome:string, paramIdade: number) {
    var nome: string = paramNome
    var idade: number = paramIdade
  }
  saudacao():void{
    console.log('Olá mundo a partir do POO TS')
  }
  adeus():string{
    console.log('Au revoir')
    return 
  }
  meuNome():void{
    var nome:string = 'Erik'
  }
}

//vamos criar nosso primeiro objeto a partir da classe Saudacao, assim podemos fazer uso do método saudacao()

var obj = new Saudacao('Erik', 37)
obj.saudacao()
obj.meuNome()