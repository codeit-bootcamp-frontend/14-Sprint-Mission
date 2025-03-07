import { useNavigate, useParams } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import ItemDetailComments from "./components/detail/ItemDetailComments";
import ItemDetailPost from "./components/detail/ItemDetailPost";
import "./itemdetail.scss";

export default function ItemDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();

  function handleTagClick(keyword) {
    navigate(`/items?keyword=${keyword}`);
  }
  function handleGoBackClick() {
    navigate("/items");
  }

  return (
    <>
      <title>판다마켓 - 상품 상세</title>
      <HeaderNav />
      <main className="display-grid justify-stretch gap-40" id="item-detail">
        <ItemDetailPost productId={productId} onTagClick={handleTagClick} />
        <hr />
        <ItemDetailComments productId={productId} onBackClick={handleGoBackClick} />
      </main>
    </>
  );
}
