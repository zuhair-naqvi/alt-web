import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Nav, Item, Segment } from "./Nav";
import Logo from "./Logo";

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export default () => {
  return (
    <Header>
      <Logo />
      <Nav>
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
    </Header>
  );
};
