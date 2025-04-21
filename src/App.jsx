import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/global.scss";
import Login from "./pages/Sign/Login";
import Signup from "./pages/Sign/Signup";
import Main from "./pages/main/Main";
import Items from "./pages/Items/Items";
import AddItem from "./pages/AddItem/AddItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
