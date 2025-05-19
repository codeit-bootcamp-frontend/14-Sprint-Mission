import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./BestProductSection.css";

function BestProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.list || []);
      })
      .catch((err) => console.error("베스트 상품 가져오기 실패:", err));
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="best-section">
      <div className="best-grid">
        <h2 className="best-title">베스트 상품</h2>
        {products.map((product, index) => (
          <div className={`best-card-wrapper card-${index}`} key={product.id}>
            <ProductCard product={product} type="best" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestProductSection;
