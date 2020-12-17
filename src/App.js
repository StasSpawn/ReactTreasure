import React from 'react';
import { NavBar }  from './components/navbar/NavBar';
import { Menu }  from './components/menu/Menu';
import { ModalItem }  from './components/modalItem/ModalItem';
import { GlobalStyle }  from './components/GlobalStyle';
import { Order }  from './components/order/Order';


function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
      <Order />


    </>

  );
}

export default App;
