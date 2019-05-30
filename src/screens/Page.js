import React from "react";
import Lorem from "react-lorem-component";
import { Container, Pad } from "../Components/Layout";

export default props => {
  return (
    <Container style={{ alignItems: "flex-start" }}>
      <Pad />
      <h1>{props.slug}</h1>
      <Pad />
      <Lorem count={25} />
    </Container>
  );
};
