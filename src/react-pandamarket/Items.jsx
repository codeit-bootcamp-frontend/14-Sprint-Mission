import React from "react";
import Header from "./Header";
import Body from "./Body";
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
