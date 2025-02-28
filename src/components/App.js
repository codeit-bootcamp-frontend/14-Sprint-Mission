import { Outlet,useLocation,useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import ProductNav from '../components/Product/ProductNav'
import Footer from '../components/Footer';
import styles from './App.module.css';
import './App.font.css';
// import { useEffect, useState,useRef } from 'react';
// import { addGetData, addUserData } from '../api/index';


function App() {
  
  const location = useLocation();

  return (
    <>
       {location.pathname === '/ItemsBox' || location.pathname === '/ItemsDetail' || location.pathname === '/Boards' ? <ProductNav className={styles.nav} /> : <Nav className={styles.nav} /> }
      <div className={styles.body}><Outlet /></div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
