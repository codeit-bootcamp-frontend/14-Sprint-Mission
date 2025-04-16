import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getBestItems } from "../../api/api";

function BestItems() {
  const [items, setItems] = useState([]);

  const handleGetBestItem = async () => {
    const result = await getBestItems();
    setItems(result);
  };

  useEffect(() => {
    handleGetBestItem();
  }, []);

  return (
    <div className="bestItems">
      <h3 className="title">베스트 상품</h3>
      <ItemList items={items.list} />
    </div>
  );
}

export default BestItems;
