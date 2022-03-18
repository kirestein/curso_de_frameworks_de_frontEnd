import './style.css'
//todos os imports necessários
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'


class Home extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1>TodoList</h1>
          <div>
            <AddTodo
              onAddClick={text => dispatch(addTodo(text))}
            />
            <TodoList
              todos={visibleTodos}
            />
          </div>
        </header>
      </div>
    )
  }
}

//Criar a função que vai buscar o estado atual no local de armazenamento(store) criado anteriormente
function select(state) {
  return {
    visibleTodos: state.todos
  }
}

/* Criar um conexão entre aquilo que está vindo da store com
aquilo que será exibido a partir das props do aquivo principal(index.js) */
export default connect(select)(Home)

