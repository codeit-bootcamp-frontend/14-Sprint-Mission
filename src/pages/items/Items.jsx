import HeaderNav from "../../components/HeaderNav";
import useViewPortSize from "../../hooks/useViewportSize";
import BestItems from "./components/best/BestItems";
import SearchItems from "./components/search/SearchItems";
import "./items.scss";

export default function Items() {
  const { viewportSize } = useViewPortSize();

  return (
    <>
      <title>판다마켓 - 상품 리스트</title>
      <HeaderNav />
      <main className="display-grid justify-stretch gap-40" id="items">
        <BestItems {...{ viewportSize }} />
        <SearchItems {...{ viewportSize }} />
      </main>
    </>
  );
}
