import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getBestItems } from "../../api/api";
import "./ItemComponent.scss";
import useItemFetcher from "../../hooks/useItemFetcher";
import Loading from "../Loading/Loading";

function BestItems({ itemCount }) {
  const { items, isLoading, error } = useItemFetcher(getBestItems);

  if (isLoading) return <Loading />;

  if (error) {
    alert("베스트 상품 로딩 에러");
  }

  return (
    <div className="items-wrap best">
      <h3 className="title">베스트 상품</h3>
      <ItemList items={items?.list || []} count={itemCount} />
    </div>
  );
}

export default BestItems;
