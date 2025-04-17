import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getBestItems } from "../../api/api";
import "./ItemComponent.scss";

function BestItems({ itemCount, onLoading, onError }) {
  const [items, setItems] = useState([]);

  const handleGetBestItem = async () => {
    try {
      const result = await getBestItems();
      setItems(result);
      onLoading(false);
    } catch (error) {
      onLoading(false);
      onError(error.message);
    }
  };

  useEffect(() => {
    handleGetBestItem();
  }, []);

  return (
    <div className="items-wrap best">
      <h3 className="title">베스트 상품</h3>
      <ItemList items={items.list} count={itemCount} />
    </div>
  );
}

export default BestItems;
