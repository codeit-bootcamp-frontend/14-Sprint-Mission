import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProducts } from "../api/api";
import Product from "../components/Product";
import "./ProductListPage.css";
import Select from "../components/Select";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import useWindowWidth from "../components/hooks/useWindowWidth";

const selectBox = [
  { label: "최신순", value: "recent" },
  { label: "좋아요순", value: "favorite" },
];

function ProductListPage() {
  const [bestProducts, setBestProducts] = useState([]);
  const [displayedBestProducts, setDisplayedBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pageBestSize, setPageBestSize] = useState(4);
  const [sortOrder, setSortOrder] = useState("recent");
  const [keyword, setkeyword] = useState("");
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowWidth();
  const totalPages = Math.ceil(totalProductsCount / pageSize);

  // 상품 정렬 기준 변경
  const handleChange = (value) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  // 창 크기에 따라 표시되는 상품 개수 변경
  const updateDisplayedProducts = useCallback(
    (width) => {
      if (width >= 1024) {
        setDisplayedProducts(products.slice(0, 10));
        setPageSize(10);
      } else if (width >= 640) {
        setDisplayedProducts(products.slice(0, 6));
        setPageSize(6);
      } else {
        setDisplayedProducts(products.slice(0, 4));
        setPageSize(4);
      }
    },
    [products]
  );

  // 창 크기에 따라 표시되는 베스트 상품 개수 변경
  const updateDisplayedBestProducts = useCallback(
    (width) => {
      if (width >= 1024) {
        setDisplayedBestProducts(bestProducts.slice(0, 4));
      } else if (width >= 640) {
        setDisplayedBestProducts(bestProducts.slice(0, 2));
      } else {
        setDisplayedBestProducts(bestProducts.slice(0, 1));
      }
    },
    [bestProducts]
  );

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
          pageSize: pageBestSize,
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
  }, [sortOrder, currentPage, pageBestSize, pageSize]);

  useEffect(() => {
    updateDisplayedProducts(windowWidth);
    updateDisplayedBestProducts(windowWidth);
  }, [windowWidth, updateDisplayedProducts, updateDisplayedBestProducts]);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main className="market">
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
            {displayedProducts?.map((product) => (
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
