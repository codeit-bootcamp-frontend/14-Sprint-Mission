import React, { useState } from 'react';
import { Outlet,useLocation } from 'react-router-dom';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import ProductNav from './layout/ProductNav';


function App() {
  
  const location = useLocation();
  const isItemsDetail = /^\/ItemsBox\/ItemsDetail\/\d+$/.test(location.pathname);

  return (
    <div>
       {
       location.pathname === '/ItemsBox' ||
       location.pathname === '/ItemsDetail' || 
       location.pathname === '/Boards' ||  
       isItemsDetail ? 
       <ProductNav/> 
       : 
       <Nav/> 
       }
      <div><Outlet /></div>
      <Footer/>
    </div>
  );
}

export default App;
