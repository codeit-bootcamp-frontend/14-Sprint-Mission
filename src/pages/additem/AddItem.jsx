import { Navigate } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import { useUser } from "../../contexts/UserContext";

export default function AddItem() {
  const user = useUser();

  return user ? (
    <>
      <HeaderNav />
      <div>
        <h1>임시 상품 등록 페이지</h1>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
