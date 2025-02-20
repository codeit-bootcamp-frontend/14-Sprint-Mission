import React from "react";

import Header from "../Header";

import styles from "./MainLayout.module.css";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
