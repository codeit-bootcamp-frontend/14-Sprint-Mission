import { useEffect, useState } from "react";
import { getProducts } from "../../apis/products";
import HeaderNav from "../../components/HeaderNav";
import useAsync from "../../hooks/useAsync";
import ItemCard from "./components/ItemCard";
import Pagination from "./components/Pagination";
import "./items.scss";

const PAGE_SIZE = {
  best: { desktop: 4, tablet: 2, mobile: 1 },
  search: { desktop: 10, tablet: 6, mobile: 4 },
};

export default function Items() {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewportSize, setViewportSize] = useState("desktop");
  const { value: bestListValue } = useAsync(
    () => getProducts(1, PAGE_SIZE.best[viewportSize], "favorite"),
    [viewportSize]
  );
  const { value: searchResult } = useAsync(
    () => getProducts(currentPage, PAGE_SIZE.search[viewportSize], "recent"),
    [currentPage, viewportSize]
  );

  useEffect(() => {
    const resizeHandler = () => {
      const size = window.innerWidth;
      const viewportType = size < 768 ? "mobile" : size < 1200 ? "tablet" : "desktop";
      setViewportSize(viewportType);
    };
    window.addEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      <title>판다마켓 - 상품 리스트</title>
      <HeaderNav />
      <main className="display-grid justify-left gap-40" id="items">
        <section id="best-items" className="display-grid justify-stretch gap-16">
          <h2 className="text-xl text-bold">베스트 상품</h2>
          <div className="display-grid justify-evenly align-upper direction-column gap-16">
            {bestListValue?.list?.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section id="search-items" className="display-grid justify-stretch gap-24">
          <div className="display-flex justify-sides">
            <h2 className="text-xl text-bold">전체 상품</h2>
          </div>
          <div className="display-grid justify-evenly align-upper gap-16">
            {searchResult?.list?.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
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
