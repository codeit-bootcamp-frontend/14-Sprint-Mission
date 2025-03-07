import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import { PageRoutes } from "./router/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <PageRoutes />
      </UserContextProvider>
    </BrowserRouter>
  );
}
