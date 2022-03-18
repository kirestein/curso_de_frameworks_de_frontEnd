import React from 'react';
import './index.css';
import Home from './Home'

//Fazendo novos imports
import { render } from 'react-dom';// DOM => Document Object Model
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';

//criando a store
let store = createStore(todoApp);
let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  rootElement
)


/* ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
); */



