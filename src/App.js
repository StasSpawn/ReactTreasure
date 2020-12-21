import React from 'react';
import { NavBar }  from './components/navbar/NavBar';
import { Menu }  from './components/menu/Menu';
import { ModalItem }  from './components/modal/ModalItem';
import { GlobalStyle }  from './components/styles/GlobalStyle';
import { Order }  from './components/order/Order';
import { useOpenItem }  from './components/Hooks/useOpenItem';
import { useOrders }  from './components/Hooks/useOrders';


function App() {

  const openItem = useOpenItem();
  const orders = useOrders();


  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}


    </>

  );
}

export default App;
