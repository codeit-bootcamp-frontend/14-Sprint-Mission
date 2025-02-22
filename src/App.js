import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthLayout, MainLayout, Header, NavHeader } from "./layouts";
import {
  AddItemPage,
  HomePage,
  ItemsPage,
  SigninPage,
  SignupPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout header={<Header />} />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route element={<MainLayout header={<NavHeader />} />}>
          <Route index path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItemPage />} />
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
