//vou importar o .env
require('dotenv').config()
//aqui estão minhas importações principais
const express = require('express');// o express é o módulo principal do node
const mongoose = require('mongoose');
const cors = require('cors');// o cors facilita a conexão entre as portas (Back e Front)

const app = express();
// use no app o cors
app.use(cors());
//importando o modelo da nossa aplicação
const Todo = require('./models/Todo');

//leitura do JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

//rotas da nossa api
const todoRoutes = require('./routes/todoRoutes');

app.use('/todo', todoRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Olá meu querido!'
    });
});



const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

/* Nesta parte é a conexão com o Banco de Dados */

/* mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apitodo.nz7va.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)
.then(() => {
    console.log('conectamos ao DB');
    app.listen(8081)
})
.catch((err) => console.log(err)); */
