import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import PixiApp from './PixiApp';
import "./App.css"

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      dev: ""
    }

    PIXI.loader.once('complete', ()=>{
      this.setState({ name: "<JACK BERINGEN/>", dev:"// WEBSITE IN DEVELOPMENT //" });
    })
  }
  render() {
    return (
      <div className="App">
        <PixiApp />
        <div className="Main">
          <span className="Name">{this.state.name}</span>
          <br />
          <span className="Small">{this.state.dev}</span>
        </div>
      </div>
    );
  }
}

export default App;