import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Items from "./Items";
import AddItem from "./pages/AddItem";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/items" replace />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:productId" element={<ProductDetail />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
