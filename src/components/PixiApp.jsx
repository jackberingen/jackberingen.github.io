import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Stage } from 'react-pixi-fiber';
import { PixiBackdrop, PixiLoadText, PixiFilters } from './pixi';
import './PixiApp.css';

class PixiApp extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      widthBack: 0,
      height: window.innerHeight,
      heightBack: 0,
    };

    this.dimensions = this.dimensions.bind(this);

    this.filters = PixiFilters();
    this.animating = true;

    this.animate = () => {
      if (this.animating) {
        this.filters[0].time += 0.5;
        this.filters[1].seed = Math.random();

        requestAnimationFrame(this.animate);
      }
    };

    this.animate();
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  }

  componentDidMount() {
    this.dimensions();
    window.addEventListener('resize', this.dimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.dimensions);
  }

  /**
   * Calculate & Update state of new dimensions
   */
  dimensions() {
    const backdropRatio = {
      x: (1920 / 1080),
      y: (1080 / 1920),
    };

    const state = {
      width: window.innerWidth,
      widthBack: 0,
      height: window.innerHeight,
      heightBack: 0,
    };

    if ((window.innerWidth * backdropRatio.y) > window.innerHeight) {
      state.widthBack = window.innerWidth;
      state.heightBack = window.innerWidth * backdropRatio.y;
    } else {
      state.heightBack = window.innerHeight;
      state.widthBack = window.innerHeight * backdropRatio.x;
    }

    this.setState(state);
  }

  render() {
    const {
      width, height, widthBack, heightBack,
    } = this.state;
    return (
      <Stage className="pixi-app" filters={this.filters} options={{ width, height }}>
        <PixiBackdrop
          width={widthBack}
          height={heightBack}
          filters={this.filters}
        />
        <PixiLoadText text="test" x={width / 2} y={height / 2} />
      </Stage>
    );
  }
}

export default PixiApp;
