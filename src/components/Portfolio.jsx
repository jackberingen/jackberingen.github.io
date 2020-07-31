import React, { Component } from 'react';
import Tilt from 'react-tilt';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import * as Animated from 'animated/lib/targets/react-dom';
import * as PIXI from 'pixi.js';
import Back from './Back';

import './Portfolio.css';

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      class: 'anim',
      projects: [],
      animations: [],
    };
  }

  renderProjects(projects) {
    this.setState({
      projects,
      animations: projects.map((_, i) => new Animated.Value(0)),
    },
    () => {
      Animated.stagger(
        125,
        this.state.animations.map((anim) => Animated.spring(anim, { toValue: 1 })),
      ).start();
    });
  }

  componentDidMount() {
    this.renderProjects(this.props.projects);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.projects.length && nextProps.projects.length) {
      this.renderProjects(nextProps.projects);
    }
  }

  componentWillMount() {
    if (Math.round(PIXI.Loader.shared.progress) === 100) {
      this.setState({ class: 'anim in' });
    } else {
      PIXI.Loader.shared.onComplete.once(() => {
        this.setState({ class: 'anim in' });
      });
    }
  }

  render() {
    return (
      <div className={this.state.class}>
        <Back />
        <div className="Portfolio">
          <h1 className="Page-Head">PORTFOLIO</h1>
          <div className="Scroll">
            <TransitionGroup component="ul">
              {this.state.projects.map((p, i) => {
                const style = {
                  opacity: this.state.animations[i],
                  transform: Animated.template`
                    translate3d(0,${this.state.animations[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: ['12px', '0px'],
                  })},0)
                  `,
                };
                return (
                  <li key={i}>
                    <Tilt options={{ max: 25, scale: 1.05 }}>
                      <Animated.div style={style} className={`Portfolio-Back ${p.img}`}>
                        <a href={p.link}>
                          {p.title}
                          <span>{p.desc}</span>
                        </a>
                      </Animated.div>
                    </Tilt>
                  </li>
                );
              })}
            </TransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
