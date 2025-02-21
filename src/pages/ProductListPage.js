import { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import { getProducts } from "../api/api";
import Product from "../componenets/Product";
import "./ProductListPage.css";

function ProductListPage() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState();
  const [pageSize, setPageSize] = useState(10);
  const [pageBestSize, setPageBestSize] = useState(4);

  // 전체 상품 받아오기
  const handleLoad = async (pageSize) => {
    const result = await getProducts({ pageSize: pageSize });
    const { list, totalCount } = result;
    setProducts(list);
  };

  // 베스트 상품 받아오기
  const handleBestLoad = async (pageSize) => {
    const bestResult = await getProducts({
      page: 1,
      pageSize: pageSize,
      keyword: "",
      orderBy: "favorite",
    });
    const { list } = bestResult;
    setBestProducts(list);
  };

  // 상품 데이터 불러오기
  useEffect(() => {
    handleLoad(pageSize);
    handleBestLoad(pageBestSize);
  }, []);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main>
        <div className="best-container">
          <h2>베스트 상품</h2>
          <div className="best-products">
            {bestProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="all-container">
          <div className="filter">
            <h2>전체</h2>
          </div>
          <div className="all-products">
            {products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductListPage;
