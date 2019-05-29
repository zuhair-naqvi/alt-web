import React from "react";
import styled, { keyframes } from "styled-components";
import Lorem from "react-lorem-component";
import Typing from "react-typing-animation";
import { Container, Pad } from "../Components/Layout";
import Hero from "../assets/hero3.jpg";

const Banner = styled.div`
  width: 100%;
  height: 50vh;
  background: linear-gradient(to top, rgba(0, 0, 0, .7), transparent), url("${Hero}");
  background-size: cover;
  font-size: 2.5em;
  color: ${props => props.theme.brandColor1}
  font-family: "BigJohn";
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-flow: column wrap;
  line-height: 1.3em;
  text-shadow: #000 3px 0 12px;
`;

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  font-size: 1em;
  padding-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

export default () => {
  return (
    <Container>
      <Pad />
      <Banner>
        <div>A phone that</div>
        <Typing cursor={<Cursor>|</Cursor>}>won't spy on you.</Typing>
      </Banner>
      <Pad />
      <Lorem count={20} />
    </Container>
  );
};
