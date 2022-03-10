//criando uma constante que recebe a porta de acesso
const PORT = 8080

//este é o nosso primeiro app node-express
//variavel recebe o módulo express
const express = require('express');
// objeto para fazermos uso dentro da aplicação
const app = express();

app.use(express.static('public'));

//vamos implementar o escutador da requisão
const server = app.listen(PORT, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Nosse servidor está funfando na porta http://${host} : ${port}`);
});