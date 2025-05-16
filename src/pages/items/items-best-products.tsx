import getProducts, { Products, Query } from "@/api/getProducts";
import ProductElement from "@/components/product";
import { useState, useEffect } from "react";
import styles from "./styles/items-best-products.module.css";
import useResponsivePageSize, {
  DefaultPageSize,
} from "@/hooks/useResponsivePageSize";

export default function BestProducts() {
  const [products, setProducts] = useState<Products>([]);
  const { pageSize, isResponsiveSizeReady } =
    useResponsivePageSize(DefaultPageSize);

  useEffect(() => {
    if (!isResponsiveSizeReady) return;

    const query: Query = { page: 1, pageSize, orderBy: "favorite" };
    getProducts(query)
      .then((data) => setProducts(data.list))
      .catch((error) => {
        console.error("상품 데이터를 불러오는 데 실패했습니다.", error);
      })
      .finally(() => {
        console.log("상품 데이터 로딩 완료");
      });
    return () => {
      console.log("상품 데이터 로딩 취소");
    };
  }, [pageSize, isResponsiveSizeReady]);

  return (
    <section className={styles.bestProducts}>
      <h2 className={styles.bestProductsTitle}>베스트 상품</h2>
      <ul className={styles.bestProductsList}>
        {products.map((product) => (
          <li className={styles.bestProductElement} key={product.id}>
            <ProductElement product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
