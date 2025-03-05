import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import AddItem from "../pages/additem/AddItem";
import Boards from "../pages/boards/Boards";
import BoardDetail from "../pages/boards/children/BoardDetail";
import Faq from "../pages/faq/Faq";
import Home from "../pages/home/Home";
import ItemDetail from "../pages/items/ItemDetail";
import Items from "../pages/items/Items";
import Login from "../pages/members/Login";
import Signup from "../pages/members/Signup";
import Privacy from "../pages/privacy/Privacy";

function ProtectedRoute({ children }) {
  const user = useUser();
  const pathname = window.location.pathname;
  return !user ? <Navigate to="/login" state={pathname} /> : children;
}
function LogedInRoute({ children }) {
  const user = useUser();
  const { state } = useLocation();
  return user ? <Navigate to={state || "/"} /> : children;
}
export const PageRoutes = () => {
  const routes = useRoutes([
    { path: "", element: <Home /> },
    {
      path: "login",
      element: (
        <LogedInRoute>
          <Login />
        </LogedInRoute>
      ),
    },
    {
      path: "signup",
      element: (
        <LogedInRoute>
          <Signup />
        </LogedInRoute>
      ),
    },
    {
      path: "boards",
      children: [
        { path: "", element: <Boards /> },
        {
          path: ":boardId",
          element: (
            <ProtectedRoute>
              <BoardDetail />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "items",
      children: [
        { path: "", element: <Items /> },
        {
          path: ":productId",
          element: (
            <ProtectedRoute>
              <ItemDetail />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "additem",
      element: (
        <ProtectedRoute>
          <AddItem />
        </ProtectedRoute>
      ),
    },
    { path: "privacy", element: <Privacy /> },
    { path: "faq", element: <Faq /> },
    ,
  ]);
  return routes;
};
