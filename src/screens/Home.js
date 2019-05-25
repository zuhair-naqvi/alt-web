import React from "react";
import styled from "styled-components";
import Lorem from "react-lorem-component";

const Pad = styled.div`
  padding-top: 2rem;
`;

export default () => {
  return (
    <div>
      <Pad />
      <img src="https://picsum.photos/960/500?blur" style={{ width: "100%" }} />
      <Pad />
      <Lorem count={20} />
    </div>
  );
};
