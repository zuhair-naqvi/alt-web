import React, { Suspense } from "react";
import styled from "styled-components";
import Hero from "../assets/hero.jpg";
import Lorem from "react-lorem-component";

const Pad = styled.div`
  padding-top: 2rem;
`;

export default () => {
  return (
    <div>
      <Pad />
      <img src={Hero} style={{ width: "100%" }} />
      <Pad />
      <Lorem count={20} />
    </div>
  );
};
