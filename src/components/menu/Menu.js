import React, {useContext} from 'react';
import styled from 'styled-components';

import { ListItem } from './ListItem';
import { useFetch } from "../Hooks/useFetch";

import { Context }  from '../functions/context';

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





export const Menu = ( ) => {
  const { openItem:  {setOpenItem}} = useContext(Context)

  const res = useFetch()

  const dbMenu = res.response

  return (
    <MenuStyled>
      <MainBanner>
        <img src= {mainBannerImage} alt="Главный баннер"/>
      </MainBanner>
      {res.response ?
        <>
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
        </> : res.error ?
        <div>Sorry, we eill fix it</div> :
        <div>Loading... Please wait</div>
      }


    </MenuStyled>
  )
};