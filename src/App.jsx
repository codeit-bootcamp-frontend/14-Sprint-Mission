import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/sign/SignUp";
import Items from "./pages/items";
import GNB from "@/components/GNB";
import { WinSizeProvider } from "./contexts/winSizeContext";
import Login from "./pages/sign/LogIn";

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
          </Routes>
        </BrowserRouter>
      </WinSizeProvider>
    </>
  );
}

export default App;
