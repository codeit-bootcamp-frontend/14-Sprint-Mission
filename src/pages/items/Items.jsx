import { useState } from "react";
import HeaderNav from "../../components/HeaderNav";
import ItemCard from "./components/ItemCard";

export default function Items() {
  const [searchResult, setSearchResult] = useState([]);
  const [bestList, setBestList] = useState([
    {
      createdAt: "2025-02-21T07:35:52.677Z",
      favoriteCount: 0,
      ownerNickname: "string",
      ownerId: 1,
      images: ["https://example.com/..."],
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
      <main className="grid gap-40">
        <section id="best-items" className="grid gap-16">
          <h2 className="text-xl text-bold">베스트 상품</h2>
          <div className="flex-sides">
            {bestList.map((item) => (
              <ItemCard {...item} />
            ))}
          </div>
        </section>
        <section id="search-items" className="grid gap-24">
          <div className="flex-sides">
            <h2 className="text-xl text-bold">전체 상품</h2>
          </div>
          <div className="flex-sides">
            {searchResult.map((item) => (
              <ItemCard {...item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
