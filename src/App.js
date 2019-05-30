import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import Loading from "./assets/loading.svg";
import { TransitionRouter as Router } from "./Components/TransitionRouter";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import { Canvas, Container } from "./Components/Layout";
import Header from "./Components/Header";

const Home = React.lazy(() => import("./screens/Home"));
const Page = React.lazy(() => import("./screens/Page"));

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Canvas>
          <Container>
            <Header />
          </Container>
          <Suspense fallback={<img src={Loading} />}>
            <Router primary={false}>
              <Home path="/" />
              <Page path="/p/:slug" />
            </Router>
          </Suspense>
        </Canvas>
      </div>
    </ThemeProvider>
  );
};

export default App;
