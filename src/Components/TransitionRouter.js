import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Router, Location } from "@reach/router";

const TransitionRouter = props => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

export { TransitionRouter };
