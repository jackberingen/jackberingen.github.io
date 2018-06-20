import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Sprite } from "react-pixi-fiber";
import background from "./resources/backdrop2.png";
/*import BackdropAtlas from './resources/backdrop.json';*/

class PixiBackdrop extends Component {
  constructor(){
    super();
    this.state = {
      tex: 0,
      ticker: setInterval(()=>{
        let _tex = this.state.tex;
        _tex++;
        if (_tex > 47){ _tex = 0 }
        this.setState({tex: _tex})
      }, 400)   
    }

    /*PIXI.loader.add(['./resources/backdrop.json']).load();
    PIXI.loader.on('complete', (loader, res)=>{
      console.log(PIXI.loader.resources);
    })*/
  }

  componentWillMount(){
  }

  componentWillUnmount(){
    clearInterval(this.state.ticker);
  }

  render() {
    //texture={this.props.sheet[`${this.state.tex}.png`]}
    return(
      <Sprite {...this.props} texture={PIXI.Texture.fromImage(background)} />
    );
  }
}

export default PixiBackdrop;