import React, { Component } from 'react'

class Demo extends Component {

  /* nomes() {
    const nomes = 'Erik Proença'
    
    return nomes
  } */

  render() {
    // const { nome } = this.props
    return (
      <div>
        <h1>{ this.props.nome }</h1>
        <h2>Bem Vindo ao Mundo do ReactJs!</h2>
      </div>
    )
  }
}

export default Demo
