import React from "react";
import ItemCard from "./ItemCard";

function ItemList({ items, count }) {
  return (
    <div className="item-list">
      <ul>
        {items?.slice(0, count).map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
