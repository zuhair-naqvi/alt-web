import React from "react";
import { storiesOf } from "@storybook/react";
import { Nav, Item } from "../src/Components/Nav";

storiesOf("Nav", module).add("basic", () => (
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
));
