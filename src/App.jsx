import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./pages/itemPage/ItemPage";
import AddItemPage from "./pages/addItemPage/AddItemPage";
import ItemDetailPage from "./pages/itemDetail/container/ItemDetailPage";
import "/root.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
        <Route path="additem" element={<AddItemPage />} />
        <Route path="items/:productId" element={<ItemDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
