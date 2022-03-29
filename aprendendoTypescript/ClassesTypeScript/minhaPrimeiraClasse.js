// vamos criar nossa primeira classe em TypeScript
var Saudacao = /** @class */ (function () {
    function Saudacao() {
    }
    //escopo da classe ou class scope
    Saudacao.prototype.saudacao = function () {
        console.log('Olá mundo a partir do POO TS');
    };
    return Saudacao;
}());
//vamos criar nosso primeiro objeto a partir da classe Saudacao, assim podemos fazer uso do método saudacao()
var obj = new Saudacao();
obj.saudacao();
