import React from "react";
import { storiesOf } from "@storybook/react";
import { Nav, Item, Segment } from "../src/Components/Nav";

storiesOf("Nav", module).add("basic", () => (
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
));
