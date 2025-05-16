import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/AddItemPage";
import PrivacyPage from "./pages/PrivacyPage";
import FaqPage from "./pages/FaqPage";
import MyProfilePage from "./pages/MyProfilePage";

function AppContent() {
  const location = useLocation();
  const hideFooterRoutes = ["/additem"];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
