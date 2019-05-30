import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Router, Location } from "@reach/router";
import "./TransitionRouter.css";

const TransitionRouter = props => (
  <Location>
    {({ location }) => {
      const slideDirection =
        location.state && location.state.forward ? "slideLeft" : "slideRight";
      return (
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            classNames={slideDirection}
            timeout={500}
          >
            <Router location={location} className="router" {...props}>
              {props.children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      );
    }}
  </Location>
);

export { TransitionRouter };
