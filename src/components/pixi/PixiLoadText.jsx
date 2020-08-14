import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Text } from 'react-pixi-fiber';

class PixiLoadText extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
    };

    this.style = new PIXI.TextStyle({
      fontFamily: 'VCR OSD Mono',
      fontSize: 24,
      fill: '#ffffff',
    });
  }

  componentDidMount() {
    PIXI.Loader.shared.onProgress.once(() => {
      this.setState({ progress: Math.round(PIXI.Loader.shared.progress) });
    });
    PIXI.Loader.shared.onComplete.once(() => this.setState({ progress: 100 }));
  }

  render() {
    const { progress } = this.state;

    return progress < 100 && (
      <Text
        style={this.style}
        anchor={{ x: 0.5, y: 0.5 }}
        x={window.innerWidth / 2}
        y={window.innerHeight / 2}
        text={`${progress}%`}
      />
    );
  }
}

export default PixiLoadText;
