import React from "react";
import ItemCard from "./ItemCard";

function BestItemsSection({ items, loading }) {
  return (
    <section className="best-items-section">
      <h2>베스트 상품</h2>
      {loading ? (
        <p>베스트 상품 로딩 중...</p>
      ) : (
        <div className="items-grid best-items-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} imageType="best" />
          ))}
        </div>
      )}
    </section>
  );
}

export default BestItemsSection;
