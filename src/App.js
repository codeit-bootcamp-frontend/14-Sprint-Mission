import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      {/* 메인 레이아웃  */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<div>메인</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
