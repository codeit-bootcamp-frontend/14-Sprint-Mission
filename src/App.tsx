import Home from "@/pages/home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<div>로그인 페이지</div>} />
          <Route path="/signup" element={<div>회원가입 페이지</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
