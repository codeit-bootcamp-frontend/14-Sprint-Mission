import { useNavigate, useSearchParams } from "react-router-dom";
import { getProducts, PAGE_SIZE } from "../../../../apis/products";
import useAsync from "../../../../hooks/useAsync";
import ItemCard from "../ItemCard";
import ItemCardSkeleton from "../ItemCardSkeleton";
import OrderSelector from "./OrderSelector";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";

export default function SearchItems({ viewportSize = "desktop" }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);
  const order = searchParams.get("order") || "recent";
  const keyword = searchParams.get("keyword") || "";

  const { loading: searchLoading, value: searchResult } = useAsync(
    () => getProducts(currentPage, PAGE_SIZE.search[viewportSize], order, keyword),
    [currentPage, viewportSize, order, keyword]
  );
  const SELECT_OPTIONS = { recent: "최신순", favorite: "좋아요순" };

  const totalPage = searchResult?.totalCount
    ? Math.ceil((searchResult?.totalCount || 0) / PAGE_SIZE.search[viewportSize])
    : 5;

  function onSetSearchParams(values) {
    let params = {};
    for (const key in values) {
      if (values[key]) params[key] = values[key];
    }
    setSearchParams(() => params);
  }
  function handleKeywordChange(value = "") {
    setSearchParams(() => ({ keyword: value, order, page: 1 }));
  }
  function handleOrderChange(value = "recent") {
    setSearchParams(() => ({ keyword, order: value, page: 1 }));
  }
  function handlePageChange(value = 1) {
    setSearchParams(() => ({ keyword, order, page: value }));
  }
  return (
    <>
      <section id="search-items" className="display-grid justify-stretch gap-24">
        <div
          id="search-items-header"
          className="search-items-header display-grid justify-left gap-12"
        >
          <h2 className="text-xl text-bold">전체 상품</h2>
          <SearchInput keyword={keyword} onSearch={handleKeywordChange} />
          <button className="small-40 radius-8" onClick={() => navigate("/additem")}>
            상품 등록하기
          </button>
          <OrderSelector
            objOptions={SELECT_OPTIONS}
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
          <div id="search-items-result" className="display-grid justify-evenly align-upper gap-16">
            {searchResult?.list?.length > 0 ? (
              searchResult.list.map((item) => <ItemCard key={item.id} {...item} />)
            ) : (
              <h3 className="text-secondary-700">검색 결과가 없습니다.</h3>
            )}
          </div>
        )}
      </section>
      <Pagination current={currentPage} total={totalPage} onPageChange={handlePageChange} />
    </>
  );
}
