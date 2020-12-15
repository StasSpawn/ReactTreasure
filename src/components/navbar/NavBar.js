import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import LoginImg from '../../img/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #299b01;
  color: white;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  padding-top: 7px;
`;

const LoginLogo = styled.img`
  color: white;
  text-transform: uppercase;
`;
const LoginBlock = styled.a`
  display: flex;
  flex-direction: column;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src= {logoImg} alt="logo"/>
      <H1>MrDonalds's</H1>
    </Logo>

    <LoginBlock href="/">
      <LoginLogo src= {LoginImg} alt="Login logo"/>
      <Login>Войти</Login>
    </LoginBlock>


  </NavBarStyled>
);