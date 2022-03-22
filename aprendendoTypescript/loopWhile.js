console.log('O fatorial é uma operação muito importante para o estudo e desenvolvimento da análise combinatória');
console.log('Conhecemos como fatorial de um número natural a multiplicação desse número por seus antecessores com exceção do zero');
/*
Fatorial de um número qq = n!
3! => 3.2.1 => 6
*/
//vamos estabelecer as variáveis
var numero = 10;
var fatorial = 1;
//vamos estabelecer nosso primeiro loop while em TypeScript
while (numero >= 1) {
    fatorial = fatorial * numero;
    numero--;
}
console.log("O fatorial de ".concat(numero, " \u00E9: ").concat(fatorial));
//fatorial de 10(10!) => 10.9.8.7.6.5.4.3.2.1
