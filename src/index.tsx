import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import ProductListPage from './pages/ProductListPage';
import AddItemPage from './pages/AddItemPage';
import ProductItem from './pages/ProductItemPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

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
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
