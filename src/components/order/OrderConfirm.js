import React, {useContext} from 'react';
import styled from 'styled-components';

import { Overlay } from '../modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { ButtonCheckout }  from '../styles/ButtonCheckout';
import { projection }  from '../functions/secondaryFunctions';
import { totalPriceItems } from '../functions/secondaryFunctions';
import { formatCurrency }  from '../functions/secondaryFunctions';

import { Context }  from '../functions/context';


const Modal = styled.div`
  background-color:#fff;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  itemName: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
    arr => arr.length ? arr : 'No topping'],
  choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData))
  dataBase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  });
}

export const OrderConfirm = () => {
  const {
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    firebaseDatabase
  } = useContext(Context)

  const dataBase = firebaseDatabase();
  const total = orders.reduce((result, order) =>
    totalPriceItems(order) + result, 0)

  return (
    <Overlay>
      <Modal>
        <OrderTitle>
          {authentication.displayName}
        </OrderTitle>
        <Text>Осталось подтвердить</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout onClick={() => {
          sendOrder(dataBase, orders, authentication)
          setOrders([]);
          setOpenOrderConfirm(false)
        }}>
          Подтвердить
        </ButtonCheckout>
      </Modal>
    </Overlay>
  )

}
