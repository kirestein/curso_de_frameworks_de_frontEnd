import React, { Component } from 'react'
import Child from '../Child'
import CompFuncional from '../compFuncional'

//criando e exportando a nossa classe
export default class Parent extends Component {
  //chamando o método render
  render() {
    const { nome } = this.props

    return (
      <div>
        <h2>Olá Erik Proença, sou um componente pai!</h2>
        <Child
          nome={nome}
          Dados='Sou o texto enviado do componente-pai para o componente-filho'
        />
        <CompFuncional
          DadosNovos='Texto de componente funcional passado por props'
        />
      </div>
    )
  }
}
