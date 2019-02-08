import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import PixiText from './PixiText';

class PixiLoadText extends Component {

  constructor(){
    super();

    this.state = {
      progress: 0,
      alpha: 1
    }
  }

  componentDidMount(){
    PIXI.loader.on('progress', (load, res)=>{
      this.setState({ progress: Math.round(load.progress) });
      if(this.state.progress === 100){ this.setState({ alpha: 0 }); }
    });
  }

  render() {
    return(
        <PixiText {...this.props} text={this.state.progress + '%'} alpha={this.state.alpha}/>
    );
  }
}

export default PixiLoadText;