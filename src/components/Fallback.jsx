import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import Back from './Back';
import './Fallback.css';

class Fallback extends Component {
  constructor() {
    super();
    this.state = {
      visible: 'anim',
    };
  }

  componentDidMount() {
    if (Math.round(PIXI.Loader.shared.progress) === 100) {
      this.setState({ visible: 'anim in' });
    } else {
      PIXI.Loader.shared.onComplete.once(() => {
        this.setState({ visible: 'anim in' });
      });
    }
  }

  render() {
    const { location } = this.props;
    const { visible } = this.state;

    return (
      <div className={visible}>
        <Back />
        <div className="Fallback">
          <h1>404</h1>
          <h3>
            {String(location.pathname).toUpperCase()}
            {' '}

            DOESN&apos;T EXIST
          </h3>
        </div>
      </div>
    );
  }
}

export default Fallback;
