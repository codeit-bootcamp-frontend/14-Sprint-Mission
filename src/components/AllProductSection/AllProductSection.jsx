import ProductCard from "../ProductCard/ProductCard";
import "./AllProductSection.css";

function AllProductSection({ products }) {
  if (!products || products.length === 0) {
    return (
      <p style={{ marginTop: "1rem", textAlign: "center" }}>상품이 없습니다.</p>
    );
  }

  return (
    <section className="all-section">
      <div className="all-grid">
        {products.map((product, index) => (
          <div className={`product-wrapper index-${index}`} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllProductSection;
