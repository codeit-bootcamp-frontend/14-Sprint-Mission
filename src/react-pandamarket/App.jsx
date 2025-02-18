import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Items from "./Items";
import AddItem from "./AddItem";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/items" replace />} />
          <Route path="/items" element={<Items />}>
            <Route path="additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
