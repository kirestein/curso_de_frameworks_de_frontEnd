import React, { Component } from 'react';
import Todo from '../Todo';

// vamos criar um componente de classe
export default class TodoList extends Component {
  render() {
    return (
      <ul className='list-clean'>
        {/* Vamos mapear as nossas tarefas, os nossos todos */}
        {this.props.todos.map(todo => 
          <Todo
            key={todo.id}
            {...todo}
          />
        )}
      </ul>
    )
  }
}