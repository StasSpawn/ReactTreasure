import React from 'react';
import styled from 'styled-components';

import { ButtonCheckout }  from '../styles/ButtonCheckout';
import { OrderListItem }  from './OrderListItem';
import { totalPriceItems } from '../functions/secondaryFunctions';
import { formatCurrency }  from '../functions/secondaryFunctions';

const OrderStyles = styled.section`
  position: fixed;
  top: 89px;
  left: 0;
  display:flex;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
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




export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn }) => {
  const deleteItem = index => {
    const newOrders = orders.filter((item, i) =>
      index !== i);


    setOrders(newOrders)

  }

  const total = orders.reduce((result, order) =>
    totalPriceItems(order) + result, 0)

  const totalCounter = orders.reduce((result, order) =>
    order.count + result, 0)

  return (
    <OrderStyles>
      <OrderTitle>
        Ваш заказ
      </OrderTitle>
      <OrderContent>
        {orders.length ?
        <OrderList>
          {orders.map((order, index) => <OrderListItem
            key={index}
            order={order}
            deleteItem={deleteItem}
            index={index}
            setOpenItem={setOpenItem}
          />)}
        </OrderList> :
        <EmptyList> Список заказов пуст</EmptyList>}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalCounter}</span>
        <TotalPrice> {formatCurrency(total)} </TotalPrice>
      </Total>
      <ButtonCheckout onClick={() => {
        if (authentication) {
          console.log(orders)
        } else {
          logIn()
        }
      }}>Оформить</ButtonCheckout>
    </OrderStyles>

  )
}