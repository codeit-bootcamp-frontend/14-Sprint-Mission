import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getItem } from "../api";
import "./BestItemList.css";

function BestItemList() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);

  // 화면에 보여줄 개수
  const updatePageSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return 1;
    } else if (width < 1200) {
      return 2;
    } else {
      return 4;
    }
  };

  // 상품 로드
  const handleLoad = async ({ orderBy, pageSize }) => {
    const { list } = await getItem({ orderBy, pageSize });
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ orderBy: "favorite", pageSize });
    window.addEventListener("resize", () => {
      setPageSize(updatePageSize);
    });
  }, [pageSize]);

  return (
    <>
      <div className="item-section-title">베스트 상품</div>
      <ItemList items={items} className="best-item-grid" />
    </>
  );
}

export default BestItemList;
