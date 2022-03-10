// construir o modelo da nossa aplicação
const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    description: String
})

module.exports = Todo;