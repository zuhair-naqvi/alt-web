import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  display: flex;
  font-size: 1em;
  justify-content: space-betwen;
  flex-flow: row wrap;
`;

const Segment = styled.div`
  display: flex;
  width: 50%;
  justify-content: ${props => (props.right ? "flex-end" : "flex-start")};
`;

const Item = styled.div`
  margin: 0px ${props => (props.last ? "0px" : "10px")} 0px
    ${props => (props.first ? "0px" : "10px")};
  padding: 10px 0px 10px 0px;
  color: ${props => props.theme.brandColor3};
  border-bottom: 2px solid
    ${props => (props.active ? props.theme.brandColor3 : "transparent")};
`;

export { Nav, Item, Segment };
