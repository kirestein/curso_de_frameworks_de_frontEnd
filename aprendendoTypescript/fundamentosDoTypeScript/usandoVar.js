var p1 = 95;
var p2 = 38;
var total = p1 + p2;
function calculandoAMedia() {
    var media = total / 2;
    if (media >= 70) {
        var formado = true;
        console.log("".concat(nome, ", parab\u00E9ns! Voc\u00EA foi aprovado! Sua m\u00E9dia foi ").concat(media, ", seu status de formado \u00E9 ").concat(formado));
        console.log('Você está formado');
    }
    else if (media >= 30 && media < 70) {
        console.log("".concat(nome, ", voc\u00EA est\u00E1 de recupera\u00E7\u00E3o! Sua m\u00E9dia foi ").concat(media));
    }
    else {
        console.log("".concat(nome, ", voc\u00EA foi reprovado! Sua m\u00E9dia foi ").concat(media));
    }
    console.log(nome);
    console.log(p1);
    console.log(p2);
    console.log(total);
    console.log(media);
    // console.log(formado)
}
var nome = 'Erik';
calculandoAMedia();
////////////////////////////////////////////////////////////////////////////////////////////////
var num1 = 1;
function declarandoVar() {
    var num2 = 2;
    var num3 = 3;
    if (num1 < num2) {
        num3++;
    }
    var num4 = 4;
    while (num1 < num2) {
        num4++;
        num1++;
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
}
declarandoVar();
