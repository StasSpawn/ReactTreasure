import React, {useContext} from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import LoginImg from '../../img/sign.svg';

import { Context }  from '../functions/context';

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

const LoginLogo = styled.img`
  color: white;
  text-transform: uppercase;
`;

const LoginBlock = styled.a`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display:flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor:pointer;
  margin-right: 30px;
`;

const Figure = styled.figure`
  margin: 0 30px;
  text-align: center;
`;


export const NavBar = () => {
  const {auth: {authentication, logIn, logOut}} = useContext(Context);

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src= {logoImg} alt="logo"/>
        <H1>MrDonalds's</H1>
      </Logo>

      {authentication ?
        <User>
          <Figure>
            <LoginLogo src= {LoginImg} alt={authentication.displayName}/>
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <LogOut title='Выйти' onClick={logOut}>X</LogOut>
        </User>
        :
        <LoginBlock onClick={logIn} href="#!">
          <Figure>
            <LoginLogo src= {LoginImg} alt="Login logo"/>
            <figcaption>Войти</figcaption>
          </Figure>
        </LoginBlock>
      }
    </NavBarStyled>
  )
};