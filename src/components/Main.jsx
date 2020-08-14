import React from 'react';
import { Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from './AnimatedSwitch';

import About from './About';
import Title from './Title';
import Portfolio from './Portfolio.tsx';
import Fallback from './Fallback';

import './Main.css';

function Main() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup component="main">
          <AnimatedSwitch key={location.key} location={location}>
            <Route exact path="/" component={Title} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/portfolio"
              component={Portfolio}
            />
            <Route component={Fallback} />
          </AnimatedSwitch>
        </TransitionGroup>
      )}
    />
  );
}

export default Main;
