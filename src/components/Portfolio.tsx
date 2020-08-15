import React, { Component } from 'react';
import Tilt from 'react-tilt';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import * as Animated from 'animated/lib/targets/react-dom';
import * as PIXI from 'pixi.js';
import Back from './Back';

/* eslint-disable */
import PortfolioData from './PortfolioData';
import './Portfolio.css';

interface Project {
  title: string,
  desc: string,
  link: string,
  img: string,
  year: number,
}

interface PortfolioState {
  anim: string,
  projects: Array<Project>,
  animations: Array<any>
}

class Portfolio extends Component<{}, PortfolioState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      anim: 'anim',
      projects: [],
      animations: [],
    };
  }

  componentDidMount() {
    // Listen for PIXI loader completion
    if (Math.round(PIXI.Loader.shared.progress) === 100) {
      this.setState({ anim: 'anim in' });
    } else {
      PIXI.Loader.shared.onComplete.once(() => {
        this.setState({ anim: 'anim in' });
      });
    }

    // Render the project entries
    this.renderProjects(PortfolioData);
  }

  renderProjects(projectList: Array<Project>) {
    this.setState({
      projects: projectList,
      animations: projectList.map(() => new Animated.Value(0)),
    },
    () => {
      const { animations } = this.state;
      Animated.stagger(
        125,
        animations.map((anim) => Animated.spring(anim, { toValue: 1 })),
      ).start();
    });
  }

  render() {
    const { anim, projects, animations } = this.state;
    return (
      <div className={anim}>
        <Back />
        <div className="Portfolio">
          <h1 className="Page-Head">PORTFOLIO</h1>
          <div className="Scroll">
            {[2019, 2017, 2016].map((year) => (
              <React.Fragment key={year}>
                <h2 className="Page-Head">{`/ ${year} /`}</h2>
                <TransitionGroup component="ul">
                  {projects.filter((project) => project.year === year).map((p, i) => {
                    const style = {
                      opacity: animations[i],
                      transform: Animated.template`
                    translate3d(0,${animations[i].interpolate({
                        inputRange: [0, 1],
                        outputRange: ['12px', '0px'],
                      })},0)
                  `,
                    };
                    return (
                      <li key={p.title}>
                        <Tilt options={{ max: 25, scale: 1.05 }}>
                          {/* eslint-disable-next-line react/jsx-pascal-case */}
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
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
