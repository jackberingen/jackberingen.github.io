import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Sprite } from 'react-pixi-fiber';

class PixiBackdrop extends Component {
  constructor() {
    super();
    this.state = {
      textures: null,
      tex: 0,
    };

    for (let i = 0; i < 14; i += 1) {
      PIXI.Loader.shared.add(`${process.env.PUBLIC_URL}/backdrop/back-${i}.min.json`);
    }

    PIXI.Loader.shared.load(() => {
      const textures = [];
      for (let i = 0; i < 42; i += 1) {
        textures.push(PIXI.Texture.from(`${i}.png`));
      }

      this.setState({ textures }, () => {
        this.anim = setInterval(() => {
          const { tex } = this.state;
          this.setState({ tex: tex === textures.length - 1 ? 0 : tex + 1 });
        }, 80);
      });
    });
  }

  render() {
    const { textures, tex } = this.state;
    const { width, height } = this.props;
    return textures
      && <Sprite texture={textures[tex] || null} width={width} height={height} />;
  }
}

export default PixiBackdrop;
