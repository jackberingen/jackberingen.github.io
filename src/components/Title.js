import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as PIXI from 'pixi.js';
import git from './portfolio/git.png';
import './Title.css';

class Title extends Component {
  constructor(){
    super();
    this.devs = [
      "CAN USE STACKOVERFLOW",
      "TYPES CODE AND STUFF",
      "DOES SOFTWARE STUFF",
      "JUST A SUPER COOL GUY"
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
            <Link to="/about">ABOUT </Link>
            <Link to="/portfolio"> PORTFOLIO</Link>
            {/*<Link to="/tools"> TOOLS </Link>*/}<br/>
            <a href="https://github.com/jrinkman"><img style={{paddingTop: '18px', width: '50px', height: '50px'}} alt="Link to GitHub" src={git}></img></a>
            
          </div>
        </div>
        <a className="Credit" href="https://www.deviantart.com/kirokaze/art/Blue-Balcony-572754071">GIF by @kirokaze</a>
      </div>
    );
  }
}

export default Title;