import React from 'react';
import styled from 'styled-components';

import { totalPriceItems } from '../functions/secondaryFunctions';
import { toLocalStringRub }  from '../functions/secondaryFunctions';

import trashImg from '../../img/trash.svg';


const OrderItemStyled = styled.li`
  display: flex;
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

export const OrderListItem = ({ order }) => (

  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <ItemPrice>{order.count}</ItemPrice>
    <span>
      {toLocalStringRub(totalPriceItems(order))}
    </span>
    <TrashButton/>
  </OrderItemStyled>

);