import React, { Component } from 'react';
import Back from './Back';
import * as PIXI from 'pixi.js';
import './About.css';

class About extends Component {
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
        <div className="About">
          <h1 className="Page-Head">ABOUT</h1>
          <div className="Scroll">
            <h4>WHAT I'VE DONE</h4>
            <span>I began progamming using Scratch back in 2012. I then jumped to Visual Basic, developing Windows Forms applications, and my interests peaked from there. I've since experimented with a wide range of programming / scripting languages, from games (C++ / Blueprints) in Unreal Engine 4, to C# Windows Forms / WPF, to LUA. More recently I've been programming in JavaScript / NodeJS and golang, creating front-end interfaces with React and backend servers using expressjs.<br/><br/>I've also developed cross-platform apps such as 'kyee', utilising Firebase for database management and authentication, and electron to provide the framework for running on multiple operating systems.<br/><br/>You can check out some of the stuff i've done on my portfolio, or head over to my GitHub.</span>
            <div className="Second"><h4>WHAT I'M DOING</h4>
            <span>I'm currently learning DevOps development with Hashicorp, Docker, Kubernetes and AWS. More on this soon :)</span></div>
            <div className="Third"><h4>MY GEAR</h4><span>L A P T O P<br/>MacBook Pro 13" 500GB w/ TouchBar<br/><br/>D E S K T O P<br/>CPU: Intel Core i7 9700k OC @ 5.0GHz<br/>GPU: RTX 2080 Ti<br/>RAM: 32GB DDR4 @ 3200 MHz<br/>STORAGE: 250GB NVMe M.2 + 1TB SSD<br/>MOTHERBOARD: MPG Z390 Gaming Edge AC</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;