import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Stage, Sprite } from "react-pixi-fiber";
import "./Backdrop.css";
import brain from "../resources/pixi/brain.png";

function Brain(props) {
  return (
    <Sprite texture={PIXI.Texture.fromImage(brain)} {...props} anchor={new PIXI.Point(0.5, 0.5)} />
  );
}

class Backdrop extends Component {

  constructor() {
    super();
    this.state = {
      width:  window.innerWidth,
      height: window.innerHeight
    }
    this.dimensions = this.dimensions.bind(this);
  }

  /**
   * Calculate & Update state of new dimensions
   */
  dimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight });
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
      <Stage className="backdrop" width={this.state.width} height={this.state.height}>
        <Brain x={this.state.width /2} y={this.state.height /2} />
      </Stage>
    );
  }
}

export default Backdrop;