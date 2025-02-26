import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import AddItem from "./pages/additem/AddItem";
import Boards from "./pages/boards/Boards";
import BoardDetail from "./pages/boards/children/BoardDetail";
import Faq from "./pages/faq/Faq";
import Home from "./pages/home/Home";
import ItemDetail from "./pages/items/children/ItemDetail";
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
          <Route path="/items">
            <Route index element={<Items />} />
            <Route path=":itemId" element={<ItemDetail />} />
          </Route>
          <Route path="/additem" element={<AddItem />} />
          <Route path="/boards">
            <Route index element={<Boards />} />
            <Route path=":boardId" element={<BoardDetail />} />
          </Route>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
