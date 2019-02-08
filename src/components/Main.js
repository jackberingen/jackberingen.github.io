import React, { Component } from 'react'
import Route from 'react-router-dom/Route'
import TransitionGroup from "react-transition-group/TransitionGroup"
import AnimatedSwitch from "./AnimatedSwitch"

import About from './About'
import Title from './Title'
import Portfolio from './Portfolio'
import PortfolioData from './PortfolioData';
import Fallback from './Fallback';

import './Main.css'

class Main extends Component {
  constructor(){
    super();
    this.state = {
      projects: PortfolioData.projects
    }
  }

  render(){
    return (
      <Route
        render={({ location }) =>(
          <TransitionGroup component="main">
            <AnimatedSwitch key={location.key} location={location}>
              <Route exact path="/" component={Title} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" render={props =>(
                <Portfolio {...props} projects={this.state.projects} />
              )} />
              <Route component={Fallback}/>
            </AnimatedSwitch>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default Main;