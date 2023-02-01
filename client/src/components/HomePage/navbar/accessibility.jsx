import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #f3f0e5;
  font-size: 1.1 rem;
  font-weight: 600;
  border-radius: 20px;
  background-color: #ae2012;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #001219;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #0f1011;
  font-size: 1.1 rem;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #ae2012;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #f3f0e5;
    background-color: #ae2012;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  display: block;
  padding: 0 0.75em;
 
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <Link href="/signup">
      <RegisterButton >Register</RegisterButton>
      </Link>
      <Link href="/login">
      <LoginButton>Login</LoginButton>
      </Link>
    </AccessibilityContainer>
  );
}
