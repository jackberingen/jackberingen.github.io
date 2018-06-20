import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Sprite } from "react-pixi-fiber";

class PixiBackdrop extends Component {
  constructor(){
    super();

    this.mainRef = React.createRef();
    this.backLoaded = false;
    this.state = {
      alpha: 0
    }
    this.anim = {
      tex: 0,
      ticker: null 
    }

    this.draw = ()=>{
      this.setState({ alpha: this.state.alpha + 0.05 });
      if(this.state.alpha === 1.0){
        this.setState({ alpha: 1 });
      }else{ requestAnimationFrame(this.draw) }
    }

    for(var i = 0; i < 14; i++){
      PIXI.loader.add(process.env.PUBLIC_URL + `/backdrop/back-${i}.min.json`);
    }

    PIXI.loader.load();
    PIXI.loader.once('complete', ()=>{ 
      this.backLoaded = true; 
      requestAnimationFrame(this.draw)
    })
  }

  componentDidMount(){
    this.setState({ticker: setInterval(()=>{
      this.anim.tex++;

      if(this.anim.tex > 41){this.anim.tex = 0}
      if(this.backLoaded){
        this.mainRef.current._texture = PIXI.Texture.fromFrame(`${this.anim.tex}.png`);
      }
    }, 80)  });
  }

  componentWillUnmount(){
    clearInterval(this.anim.ticker);
  }

  render() {
    return(
      <Sprite ref={this.mainRef} alpha={this.state.alpha} {...this.props} />
    );
  }
}

export default PixiBackdrop;