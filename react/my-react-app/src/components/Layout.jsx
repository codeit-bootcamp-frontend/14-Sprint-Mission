import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 30px; // 줄인 패딩
`;

function Layout() {
  const location = useLocation();
  // Hide footer on /additem, /items, and product detail pages (/items/:productId)
  const hideFooter = location.pathname === "/additem" || 
                    location.pathname === "/items" || 
                    location.pathname.startsWith("/items/");

  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      {!hideFooter && <Footer />}
    </LayoutContainer>
  );
}

export default Layout;
