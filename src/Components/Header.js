import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Nav, Item, Segment } from "./Nav";
import Logo from "./Logo";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = ({ className }) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.15
  });
  const getFixedStyles = inView => {
    if (inView) {
      return {};
    }
    return {
      position: "fixed",
      boxShadow: "0px 15px 10px -15px #999",
      padding: "0 2rem 0 2rem",
      maxWidth: "960px"
    };
  };

  return (
    <StyledHeader className={className} ref={ref}>
      <Logo />
      <Nav style={getFixedStyles(inView)}>
        <Segment>
          <Item first active>
            <a href="/">Product</a>
          </Item>
          <Item>
            <a href="/">Whitepaper</a>
          </Item>
          <Item>
            <a href="/">Roadmap</a>
          </Item>
          <Item>
            <a href="/">Team</a>
          </Item>
        </Segment>
        <Segment right>
          <Item>
            <a href="/">Community</a>
          </Item>
          <Item last>
            <a href="/">Github</a>
          </Item>
        </Segment>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
