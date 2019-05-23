import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  font-family: "BigJohn";
  font-size: 2.5em;
  margin: 5rem 0px 5rem 0px;
  display: flex;
  flex-flow: row nowrap;
`;

const Main = styled.div`
  font-family: "BigJohn";
`;

const Sub = styled.div`
  font-family: "SlimJoe";
`;

export default () => (
  <Logo>
    <Main>ALT</Main>
    <Sub>NETWORK</Sub>
  </Logo>
);
