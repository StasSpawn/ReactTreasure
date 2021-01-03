import React, { useContext } from 'react';
import styled from 'styled-components';

import { formatCurrency }  from '../functions/secondaryFunctions';

import { Context }  from '../functions/context';

const List = styled.ul`
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;

`;
const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background: ${({img}) => `url(${img})`} center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: white;
  font-size: 30px;
  z-index: 1;
  transition: box-shadow .3s ease;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 30%;
    z-index: -1;
    box-shadow: none;
    transition: background-color .35s ease;
  }
  &:hover {
    cursor:pointer;
    box-shadow: inset 0 0 30px 10px black;
    &:after {
      background-color: rgba(0,0,0,0);
      
   
    }
  }
  
  
  

`;

export const ListItem = ({ itemList }) => {
  const { openItem: { setOpenItem } } = useContext(Context);


  return (
    <List>
      {itemList.map(item => (
        <Item
          key={item.id}
          img={item.img}
          onClick={() => setOpenItem(item)}>
          <p>{item.name}</p>
          <p>{formatCurrency(item.price)}</p>

        </Item>
      ))}

    </List>
  )
}