import React, { Component } from 'react';
import Back from './Back';
import * as PIXI from 'pixi.js';
import './Fallback.css';

class Fallback extends Component {
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
        <div className="Fallback">
          <h1>404</h1>
          <h3>{String(this.props.location.pathname).toUpperCase()} DOESN'T EXIST</h3>
        </div>
      </div>
    );
  }
}

export default Fallback;