import React from "react";
import Lorem from "react-lorem-component";
import styled from "styled-components";

const Pad = styled.div`
  padding-top: 2rem;
`;

export default props => {
  return (
    <div>
      <Pad />
      <h1>{props.slug}</h1>
      <Pad />
      <Lorem count={5} />
    </div>
  );
};
