import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faq from "./pages/faq/Faq";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import Login from "./pages/members/Login";
import Signup from "./pages/members/Signup";
import Privacy from "./pages/privacy/Privacy";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState();
  return (
    <UserContext value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/items" element={<Items />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}
