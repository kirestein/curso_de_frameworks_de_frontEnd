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
const todoRoutes = require();
