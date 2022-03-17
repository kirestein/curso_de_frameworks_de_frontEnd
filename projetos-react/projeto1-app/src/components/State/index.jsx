import React, { Component } from 'react'

export default class State extends Component {
  state = {
    texto: 'Este é o valor representando o estado original da aplicação!'
  }
  render() {
    return (
      <div>
        <h3>{ this.state.texto }</h3>
      </div>
    )
  }
}
