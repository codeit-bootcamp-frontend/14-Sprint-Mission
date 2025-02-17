import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Items from "./Items";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/items" replace />} />
          <Route path="/items" element={<Items />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
