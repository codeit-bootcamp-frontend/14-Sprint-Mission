import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import ItemPage from "./pages/ItemPage";
import "/root.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="items" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
