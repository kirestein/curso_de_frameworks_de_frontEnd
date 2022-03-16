import React, { Component } from 'react'
import './styles.css'
import Demo from '../../components/Demo'
import CompFuncional from '../../components/compFuncional'
// import { Form } from '../../components/Form'

export default class Home extends Component {

  /* endereco() {
    const endereco = 'src/App.jsx'
    return endereco
  } */

  render() {

    return (

      <div className="App">
        <Demo />
        <CompFuncional />
        {/* <Form /> */}
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


