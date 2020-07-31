import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import PixiText from './PixiText';

class PixiLoadText extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    PIXI.Loader.shared.onProgress.once((load, res) => this.setState({ progress: Math.round(PIXI.Loader.shared.progress) }));
    PIXI.Loader.shared.onComplete.once(() => this.setState({ progress: 100 }))
  }

  render() {
    const {progress} = this.state;
    return progress < 100 && <PixiText {...this.props} text={`${this.state.progress}%`} alpha={this.state.alpha} />;
  }
}

export default PixiLoadText;
