/* const numConst: number = 100

// numConst = Compiler Error: Cannot assign to 'numCons' because it is a constant

const participantes = {
  participante1: 'Erik',
  participante2: 'Pedro',
  participante3: 'Marcelo',
  participante4: 5,
  participante5: true
}

console.log(participantes)

participantes.participante5 = false

console.log(participantes)

console.log(participantes.participante3) */

let vidaGatos: number = 9

//criando um objeto literal
const dadosGatos = {
  nome: 'Astolfo',
  QtdeDeVidas: vidaGatos,
  filhotes: {
    filhote1: 'Piu Piu',
    filhote2: 'Fofinho',
    filhote3: 'Zézinho'
  }
}

//exibir o objeto
console.log(dadosGatos)

//aplicar modificações nas propriedades do objeto
dadosGatos.nome = 'Frajola'
dadosGatos.QtdeDeVidas = 96
dadosGatos.filhotes.filhote1 = 'Huguinho'

//exibir as alteraçõs nas propriedades do objeto
console.log(`A quantidade de vidas do gato ${dadosGatos.nome} é de ${dadosGatos.QtdeDeVidas}`)

//exibir o objeto
console.log(dadosGatos)

