import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/sign/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/items">
            <Route index element={<Items />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
