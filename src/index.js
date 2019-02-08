import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

//Get the window location. Even if it is at the base directory, it will still include a '/' at the end of the url.
let href = window.location.href;

//Get the base url without any forward-slashes (just in case the user was trying to navigate to other parts of the website via the .github.io url).
//E.G. https://jackberingen.github.io/portfolio-> https://jackberingen.github.io
let location = href.substring(0, href.indexOf('/', 8));

//Define a render function so we don't have to run the same code twice.
let render = ()=>{
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
  registerServiceWorker();
}

//Check if we're running locally. If we are, render the page.
if(location === "http://localhost:3000"){
  render();
}else{
  //If we're not running locally, check whether we're on the correct url, not the .github.io one.
  if(location !== "https://jackberingen.com"){
    //If we're not on the correct url, redirect the user including any other routes the user was trying to navigate to e.g. '/portfolio'.
    window.location.replace(`https://jackberingen.com${href.substring(href.indexOf('/', 8), href.length)}`);
  }else{
    //If we're not running locally but we're on the correct url, render the page.
    render();
  }
}