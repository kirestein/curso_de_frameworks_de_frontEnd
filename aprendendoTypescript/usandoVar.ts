var nome:string = 'Erik'
var p1:number = 95
var p2:number = 38
var total:number = p1 + p2

function calculandoAMedia() {
  var media:number = total / 2

  if(media >= 70) {
    var formado:boolean = true
    console.log(`${nome}, parabéns! Você foi aprovado! Sua média foi ${media}, seu status de formado é ${formado}`)
    console.log('Você está formado')
  } else if (media >=3 && media <= 6) {
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

calculandoAMedia()
