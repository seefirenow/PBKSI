import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";


const NavbarContainer = styled.div`
  width: 100vw;
  height: 10vh;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  background-color:#f3f0e5;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  padding: 0 2vw;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2vw;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
