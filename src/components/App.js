import React, { Component } from 'react';
import PixiApp from './PixiApp';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PixiApp />
        <Main />
      </div>
    );
  }
}

export default App;