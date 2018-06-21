import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Sprite } from "react-pixi-fiber";

class PixiBackdrop extends Component {
  constructor(){
    super();

    this.mainRef = React.createRef();
    this.backLoaded = false;
    this.state = {
      textures: [],
      alpha: 0,
      tex: 0,
      ticker: null
    }

    this.draw = ()=>{
      this.setState({ alpha: this.state.alpha + 0.05 });
      if(this.state.alpha > 1.0){
        this.setState({ alpha: 1 });
      }else{ requestAnimationFrame(this.draw) }
    }

    for(var i = 0; i < 14; i++){
      PIXI.loader.add(process.env.PUBLIC_URL + `/backdrop/back-${i}.min.json`);
    }

    PIXI.loader.load();
    PIXI.loader.once('complete', ()=>{ 
      var _textures = [];
      for(var i = 0; i < 42; i++){
        _textures.push(PIXI.Texture.fromFrame(`${i}.png`));
      }

      this.setState({ textures: _textures });
      this.backLoaded = true; 
      requestAnimationFrame(this.draw)
    })
  }

  componentDidMount(){
    this.setState({ticker: setInterval(()=>{
      this.setState({ tex: this.state.tex + 1 });

      if(this.state.tex > 41){ this.setState({ tex: 0 }) }
      if(this.backLoaded){
        this.mainRef.current._texture = this.state.textures[this.state.tex];
        this.mainRef.current.width = this.props.width;
        this.mainRef.current.height = this.props.height;
      }
    }, 80)  });
  }

  componentWillUnmount(){
    clearInterval(this.state.ticker);
  }

  render() {
    return(
      <Sprite ref={this.mainRef} alpha={this.state.alpha} {...this.props} />
    );
  }
}

export default PixiBackdrop;