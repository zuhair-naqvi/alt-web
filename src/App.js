import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import Flex, { FlexItem } from "styled-flex-component";
import { Nav, Item } from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Flex center full>
            <Nav>
              <Item active>
                <a href="/">Home</a>
              </Item>
              <Item>
                <a href="/">About</a>
              </Item>
              <Item>
                <a href="/">News</a>
              </Item>
            </Nav>
          </Flex>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
