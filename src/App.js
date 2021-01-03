import React from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';


import { NavBar }  from './components/navbar/NavBar';
import { Menu }  from './components/menu/Menu';
import { ModalItem }  from './components/modal/ModalItem';
import { GlobalStyle }  from './components/styles/GlobalStyle';
import { Order }  from './components/order/Order';
import { useOpenItem }  from './components/Hooks/useOpenItem';
import { useOrders }  from './components/Hooks/useOrders';
import { useAuth }  from './components/Hooks/useAuth';
import { useTitle }  from './components/Hooks/useTitle';
import { OrderConfirm }  from './components/order/OrderConfirm';
import { useOrderConfirm }  from './components/Hooks/UseOrderConfirm';
import { Context }  from './components/functions/context';


const firebaseConfig = {
  apiKey: "AIzaSyAMyXrFNJwFYLYpzST5FHWJWXzh98NfjRw",
  authDomain: "reactlearn-618ba.firebaseapp.com",
  databaseURL: "https://reactlearn-618ba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactlearn-618ba",
  storageBucket: "reactlearn-618ba.appspot.com",
  messagingSenderId: "581575122870",
  appId: "1:581575122870:web:3cecea5a66d60bc8da6b17"
};

firebase.initializeApp(firebaseConfig);


function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();


  useTitle(openItem.openItem);


  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database
    }}>
      <GlobalStyle />
      <NavBar />
      <Order />

      <Menu />
      { openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}

    </Context.Provider>

  );
}

export default App;
