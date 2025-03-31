import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/common/Header";
import ItemPage from "./pages/item/ItemPage";
import AddItemPage from "./pages/addItem/AddItemPage";
import "/root.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="items" element={<ItemPage />} />
        <Route path="additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
