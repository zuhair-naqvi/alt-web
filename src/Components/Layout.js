import styled from "styled-components";

export const Canvas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: fill-available;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Container = styled.div`
  max-width: 960px;
  width: fill-available;
  padding: 0 1rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Pad = styled.div`
  padding-top: 2rem;
`;
