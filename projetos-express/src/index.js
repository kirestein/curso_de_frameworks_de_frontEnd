// primeiro app node-express
// variável que receberá o módulo express

var express = require('express')

//objeto para fazermos uso dentro da aplicação
var app = express()

app.get('/', (req, res) => {
    res.send('Hello World NodeJS! Componente padrão')
})

app.get('/uma-lista', (req, res) => {
    res.send('Esse é o conteúdo para uma página componente (uma lista)')
})
// testando o git
app.get('/zf*zy', (req, res) => {
    res.send('Novo componente acessado a partir de uma rota customizada')
})

//vamos implementar o escutador da requisição
var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`O servidor pode ser acessado em http://${host}:${port}`)
    // console.log('O servidor pode ser acessado em http://%s:%s', host, port)
})



