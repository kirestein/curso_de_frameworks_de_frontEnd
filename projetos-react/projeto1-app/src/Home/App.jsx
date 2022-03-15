import React, { Component } from 'react'
import './App.css'
import Demo from './components/Demo'

export default class App extends Component {

  /* endereco() {
    const endereco = 'src/App.jsx'
    return endereco
  } */

  render() {

    return (

      <div className="App">
        <Demo />
      </div>

    )
  }
}



/* export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


