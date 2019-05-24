import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  display: flex;
  line-height: 1.5em;
  justify-content: space-between;
  flex-flow: row wrap;
  background-color: ${props => props.theme.brandColor1};
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Segment = styled.div`
  display: flex;
  justify-content: ${props => (props.right ? "flex-end" : "flex-start")};
  @media only screen and (max-width: 600px) {
    display: ${props => (props.right ? "none" : "flex")};
  }
`;

const Item = styled.div`
  font-size: 1em;
  margin: 0px ${props => (props.last ? "0px" : "10px")} 0px
    ${props => (props.first ? "0px" : "10px")};
  padding: 10px 0px 10px 0px;
  color: ${props => props.theme.brandColor3};
  border-bottom: 2px solid
    ${props => (props.active ? props.theme.brandColor3 : "transparent")};
`;

const Icon = styled.span`
  margin-right: 5px;
`;

export { Nav, Item, Segment, Icon };
