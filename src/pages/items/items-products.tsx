import getProducts, { Products, ProductsData, Query } from "@/api/getProducts";
import ProductElement from "@/components/product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/items-products.module.css";
import DropDown, { OrderBy } from "@/components/drop-down";
import Pagination from "@/components/pagination";

enum PageSize {
  PC = 10,
  Tablet = 6,
  Mobile = 4,
}

export default function AllProducts() {
  const [productsData, setProductsData] = useState<ProductsData>({
    list: [],
    totalCount: 0,
  });
  const [orderBy, setOrderBy] = useState<OrderBy>("recent");
  const [pageSize, setPageSize] = useState<PageSize>(10);
  const [page, setPage] = useState<number>(17);

  const products: Products = productsData.list;
  const totalProductCount: number = productsData.totalCount;
  const totalPage = Math.floor(totalProductCount / pageSize) + 1;

  const handleChangeOrderBy = (order: OrderBy) => {
    setOrderBy(order);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setPageSize(PageSize.PC);
    } else if (window.innerWidth >= 768) {
      setPageSize(PageSize.Tablet);
    } else {
      setPageSize(PageSize.Mobile);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const query: Query = { page, pageSize, orderBy };
    getProducts(query)
      .then((data) => setProductsData(data))
      .catch((error) => {
        console.error("상품 데이터를 불러오는 데 실패했습니다.", error);
      })
      .finally(() => {
        console.log("상품 데이터 로딩 완료");
      });
    return () => {
      console.log("상품 데이터 로딩 취소");
    };
  }, [page, orderBy, pageSize]);

  return (
    <section className={styles.allProducts}>
      <div className={styles.allProductsNav}>
        <h2 className={styles.allProductsTitle}>전체 상품</h2>
        <input className={styles.allProductsSearchInput} />
        <Link to={"/addItem"} className={styles.addProduct}>
          상품 등록하기
        </Link>
        <DropDown orderBy={orderBy} handleChangeOrderBy={handleChangeOrderBy} />
      </div>
      <ul className={styles.allProductsList}>
        {products.map((product) => (
          <li className={styles.allProductsElement} key={product.id}>
            <ProductElement product={product} />
          </li>
        ))}
      </ul>
      <Pagination totalPage={totalPage} currentPage={page} setPage={setPage} />
    </section>
  );
}
