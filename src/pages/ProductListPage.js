import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProducts } from "../api/api";
import Product from "../components/Product";
import "./ProductListPage.css";
import Select from "../components/Select";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import useWindowWidth from "../components/hooks/useWindowWidth";

// select prop
const selectBox = [
  { label: "최신순", value: "recent" },
  { label: "좋아요순", value: "favorite" },
];

// pageSize 계산 함수
const getPageSize = (width) => {
  if (width >= 1024) {
    return { pageSize: 10, bestPageSize: 4 };
  } else if (width >= 640) {
    return { pageSize: 6, bestPageSize: 2 };
  } else {
    return { pageSize: 4, bestPageSize: 1 };
  }
};

function ProductListPage() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("recent");
  const [keyword, setkeyword] = useState("");
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowWidth();
  const { pageSize, bestPageSize } = getPageSize(windowWidth);
  const totalPages = Math.ceil(totalProductsCount / pageSize);

  // 상품 정렬 기준 변경
  const handleChange = (value) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 상품 데이터 불러오기
  useEffect(() => {
    // 전체 상품 받아오기
    const handleLoad = async () => {
      try {
        const result = await getProducts({
          page: currentPage,
          pageSize: pageSize,
          orderBy: sortOrder,
        });
        const { list, totalCount } = result;
        setProducts(list);
        setTotalProductsCount(totalCount);
      } catch (error) {
        console.log(error);
      }
    };

    // 베스트 상품 받아오기
    const handleBestLoad = async () => {
      try {
        const bestResult = await getProducts({
          page: 1,
          pageSize: bestPageSize,
          keyword: "",
          orderBy: "favorite",
        });
        const { list } = bestResult;
        setBestProducts(list);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
    handleBestLoad();
  }, [sortOrder, currentPage, bestPageSize, pageSize]);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main className="market">
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
              <button className="add-item button desktop">
                <Link to={`/additem`}>상품 등록하기</Link>
              </button>
              <Select
                className="select"
                selectBox={selectBox}
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
        <div className="pagination-container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
}

export default ProductListPage;
