import { useEffect, useState } from "react";
import BestProductSection from "../components/BestProductSection";
import AllProductSection from "../components/AllProductSection";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import DropdownSelect from "../components/DropdownSelect";
import "./ItemPage.css";

function ItemPage() {
  const [products, setProducts] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("recent"); // ✅ "recent" 또는 "favorite"
  const [page, setPage] = useState(1);

  const pageSize = 10;
  const bestCount = 4;
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  // 상품 목록 불러오기
  useEffect(() => {
    const query = new URLSearchParams();
    query.append("page", page.toString());
    query.append("pageSize", pageSize.toString());
    if (orderBy) query.append("orderBy", orderBy); // ✅ "recent" or "favorite"
    if (search.trim()) query.append("keyword", search.trim()); // ✅ keyword로 변경

    fetch(`${baseUrl}/products?${query.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data.list || []);
        setTotalCount(data.totalCount || 0);
      })
      .catch((err) => console.error("상품 목록 불러오기 실패", err));
  }, [baseUrl, page, orderBy, search]);

  // 좋아요 상품 ID 목록 불러오기
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${baseUrl}/users/me/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const ids = data.list.map((item) => item.id);
        setFavoriteIds(ids);
      })
      .catch((err) => console.error("좋아요 목록 불러오기 실패", err));
  }, [baseUrl]);

  // 베스트 상품 (현재 페이지 내 좋아요 많은 순)
  const bestProducts = [...products]
    .sort((a, b) => (b.favoriteCount || 0) - (a.favoriteCount || 0))
    .slice(0, bestCount);

  return (
    <main className="item-page">
      <BestProductSection products={bestProducts} favoriteIds={favoriteIds} />

      <div className="all-product-header">
        <h2 className="product-title">전체 상품</h2>

        <div className="control-group">
          <SearchInput search={search} setSearch={setSearch} />
          <button
            className="create-button"
            onClick={() => (window.location.href = "/additem")}
          >
            상품 등록하기
          </button>
          <DropdownSelect orderBy={orderBy} setOrderBy={setOrderBy} />
        </div>
      </div>

      <AllProductSection products={products} favoriteIds={favoriteIds} />

      <div className="pagination-wrapper">
        <Pagination
          currentPage={page}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={setPage}
        />
      </div>
    </main>
  );
}

export default ItemPage;
