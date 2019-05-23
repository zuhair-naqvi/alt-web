import styled from "styled-components";

const Nav = styled.div`
  border-bottom: 1px solid ${props => props.theme.brandColor3};
  width: 100%;
  display: flex;
`;

const Item = styled.div`
  padding: 5px;
  background-color: ${props =>
    props.active ? props.theme.brandColor2 : props.theme.brandColor1};
  border-bottom: ${props =>
    props.active ? props.theme.brandColor2 : "transparent"};
`;

export { Nav, Item };
