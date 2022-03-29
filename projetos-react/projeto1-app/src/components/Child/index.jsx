import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      
      <div>
        <h3>Olá { this.props.nome }, eu sou um componente filho!</h3>
        <h3>{ this.props.Dados }</h3>
      </div>
    )
  }
}
