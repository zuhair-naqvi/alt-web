import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Nav, Item, Segment, Icon } from "./Nav";
import Logo from "./Logo";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoGithub from "react-ionicons/lib/LogoGithub";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BlurPanel = styled.div`
  position: fixed;
  width: 100%;
  height: ${props => (props.inView ? "7rem" : "5rem")};
  background: linear-gradient(
    to bottom,
    ${props => props.theme.brandColor1},
    transparent
  );
`;

const Header = ({ className }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.15
  });
  const getFixedStyles = inView => {
    if (inView) {
      return {};
    }
    return {
      position: "fixed",
      boxShadow: "0px 15px 10px -15px #999",
      padding: "0 1rem 0 1rem",
      maxWidth: "960px"
    };
  };

  return (
    <StyledHeader className={className} ref={ref}>
      <BlurPanel inView={inView} />
      <Logo />
      <Nav style={getFixedStyles(inView)}>
        <Segment>
          <Item first link="/">
            Home
          </Item>

          <Item link="/p/whitepaper">Whitepaper</Item>

          <Item link="/p/roadmap">Roadmap</Item>

          <Item link="/p/team">Team</Item>
        </Segment>
        <Segment right>
          <Item link="#">
            <Icon>
              <LogoTwitter fontSize="1.4em" />
            </Icon>
            Community
          </Item>
          <Item link="#" last>
            <Icon>
              <LogoGithub fontSize="1.4em" />
            </Icon>
            Github
          </Item>
        </Segment>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
