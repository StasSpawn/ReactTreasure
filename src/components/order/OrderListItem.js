import React, { useContext } from 'react';
import styled from 'styled-components';

import { totalPriceItems, formatCurrency } from '../functions/secondaryFunctions';

import trashImg from '../../img/trash.svg';

import { Context }  from '../functions/context';


const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align:right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background: transparent url(${trashImg}) center no-repeat;
  background-size: cover;
  
`;

const Toppings = styled.div`
  width: 100%;
  color: #9a9a9a;
  font-size: 14px;
`;



export const OrderListItem = ({ order, index, deleteItem }) => {

  const { openItem: {setOpenItem } } = useContext(Context)

  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  const refDeleteButton = React.useRef(null);


  return(
    <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
      <ItemName>{order.name} {order.choice}</ItemName>
      <ItemPrice>{order.count}</ItemPrice>
      <span>{formatCurrency(totalPriceItems(order))}</span>
      <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}/>
      {topping && <Toppings>Допы: {topping}</Toppings>}
    </OrderItemStyled>
  )


};