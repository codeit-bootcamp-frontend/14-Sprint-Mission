"use client";

import { Header, MainLayout } from "@/layouts/";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavHeader = dynamic(() => import("@/layouts/NavHeader/NavHeader"), {
  ssr: false,
});

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const DynamicHeader = pathname === "/" ? Header : NavHeader;

  return <MainLayout header={<DynamicHeader />}>{children}</MainLayout>;
};

export default Layout;
