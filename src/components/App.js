import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from './App.module.css';
import './App.font.css';
import { useEffect, useState } from 'react';
import { addGetData, addUserData } from '../api/index';


function App() {
  

  // const handleLoad = async () => {
  //   const Data = await addGetData();
  //   const { totalCount } = Data;
  //   console.log(totalCount);
  // };

  // handleLoad();
  const handleLoad = async () => {
    const Data = await addUserData();
    console.log(Data);
  };

  handleLoad();

  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}><Outlet /></div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
