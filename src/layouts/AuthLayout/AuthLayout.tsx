"use client";

import Link from "next/link";
import { ReactNode } from "react";

import { ROUTE } from "@/constants/route";

import styles from "./AuthLayout.module.css";
import Image from "next/image";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.auth_main}>
      <div className={styles.auth_center}>
        <div className={styles.logo}>
          <Link href={ROUTE.HOME}>
            <img
              className={styles.logo}
              src={"/imgs/logo_with_panda_icon.svg"}
              alt="로고"
            />
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
