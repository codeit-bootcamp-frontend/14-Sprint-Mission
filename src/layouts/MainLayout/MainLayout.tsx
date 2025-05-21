import { ReactNode } from "react";

import Footer from "../Footer/Footer";

import styles from "./MainLayout.module.css";

type MainLayoutProps = { header: ReactNode; children: ReactNode };

const MainLayout = ({ header, children }: MainLayoutProps) => {
  return (
    <>
      {header}
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
