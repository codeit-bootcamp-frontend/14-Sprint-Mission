import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer";

import styles from "./MainLayout.module.css";

const MainLayout = ({ header }) => {
  return (
    <>
      {header}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
