import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import Flex, { FlexItem } from "styled-flex-component";
import { Nav, Item, Segment } from "./Components/Nav";
import Logo from "./Components/Logo";

const Content = styled.div`
  width: 960px;
  padding: 0 2rem 0 2rem;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 0 4px 2px -2px #f0f0f0;
  justify-content: center;
`;

const Page = styled.div`
  padding: 2rem 0 2rem 0;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Flex center full column>
            <Header>
              <Content>
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
                    <Item last>
                      <a href="/">Team</a>
                    </Item>
                  </Segment>
                  <Segment right>
                    <Item first>
                      <a href="/">Community</a>
                    </Item>
                    <Item last>
                      <a href="/">Github</a>
                    </Item>
                  </Segment>
                </Nav>
              </Content>
            </Header>
            <Page>
              <Content>Hello</Content>
            </Page>
          </Flex>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
