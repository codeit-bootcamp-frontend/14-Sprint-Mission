import { getProducts } from "../../apis/products";
import HeaderNav from "../../components/HeaderNav";
import useAsync from "../../hooks/useAsync";
import ItemCard from "./components/ItemCard";
import "./items.scss";

export default function Items() {
  const INITIAL_VALUE = { list: [], totalCount: 0 };
  const pageSize = 4;
  const {
    loading,
    error,
    value: bestListValue,
  } = useAsync(() => getProducts(1, pageSize, "favorite"), [pageSize]);
  const {
    loading2,
    error2,
    value: searchResult,
  } = useAsync(() => getProducts(1, 10, "recent"), []);

  return (
    <>
      <title>판다마켓 - 상품 리스트</title>
      <HeaderNav />
      <main className="display-grid justify-left gap-40" id="items">
        <section id="best-items" className="display-grid justify-stretch gap-16">
          <h2 className="text-xl text-bold">베스트 상품</h2>
          <div className="display-grid justify-evenly direction-column gap-16">
            {bestListValue?.list?.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section id="search-items" className="display-grid justify-stretch gap-24">
          <div className="display-flex justify-sides">
            <h2 className="text-xl text-bold">전체 상품</h2>
          </div>
          <div className="display-grid justify-evenly gap-16">
            {searchResult?.list?.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
