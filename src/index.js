import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PixiApp from './components/PixiApp';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><PixiApp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();