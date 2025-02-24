import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Faq from "./pages/faq/Faq";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import Login from "./pages/members/Login";
import Signup from "./pages/members/Signup";
import Privacy from "./pages/privacy/Privacy";

export default function App() {
  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}
