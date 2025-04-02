import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDescription from "../../../component/detail/ItemDescription";
import ItemOwner from "../../../component/detail/ItemOwner";
import ItemInfo from "../../../component/detail/ItemInfo";
import ItemImage from "../../../component/detail/ItemImage";
import useItemDetail from "../../../hooks/useItemDetail";
import Divider from "../../../component/common/Divider";
import styles from "./ItemDetailInfo";

function ItemDetailInfo() {
  const { productId } = useParams();
  const item = useItemDetail(productId);
  const [selectOpen, setSelectOpen] = useState(false);

  const toggleSelect = () => setSelectOpen((prev) => !prev);
  return (
    <>
      <ItemImage src={item.image} alt="상품 상세 이미지" />
      <div style={{ flexGrow: "1" }}>
        <ItemInfo
          name={item.name}
          price={item.price}
          selectOpen={selectOpen}
          toggleSelect={toggleSelect}
        />
        <Divider />
        <ItemDescription description={item.description} tags={item.tags} />
        <ItemOwner
          ownerNickname={item.ownerNickname}
          updatedAt={item.updatedAt}
          favoriteCount={item.favoriteCount}
        />
      </div>
    </>
  );
}

export default ItemDetailInfo;
