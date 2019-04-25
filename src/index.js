import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

//Define a render function so we don't have to run the same code twice.
let render = ()=>{
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
  registerServiceWorker();
}

render();