import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Text } from 'react-pixi-fiber';

class PixiText extends Component {

  constructor(){
    super();

    this.style = new PIXI.TextStyle({
      fontFamily: 'VCR OSD Mono',
      fontSize: 24,
      fill: '#ffffff',
    });
  }

  render() {
    return(
        <Text {...this.props} style={this.style} anchor={{x: 0.5, y: 0.5}}/>
    );
  }
}

export default PixiText;