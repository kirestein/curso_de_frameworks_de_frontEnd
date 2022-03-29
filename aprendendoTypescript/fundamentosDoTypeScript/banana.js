/* var mensagem:String = 'Hello World!'
mensagem = 'Please enter'
mensagem = '5'
console.log(mensagem) */
/* var nome: string = 'Erik Proença'
var p1: number = 110
var p2: number = 11.35
var total = p1 + p2

console.log(`Boa noite sr. ${nome}, você tirou ${p1} na p1 e ${p2} na p2 e a sua pontuação total é ${total}`) */
/* var num1 = 2 // inferindo o tipo do dado da variável
console.log("O valor da variável num1 é: " + num1) */
// var num: number = 'TypeScript'
/* var funcionario1 = 'João'

let funcionario2 = 'Pedro' */
var num1 = 1;
function declarandoLet() {
    var num2 = 2;
    if (num1 > num2) {
        var num3 = 3;
        num3++;
        console.log(num3);
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
        console.log(num4);
    }
    console.log(num1);
    console.log(num2);
    // console.log(num3)
    // console.log(num4)
}
declarandoLet();
