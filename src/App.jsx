import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/global.scss";
import Login from "./pages/Sign/Login";
import Signup from "./pages/Sign/Signup";
import Main from "./pages/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
