import React from "react";
import Header from "./components/Header";
import Body from "./pages/Body";
import { Outlet } from "react-router-dom";

const Items = () => {
  return (
    <>
      <Header />
      <Body />
      <Outlet />
    </>
  );
};

export default Items;
