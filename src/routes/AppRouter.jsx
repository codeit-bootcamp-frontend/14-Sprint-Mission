import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
// import LandingPage from "./pages/LandingPage";
// import Login from "../pages/login/Login";
// import Signup from "./pages/signup/Signup";
import Items from "../pages/items/Items";
// import FAQ from "./pages/faq/FAQ";
// import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";

export default function AppRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/items" element={<Items />} />
      {/* <Route path="/faq" element={<FAQ />} /> */}
      {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
    </Routes>
  );
}
