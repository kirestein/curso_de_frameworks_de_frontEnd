//declarar o nome da constante que contém a action
export const ADD_TODO = 'ADD_TODO'

//Criar um let para fazer o incremento do todo
let nextTodo = 0

//criar função addTodo
export function addTodo(text) {
  return ({
    type: ADD_TODO,
    id: nextTodo++,
    text
  })
}