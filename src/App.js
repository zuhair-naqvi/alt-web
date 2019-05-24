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

const Divider = styled.div`
  height: 1px;
  width: 100%;
  padding-bottom: 5px;
  box-shadow: 0 4px 2px -2px #e0e0e0;
  margin-top: ${props => props.offSetTop || 0};
`;

const Container = styled.div`
  max-width: 960px;
  width: fill-available;
  padding: 0 2rem 0 2rem;
`;

const Content = styled.div`
  padding: 2rem 0 2rem 0;
`;

//  box-shadow: 0 4px 2px -2px #f0f0f0;

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
            <Divider offSetTop={"-7px"} />
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
