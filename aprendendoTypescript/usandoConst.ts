const numConst: number = 100

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

console.log(participantes.participante3)