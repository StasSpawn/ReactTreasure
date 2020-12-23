import React from 'react';
import styled from 'styled-components';

import { totalPriceItems } from '../functions/secondaryFunctions';
import { formatCurrency }  from '../functions/secondaryFunctions';

import trashImg from '../../img/trash.svg';


const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
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
  cursor: pointer;
`;

const Toppings = styled.div`
  width: 100%;
  color: #9a9a9a;
  font-size: 14px;
`;



export const OrderListItem = ({ order }) => {

  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name).join(', ');

  console.log(topping)

  return(
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <ItemPrice>{order.count}</ItemPrice>
      <span>{formatCurrency(totalPriceItems(order))}</span>
      <TrashButton/>
      {topping && <Toppings>Допы: {topping}</Toppings>}
    </OrderItemStyled>
  )


};