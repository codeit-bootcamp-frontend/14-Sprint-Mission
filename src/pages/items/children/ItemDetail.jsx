import { Navigate } from "react-router-dom";
import HeaderNav from "../../../components/HeaderNav";
import { useUser } from "../../../contexts/UserContext";

export default function ItemDetail() {
  const user = useUser();

  return user ? (
    <>
      <HeaderNav />
      <div>
        <h1>임시 상품 상세 페이지</h1>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
