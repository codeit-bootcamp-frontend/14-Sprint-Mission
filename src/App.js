import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthLayout, MainLayout } from "./layouts";

import { HomePage, SigninPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SigninPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
