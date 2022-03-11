const {
    route
} = require('express/lib/application');
const Todo = require('../models/Todo');

const router = require('express').Router();

//CRUD => Create(post), Read(get), Update(put), Delete(delete)
router.post('/', async (req, res) => {

    // req.body
    const description = req.body;

    if (!description) {
        res.status(422).json({
            error: 'A descrição da tarefa é obrigatória!'
        })
        return
    };

    // try catch
    try {
        //criar os dados
        await Todo.create(todo)

        res.status(201).json({
            message: 'Parabéns, você sabe inserir uma tarefa!'
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    };

    //read => get
    router.get('/', async (req, res) => {
        try {
            const todos = await Todo.find()

            res.status(200).json(todos)
        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    })

    router.get('/:id', async (req, res) => {
        //extrair os dados da requisição pelo req.params
        const id = req.params.id

        try {
            const todo = await Todo.findOne({
                _id: id
            });

            if(!todo) {
                res.status(422).json({
                    message: 'Não encontrei a tarefa, você fez alguma cagada aí'
                });
                return;
            };

            res.status(200).json(todo);
        } catch (error) {
            res.status(500).json({
                error: error
            });
        };

    });
    // update (PUT = ATUALIZAÇÃO COMPLETA && PATCH = ATULIZAÇÃO PARCIAL)
    router.put('/:id', async (req, res) => {
        const id = req.params.id

        const description = req.body

        const todo = description

        try {

            const updateTodo = await Todo.updateOne({
                _id: id
            }, todo)

            if (updateTodo.matchedCount === 0) {
                res.status(422).json({
                    message: 'Tarefa não encontrada'
                })
            }

            res.status(200).json(todo)
            
        } catch (error) {
            res.status(500).json({
                error: error
            });
        };
    });

    //Delete
    router.delete('/:id', async (req, res) => {
        const id = req.params.id;

        const todo = await Todo.findOne({
            _id: id
        });

        if (!todo) {
            res.status(422).json({
                message: 'Tarefa não encontrada'
            });
            return
        };

        try {

            await Todo.deleteOne({
                _id: id
            });
            res.status(200).json({
                message: 'Tarefa deletada com sucesso'
            });
            
        } catch (error) {
            res.status(500).json({
                error: error
            });
        };
    });
});

