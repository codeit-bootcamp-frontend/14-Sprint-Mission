import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProducts } from "../api/api";
import Product from "../components/Product";
import "./ProductListPage.css";
import Select from "../components/Select";

function ProductListPage() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageBestSize, setPageBestSize] = useState(4);
  const [sortOrder, setSortOrder] = useState("recent");

  // 전체 상품 받아오기
  const handleLoad = async () => {
    const result = await getProducts({
      page: page,
      pageSize: pageSize,
      orderBy: sortOrder,
    });
    const { list, totalCount } = result;
    setProducts(list);
  };

  // 베스트 상품 받아오기
  const handleBestLoad = async () => {
    const bestResult = await getProducts({
      page: 1,
      pageSize: pageBestSize,
      keyword: "",
      orderBy: "favorite",
    });
    const { list } = bestResult;
    setBestProducts(list);
  };

  // 상품 정렬 기준 변경
  const handleChange = (value) => {
    setSortOrder(value);
  };

  // 상품 데이터 불러오기
  useEffect(() => {
    handleLoad();
    handleBestLoad();
  }, [sortOrder]);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main>
        {/* <div className="best-container">
          <h2>베스트 상품</h2>
          <div className="best-products">
            {bestProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div> */}
        <div className="all-container">
          <div className="filter">
            <div className="row">
              <h2>전체</h2>
              <button className="add-item button mobile">상품 등록하기</button>
            </div>
            <div className="row">
              <form>
                <input
                  className="search-bar"
                  name="search"
                  type="text"
                  placeholder="검색할 상품을 입력해주세요"
                />
              </form>
              <button className="add-item button desktop">상품 등록하기</button>
              <Select
                className="select"
                options={["recent", "favorite"]}
                onSelect={handleChange}
              />
            </div>
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
