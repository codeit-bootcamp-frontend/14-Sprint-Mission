import React from "react";
import ItemCard from "./ItemCard";

function ItemList({ items }) {
  return (
    <div className="item-List">
      <ul>
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
