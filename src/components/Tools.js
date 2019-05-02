import React, { Component } from 'react';
import Back from './Back';
import * as PIXI from 'pixi.js';
import './Tools.css';

class Tools extends Component {
  constructor(){
    super();
    this.state = {
      class: "anim"
    }
  }

  componentWillMount(){
    if(Math.round(PIXI.loader.progress) === 100){
      this.setState({ class: "anim in" });
    }else{
      PIXI.loader.once('complete', ()=>{
        this.setState({ class: "anim in" });
      })
    }
  }

  render() {
    return (
      <div className={this.state.class}>
        <Back />
        <div className="Tools">
          <h1 className="Page-Head">TOOLS</h1>
        </div>
      </div>
    );
  }
}

export default Tools;