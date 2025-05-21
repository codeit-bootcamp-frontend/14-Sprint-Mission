import { AuthLayout } from "@/layouts";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
