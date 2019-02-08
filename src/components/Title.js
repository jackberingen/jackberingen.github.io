import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as PIXI from 'pixi.js';
import './Title.css';

class Title extends Component {
  constructor(){
    super();
    this.devs = [
      "CAN USE STACKOVERFLOW",
      "TYPES CODE AND STUFF"
    ];
    this.state = {
      class: "Main anim",
      name: "<JACK BERINGEN/>", 
      dev:`// ${this.devs[Math.floor(Math.random() * this.devs.length)]} //`
    }
  }

  componentWillMount(){
    if(Math.round(PIXI.loader.progress) === 100){
      this.setState({ class: "Main anim in" });
    }else{
      PIXI.loader.once('complete', ()=>{
        this.setState({ class: "Main anim in" });
      })
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.class}>
          <span className="Name No-Select">{this.state.name}</span>
          <br />
          <span className="Small No-Select">{this.state.dev}</span>
          <div className="Routes No-Select">
            <Link to="/about">ABOUT </Link> | 
            <Link to="/portfolio"> PORTFOLIO </Link> | 
            <a href="https://github.com/jackberingen"> GITHUB</a>
          </div>
        </div>
        <a className="Credit" href="https://www.deviantart.com/kirokaze/art/Blue-Balcony-572754071">GIF by @kirokaze</a>
      </div>
    );
  }
}

export default Title;