var i: any //esta será nossa  variável interadora

// criando a coleção de dados
var x: any = 'abc'
//            012


//criando nosso loop for
for(i in x) {
  console.log(x[i])
}

console.log('------------------------------------ // ---------------------------------');

var j: any 

let umArray: Array<number> = [380, 129, 4395, 1072, 9836]

for(j of umArray) {
  console.log(j)
}