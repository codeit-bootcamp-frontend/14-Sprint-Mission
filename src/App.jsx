import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/sign/SignUp";
import Items from "./pages/items";
import GNB from "@/components/GNB";
import { WinSizeProvider } from "./contexts/winSizeContext";
import Login from "./pages/sign/LogIn";
import AddItem from "./pages/additem";

function App() {
  return (
    <>
      <WinSizeProvider>
        <BrowserRouter>
          <GNB />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/items" element={<Items />}>
              {/* <Route index element={<Items />} /> */}
            </Route>
            <Route path="/additem" element={<AddItem />} />
          </Routes>
        </BrowserRouter>
      </WinSizeProvider>
    </>
  );
}

export default App;
