import React from "react";
import styled from "styled-components";
import ResumeLogoImg from "../../assets/images/logo.svg";

const LogoWrapper = styled.div`
 display: block;
`;

const LogoImg = styled.div`
  width: 2vw;
  height: 2vw;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Link = styled.a`
display: flex;
align-items: center;
  text-decoration: none;
display: div;
`;
const LogoText = styled.h2`
  font-size: 1.5rem ;
  margin: 0;
  margin-left: 6px;
  color: #0f1011;
  font-weight: 500;
`;
const Span = styled.span`

  color: #ae2012;
  
`;

export function Logo(props) {
  return (
    
    <LogoWrapper>
      <Link href="/">
      <LogoImg>
        <img src={ResumeLogoImg} alt="Greenland logo" />
      </LogoImg>
      <LogoText>Resu<Span>me</Span></LogoText>
      </Link>
    </LogoWrapper>
  );
}
