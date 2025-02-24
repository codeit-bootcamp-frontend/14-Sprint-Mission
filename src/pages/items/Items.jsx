import { useState } from "react";
import HeaderNav from "../../components/HeaderNav";
import ItemCard from "./components/ItemCard";
import "./items.scss";

export default function Items() {
  const [searchResult, setSearchResult] = useState([]);
  const [bestList, setBestList] = useState([
    {
      createdAt: "2025-02-21T07:35:52.677Z",
      favoriteCount: 0,
      ownerNickname: "string",
      ownerId: 1,
      tags: ["전자제품"],
      price: 0,
      description: "string",
      name: "상품 이름",
      id: 1,
    },
  ]);
  return (
    <>
      <title>판다마켓 - 상품 리스트</title>
      <HeaderNav />
      <main className="display-grid display-grid justify-center gap-40" id="items">
        <section id="best-items" className="display-grid justify-stretch gap-16">
          <h2 className="text-xl text-bold">베스트 상품</h2>
          <div className="display-flex justify-sides">
            {bestList.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section id="search-items" className="display-grid justify-stretch gap-24">
          <div className="display-flex justify-sides">
            <h2 className="text-xl text-bold">전체 상품</h2>
          </div>
          <div className="display-flex justify-sides">
            {searchResult.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
