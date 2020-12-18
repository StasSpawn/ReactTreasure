import React from 'react';
import styled from 'styled-components';

import { ButtonCheckout }  from '../styles/ButtonCheckout';
import { OrderListItem }  from './OrderListItem';

const OrderStyles = styled.section`
  position: fixed;
  top: 89px;
  left: 0;
  display:flex;
  flex-direction: column;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 89px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`
  
`;
const EmptyList = styled.p`
  text-align: center;
`;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

export const Order = ({ orders }) => {
  return (
    <OrderStyles>
      <OrderTitle>
        Ваш заказ
      </OrderTitle>
      <OrderContent>
        {orders.length ?
        <OrderList>
          {orders.map(order => <OrderListItem order={order}/>)}
        </OrderList> :
        <EmptyList> Список заказов пуст</EmptyList>}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <TotalPrice> 850 Р</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyles>

  )
}