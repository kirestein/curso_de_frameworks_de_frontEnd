import React, { Component } from 'react'

export default class State extends Component {
  state = {
    texto: 'Este é o valor representando o estado original da aplicação!'
  }

  //criando o manipulador de estado
  manipuladorState = () => {
    // console.log('Fui clicado');
    this.setState({
      texto: 'Você acaba de alterar o estado original deste componente - através da ação do usuário'
    })
  }

  manipuladorState2 = () => {
    // console.log('Fui clicado');
    this.setState({
      texto: 'banana'
    })
  }

  render() {
    return (
      <div>
        <h3 onClick={this.manipuladorState2}>{ this.state.texto }</h3>
        <button onClick={ this.manipuladorState}>Clique em mim</button>
      </div>
    )
  }
}
