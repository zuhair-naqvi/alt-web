import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
import GlobalStyle from "../src/GlobalStyle";

function loadStories() {
  require("../stories/index.js");
  // You can require as many stories as you need.
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      {story()}
    </div>
  </ThemeProvider>
));

configure(loadStories, module);
