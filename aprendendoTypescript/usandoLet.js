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
