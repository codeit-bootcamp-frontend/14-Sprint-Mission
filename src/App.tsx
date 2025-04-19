import Home from "@/pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import SignUp from "./pages/sign-up/sign-up";
import Items from "./pages/items/items";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
