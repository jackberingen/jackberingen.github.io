import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import AnimatedSprite from './PixiAnimatedSprite';

class PixiBackdrop extends Component {
  constructor() {
    super();
    this.state = {
      textures: null,
    };

    for (let i = 0; i < 14; i += 1) {
      PIXI.Loader.shared.add(`${process.env.PUBLIC_URL}/backdrop/back-${i}.min.json`);
    }

    PIXI.Loader.shared.load(() => {
      const textures = [];
      for (let i = 0; i < 42; i += 1) {
        textures.push(PIXI.Texture.from(`${i}.png`));
      }

      this.setState({ textures });
    });
  }

  render() {
    const { textures } = this.state;
    const { width, height } = this.props;
    return textures && <AnimatedSprite textures={textures} width={width} height={height} />;
  }
}

export default PixiBackdrop;
