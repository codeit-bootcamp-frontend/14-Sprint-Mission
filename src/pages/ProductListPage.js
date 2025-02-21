import { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import { getProducts } from "../api/api";
import Product from "../componenets/Product";
import "./ProductListPage.css";

function ProductListPage() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState();
  const [displayedBestProducts, setDisplayedBestProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  // 전체 상품 받아오기
  const handleLoad = async () => {
    const result = await getProducts({});
    const { list } = result;
    setProducts(list);
  };

  // 베스트 상품 받아오기
  const handleBestLoad = async () => {
    const bestResult = await getProducts({
      page: 1,
      pageSize: 4,
      keyword: "",
      orderBy: "favorite",
    });
    const { list } = bestResult;
    setBestProducts(list);
  };

  // 미디어 사이즈에 따라 물품 개수 가져오기
  const getDisplayedProducts = (
    productList,
    desktopCount,
    tabletCount,
    mobileCount
  ) => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      return productList?.slice(0, desktopCount);
    } else if (windowWidth >= 601) {
      return productList?.slice(0, tabletCount);
    } else {
      return productList?.slice(0, mobileCount);
    }
  };

  // 보여주는 상품 state 변경
  const updateDisplayedProducts = () => {
    setDisplayedBestProducts(getDisplayedProducts(bestProducts, 4, 2, 1));
    setDisplayedProducts(getDisplayedProducts(products, 10, 6, 4));
  };

  // 상품 데이터 불러오기
  useEffect(() => {
    handleLoad();
    handleBestLoad();
  }, []);

  // 창 크기 변경시 보여지는 상품 개수 변경
  useEffect(() => {
    updateDisplayedProducts();
    const handleResize = () => {
      updateDisplayedProducts();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [bestProducts, products]);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main>
        <div className="best-container">
          <h2>베스트 상품</h2>
          <div className="best-products">
            {displayedBestProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="all-container">
          <div className="filter">
            <h2>전체</h2>
          </div>
          <div className="all-products">
            {displayedProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductListPage;
