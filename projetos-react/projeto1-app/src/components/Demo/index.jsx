import React, { Component } from 'react'

class Demo extends Component {

  nomes() {
    const nomes = 'Erik Proença'
    
    return nomes
  }

  render() {
    return (
      <div>
        <h1>{this.nomes()}</h1>
        <h2>Bem Vindo ao Mundo do ReactJs!</h2>
      </div>
    )
  }
}

export default Demo
