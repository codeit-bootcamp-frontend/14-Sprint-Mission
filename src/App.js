import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthLayout, MainLayout, Header, NavHeader } from "./layouts";

import { HomePage, SigninPage, SignupPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout header={<Header />} />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route element={<MainLayout header={<NavHeader />} />}>
          <Route index path="/items" element={<HomePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
