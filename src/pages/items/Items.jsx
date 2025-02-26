import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../apis/products";
import HeaderNav from "../../components/HeaderNav";
import useAsync from "../../hooks/useAsync";
import ItemCard from "./components/ItemCard";
import ItemCardSkeleton from "./components/ItemCardSkeleton";
import OrderSelector from "./components/OrderSelector";
import Pagination from "./components/Pagination";
import "./items.scss";
import SearchInput from "./components/SearchInput";

const PAGE_SIZE = {
  best: { desktop: 4, tablet: 2, mobile: 1 },
  search: { desktop: 10, tablet: 6, mobile: 4 },
};

export default function Items() {
  const navigate = useNavigate();
  const getViewportType = (size) => (size < 768 ? "mobile" : size < 1200 ? "tablet" : "desktop");

  const [currentPage, setCurrentPage] = useState(1);
  const [viewportSize, setViewportSize] = useState(getViewportType(window.innerWidth));
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState();

  const { loading: bestLoading, value: bestListValue } = useAsync(
    () => getProducts(1, PAGE_SIZE.best[viewportSize], "favorite"),
    [viewportSize]
  );
  const { loading: searchLoading, value: searchResult } = useAsync(
    () => getProducts(currentPage, PAGE_SIZE.search[viewportSize], order, keyword),
    [currentPage, viewportSize, order, keyword]
  );

  useEffect(() => {
    const handleResize = () => setViewportSize(getViewportType(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleOrderChange(value) {
    setOrder(value);
    setCurrentPage(1);
  }

  return (
    <>
      <title>판다마켓 - 상품 리스트</title>
      <HeaderNav />
      <main className="display-grid justify-stretch gap-40" id="items">
        <section id="best-items" className="display-grid justify-stretch gap-16">
          <h2 className="text-xl text-bold">베스트 상품</h2>
          {bestLoading ? (
            <div className="display-grid justify-evenly align-upper direction-column gap-16">
              {new Array(PAGE_SIZE.best[viewportSize]).fill().map((_, idx) => (
                <ItemCardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            <div className="display-grid justify-evenly align-upper direction-column gap-16">
              {bestListValue?.list?.map((item) => (
                <ItemCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </section>
        <section id="search-items" className="display-grid justify-stretch gap-24">
          <div
            id="search-items-header"
            className="search-items-header display-grid justify-left gap-12"
          >
            <h2 className="text-xl text-bold">전체 상품</h2>
            <SearchInput keyword={keyword} onSearch={setKeyword} />
            <button className="small-40 radius-8" onClick={() => navigate("/additem")}>
              상품 등록하기
            </button>
            <OrderSelector
              order={order}
              setOrder={handleOrderChange}
              isMobile={viewportSize === "mobile"}
            />
          </div>
          {searchLoading ? (
            <div
              id="search-items-result"
              className="display-grid justify-evenly align-upper direction-column gap-16"
            >
              {new Array(PAGE_SIZE.search[viewportSize]).fill().map((_, idx) => (
                <ItemCardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            <div
              id="search-items-result"
              className="display-grid justify-evenly align-upper gap-16"
            >
              {searchResult?.list?.map((item) => (
                <ItemCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </section>
        <Pagination
          current={currentPage}
          total={Math.ceil((searchResult?.totalCount || 0) / PAGE_SIZE.search[viewportSize])}
          onPageChange={setCurrentPage}
        />
      </main>
    </>
  );
}
