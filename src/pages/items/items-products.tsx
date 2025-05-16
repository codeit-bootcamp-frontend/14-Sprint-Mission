import getProducts, { Products, ProductsData, Query } from "@/api/getProducts";
import ProductElement from "@/components/product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/items-products.module.css";
import DropDown, { OrderBy } from "@/components/drop-down";
import Pagination from "@/components/pagination";
import icSearch from "@assets/images/ic_search.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import useResponsivePageSize from "@/hooks/useResponsivePageSize";

const allProductsPageSizeConfig = {
  mobile: 4,
  tablet: 6,
  desktop: 10,
};

export default function AllProducts() {
  const [productsData, setProductsData] = useState<ProductsData>({
    list: [],
    totalCount: 0,
  });
  const [orderBy, setOrderBy] = useState<OrderBy>("recent");
  const { pageSize: responsivePageSize, isResponsiveSizeReady } =
    useResponsivePageSize(
      allProductsPageSizeConfig,
      "desktop" // 초기 기본값을 desktop으로 설정
    );
  const [page, setPage] = useState<number>(1);
  const isMobile = useMediaQuery("(max-width:767px)");

  const products: Products = productsData.list;
  const totalProductCount: number = productsData.totalCount;
  const totalPage = Math.floor(totalProductCount / responsivePageSize) + 1;

  const handleChangeOrderBy = (order: OrderBy) => {
    setOrderBy(order);
  };

  useEffect(() => {
    if (!isResponsiveSizeReady) return;

    const query: Query = { page, pageSize: responsivePageSize, orderBy };
    getProducts(query)
      .then((data) => setProductsData(data))
      .catch((error) => {
        console.error("상품 데이터를 불러오는 데 실패했습니다.", error);
      })
      .finally(() => {
        console.log("상품 데이터 로딩 완료");
      });
  }, [page, orderBy, responsivePageSize, isResponsiveSizeReady]);

  return (
    <section className={styles.allProducts}>
      <div className={styles.allProductsNav}>
        <h2 className={styles.allProductsTitle}>전체 상품</h2>
        {!isMobile && (
          <div className={styles.relativeDiv}>
            <img src={icSearch} className={styles.icSearch} />
            <input
              className={styles.allProductsSearchInput}
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
        )}
        <Link to={"/addItem"} className={styles.addProduct}>
          상품 등록하기
        </Link>
        <div className="">
          {isMobile && (
            <div className={styles.relativeDiv}>
              <img src={icSearch} className={styles.icSearch} />
              <input
                className={styles.allProductsSearchInput}
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
          )}
          <DropDown
            orderBy={orderBy}
            handleChangeOrderBy={handleChangeOrderBy}
          />
        </div>
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
