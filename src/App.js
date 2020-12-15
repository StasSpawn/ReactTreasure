import React from 'react';
import { NavBar }  from './components/navbar/NavBar';
import { Menu }  from './components/menu/Menu';
import { GlobalStyle }  from './components/GlobalStyle';


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu/>


    </>

  );
}

export default App;
