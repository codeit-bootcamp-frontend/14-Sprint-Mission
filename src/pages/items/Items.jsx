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

const PAGE_SIZE = {
  best: { desktop: 4, tablet: 2, mobile: 1 },
  search: { desktop: 10, tablet: 6, mobile: 4 },
};

export default function Items() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [viewportSize, setViewportSize] = useState("desktop");
  const [order, setOrder] = useState("recent");

  const { loading: bestLoading, value: bestListValue } = useAsync(
    () => getProducts(1, PAGE_SIZE.best[viewportSize], "favorite"),
    [viewportSize]
  );
  const { loading: searchLoading, value: searchResult } = useAsync(
    () => getProducts(currentPage, PAGE_SIZE.search[viewportSize], order),
    [currentPage, viewportSize, order]
  );

  useEffect(() => {
    const resizeHandler = () => {
      const size = window.innerWidth;
      const viewportType = size < 768 ? "mobile" : size < 1200 ? "tablet" : "desktop";
      setViewportSize(viewportType);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("mousedown", resizeHandler);
  }, []);

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
          <div className="display-flex justify-sides">
            <h2 className="text-xl text-bold">전체 상품</h2>
            <div className="display-flex justify-right gap-12">
              <p>검색창</p>
              <button className="small-40 radius-8" onClick={() => navigate("/additem")}>
                상품 등록하기
              </button>
              <OrderSelector {...{ order, setOrder }} />
            </div>
          </div>
          {searchLoading ? (
            <div className="display-grid justify-evenly align-upper direction-column gap-16">
              {new Array(PAGE_SIZE.search[viewportSize]).fill().map((_, idx) => (
                <ItemCardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            <div className="display-grid justify-evenly align-upper gap-16">
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
