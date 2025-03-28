import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import ProductListPage from './pages/ProductListPage';
import AddItemPage from './pages/AddItemPage';
import ProductItem from './pages/ProductItemPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="items">
            <Route index element={<ProductListPage />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
          <Route path="items/:id" element={<ProductItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
