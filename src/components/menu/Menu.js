import React from 'react';
import styled from 'styled-components';

import { ListItem } from '../listItem/ListItem';
import dbMenu from "../DBMenu";

// IMAGES
import mainBannerImage from '../../img/banner.png';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const MainBanner = styled.div`
  width: 100%;
  text-align: center;
`;





export const Menu = ( {setOpenItem} ) => (
  <MenuStyled>
    <MainBanner>
      <img src= {mainBannerImage} alt="Главный баннер"/>
    </MainBanner>
    <SectionMenu>
      <h2>Бургеры </h2>
      <ListItem
        itemList={dbMenu.burger}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски / Напитки </h2>
      <ListItem
        itemList={dbMenu.other}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>


  </MenuStyled>
);