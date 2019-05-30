import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { Match, Link } from "@reach/router";

const Nav = styled.div`
  width: 100%;
  display: flex;
  line-height: 1.5em;
  justify-content: space-between;
  flex-flow: row wrap;
  background-color: ${props => props.theme.brandColor1};
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
  z-index: 2;
`;

const Segment = styled.div`
  display: flex;
  justify-content: ${props => (props.right ? "flex-end" : "flex-start")};
  @media only screen and (max-width: 600px) {
    display: ${props => (props.right ? "none" : "flex")};
    width: 100%;
    justify-content: center;
  }
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const StyledItem = styled.div`
  font-size: 1em;
  margin: 0px ${props => (props.last ? "0px" : "10px")} 0px
    ${props => (props.first ? "0px" : "10px")};
  padding: 10px 0px 10px 0px;
  color: ${props => props.theme.brandColor3};
  border-bottom: 2px solid
    ${props => (props.active ? props.theme.brandColor3 : "transparent")};
`;

const Item = ({ link, children, prev, index, ...props }) => {
  return (
    <Match path={link}>
      {({ match }) => (
        <StyledItem {...props} active={match}>
          <Link to={link} state={{ forward: index > prev }}>
            {children}
          </Link>
        </StyledItem>
      )}
    </Match>
  );
};

const Pager = ({ children }) => {
  const [prev, setPrev] = useState(0);

  return (
    <Fragment>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          prev,
          index,
          onClick: () => setPrev(index - 1)
        });
      })}
    </Fragment>
  );
};

export { Nav, Item, Pager, Segment, Icon };
