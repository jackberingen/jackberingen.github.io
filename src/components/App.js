import React, { Component } from 'react';
import styles from './App.css.js'

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <span style={styles.center}>skeet bung skeet</span>
      </div>
    );
  }
}

export default App;