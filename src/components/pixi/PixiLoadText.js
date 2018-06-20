import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Text } from 'react-pixi-fiber';

class PixiLoadText extends Component {

  constructor(){
    super();

    this.style = new PIXI.TextStyle({
      fontFamily: 'VCR OSD Mono',
      fontSize: 48,
      fill: '#ffffff',
      
    });
  }

  render() {
    return(
        <Text {...this.props} anchor={{x: 0.5, y: 0.5}} style={this.style}/>
    );
  }
}

export default PixiLoadText;