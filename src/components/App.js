import React, { Component } from 'react';
import PixiApp from './PixiApp';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <PixiApp />
        <span className="name">JACK BRINKMAN</span>
      </div>
    );
  }
}

export default App;