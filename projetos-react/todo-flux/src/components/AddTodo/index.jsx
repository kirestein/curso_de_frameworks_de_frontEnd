import React, { Component } from 'react'

export default class addTodo extends Component {

  constructor(props) {
    super(props)
    this.input = React.createRef()
  }
  //criando um manipulador de evento
  addItem = (e) => {
    e.preventDefault()
    var node = this.input.current.value
    var text = node.trim()
    this.props.onAddClick(text)
  }

  render() {
    return ( //JSX
      <div>
        <input type="text" ref={this.input} />
        <button className='btn-insert' onClick={e => this.addItem(e)}>
          Adicionar tarefa
        </button>
      </div>
    )
  }
}
