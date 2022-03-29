var p1: number = 95
var p2: number = 38
var total: number = p1 + p2

function calculandoAMedia() {
  var media: number = total / 2

  if (media >= 70) {
    var formado: boolean = true
    console.log(`${nome}, parabéns! Você foi aprovado! Sua média foi ${media}, seu status de formado é ${formado}`)
    console.log('Você está formado')
  } else if (media >= 30 && media < 70) {
    console.log(`${nome}, você está de recuperação! Sua média foi ${media}`)
  } else {
    console.log(`${nome}, você foi reprovado! Sua média foi ${media}`)
  }
  console.log(nome)
  console.log(p1)
  console.log(p2)
  console.log(total)
  console.log(media)
  // console.log(formado)

}
var nome: string = 'Erik'

calculandoAMedia()

////////////////////////////////////////////////////////////////////////////////////////////////

var num1: number = 1

function declarandoVar() {
  var num2: number = 2
  var num3: number = 3

  if (num1 < num2) {
    num3++
  }
  var num4: number = 4

  while(num1 < num2){
    num4++
    num1++
  }
  console.log(num1)
  console.log(num2)
  console.log(num3)
  console.log(num4)
}
declarandoVar()
num1 = 8
var num1: number = 1