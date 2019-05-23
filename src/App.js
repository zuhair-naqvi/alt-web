import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Flex, { FlexItem } from "styled-flex-component";
import { Nav, Item } from "./Components/Nav";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ ...theme }}>
        <div>
          <GlobalStyle />
          <Flex center full>
            <Nav>
              <Item active>Home</Item>
              <Item>About</Item>
            </Nav>
          </Flex>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
