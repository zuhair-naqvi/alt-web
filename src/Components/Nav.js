import styled from "styled-components";

const Nav = styled.div`
  border-bottom: 1px solid ${props => props.theme.brandColor2};
  width: 100%;
  display: flex;
`;

const Item = styled.div`
  padding: 5px;
  margin: 0px 10px 0px 10px;
  color: ${props => props.theme.brandColor3};
  border-bottom: 2px solid
    ${props => (props.active ? props.theme.brandColor3 : "transparent")};
`;

export { Nav, Item };
