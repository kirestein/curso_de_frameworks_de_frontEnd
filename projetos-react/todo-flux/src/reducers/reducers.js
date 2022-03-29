//estamos importando o redux
import { combineReducers } from 'redux';
//importar a actions
import { ADD_TODO } from '../actions/actions'

//Criar a função para criação dos itens
//da lista

function todo(state, action) {
  //vamos verificar o que a action está fazendo
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
}

//Criar um função para criar a lista de itens
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO: 
      return[
        ...state, todo(undefined, action)
      ]
      default:
        return state
  }
}

//criar um terceira função para receber a junção duas primeiras funções a partir da função combineReducers

const todoApp = combineReducers({
  todos
})

//export o reducer para
export default todoApp