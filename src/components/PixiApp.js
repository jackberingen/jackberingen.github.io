import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Stage } from 'react-pixi-fiber';
import { PixiBackdrop, PixiLoadText, PixiFilters } from "./pixi";
//import PixiText from './pixi/PixiText';
import "./PixiApp.css";

class PixiApp extends Component {

  constructor() {
    super();
    this.state = {
      width:  window.innerWidth,
      width_back: 0,
      height: window.innerHeight,
      height_back: 0
    }

    this.dimensions = this.dimensions.bind(this);
    
    this.filters = PixiFilters();
    this.animating = true;

    this.animate = ()=>{
      if(this.animating){
        this.filters[0].time += 0.5;
        this.filters[1].seed = Math.random();

        requestAnimationFrame(this.animate);
      }
    }

    this.animate();
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  }

  /**
   * Calculate & Update state of new dimensions
   */
  dimensions() {
    var backdrop_ratio = {
        x: (1920 / 1080),
        y: (1080 / 1920)
    }

    var _state = {
        width:  window.innerWidth,
        width_back: 0,
        height: window.innerHeight,
        height_back: 0
    };

    if((window.innerWidth * backdrop_ratio.y) > window.innerHeight){
        _state.width_back = window.innerWidth;
        _state.height_back = window.innerWidth * backdrop_ratio.y;
    }else{
        _state.height_back = window.innerHeight;
        _state.width_back = window.innerHeight * backdrop_ratio.x;
    }

    this.setState(_state);
  }

  componentDidMount() {
    this.dimensions();
    window.addEventListener("resize", this.dimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.dimensions);
  }

  render() {
    return(
      <Stage className="pixi-app" width={this.state.width} height={this.state.height}>
        <PixiBackdrop 
          anchor={{x: 0.5, y: 0.5}} 
          x={this.state.width / 2} 
          y={this.state.height /2} 
          width={this.state.width_back}
          height={this.state.height_back}
          filters={this.filters}/>
        <PixiLoadText text={PIXI.loader.progress} x={this.state.width / 2} y={this.state.height - 30}/>
      </Stage>
    );
  }
}

export default PixiApp;