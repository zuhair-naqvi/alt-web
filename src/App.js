import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Lorem from "react-lorem-component";

const Canvas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: fill-available;
  width: 100%;
  overflow: auto;
`;

const Container = styled.div`
  max-width: 960px;
  width: fill-available;
  padding: 0 2rem 0 2rem;
`;

const Content = styled.div`
  padding: 2rem 0 2rem 0;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Canvas>
            <Container>
              <Header />
            </Container>
            <Container>
              <Content>
                <Lorem count={30} />
              </Content>
            </Container>
          </Canvas>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
