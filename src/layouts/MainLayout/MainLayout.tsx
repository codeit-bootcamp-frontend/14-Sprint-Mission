import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";

import styles from "./MainLayout.module.css";

type MainLayoutProps = { header: ReactNode };

const MainLayout = ({ header }: MainLayoutProps) => {
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
