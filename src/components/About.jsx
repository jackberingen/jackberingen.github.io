import React, { Component } from 'react';
import * as PIXI from 'pixi.js';

import Back from './Back';
import './About.css';

class About extends Component {
  constructor() {
    super();
    this.state = {
      anim: 'anim',
    };
  }

  componentDidMount() {
    if (Math.round(PIXI.Loader.shared.progress) === 100) {
      this.setState({ anim: 'anim in' });
    } else {
      PIXI.Loader.shared.onComplete.once(() => {
        this.setState({ anim: 'anim in' });
      });
    }
  }

  render() {
    const { anim } = this.state;
    return (
      <div className={anim}>
        <Back />
        <div className="About">
          <h1 className="Page-Head">ABOUT</h1>
          <div className="Scroll">
            <h4>SKILLSET</h4>
            <span>

              JavaScript
              <br />

              TypeScript
              <br />

              C#
              <br />

              C
              <br />

              Git / GitHub
            </span>
            <div className="Second">
              <h4>MY GEAR</h4>
              <span>

                L A P T O P
                <br />

                MacBook Pro 13&quot; 500GB w/ TouchBar
                <br />
                <br />

                D E S K T O P
                <br />

                CPU: Intel Core i7 9700k OC @ 5.0GHz
                <br />

                GPU: RTX 2080 Ti
                <br />

                RAM: 32GB DDR4 @ 3200 MHz
                <br />

                STORAGE: 250GB NVMe M.2 + 1TB SSD
                <br />

                MOTHERBOARD: MPG Z390 Gaming Edge AC
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
