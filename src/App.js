import React, { Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import Loading from "./assets/loading.svg";
import { Router } from "@reach/router";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";

const Home = React.lazy(() => import("./screens/Home"));
const Page = React.lazy(() => import("./screens/Page"));

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
  padding: 0 1rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Canvas>
          <Container>
            <Header />
          </Container>
          <Container>
            <Suspense fallback={<img src={Loading} />}>
              <Router>
                <Home path="/" />
                <Page path="/p/:slug" />
              </Router>
            </Suspense>
          </Container>
        </Canvas>
      </div>
    </ThemeProvider>
  );
};

export default App;
