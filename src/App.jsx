import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Home from "./pages/home/Home";
import Login from "./pages/members/Login";
import Signup from "./pages/members/Signup";

const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState();
  return (
    <UserContext value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderNav />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}
