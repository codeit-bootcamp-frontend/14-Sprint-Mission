import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import BestProductSection from "../components/BestProductSection/BestProductSection";
import AllProductSection from "../components/AllProductSection/AllProductSection";
import Pagination from "../components/Pagination/Pagination";
import SearchInput from "../components/SearchInput/SearchInput";
import DropdownSelect from "../components/DropdownSelect/DropdownSelect";

import "./ItemPage.css";

function ItemPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const pageSize = 10;
  const bestCount = 4;

  const keywordParam = searchParams.get("keyword") || "";
  const orderBy = searchParams.get("orderBy") || "recent";
  const page = Number(searchParams.get("page") || 1);

  const [search, setSearch] = useState(keywordParam);
  const [products, setProducts] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // 상품 목록 불러오기
  useEffect(() => {
    const query = new URLSearchParams();
    query.append("page", page);
    query.append("pageSize", pageSize);
    query.append("orderBy", orderBy);
    if (keywordParam.trim()) query.append("keyword", keywordParam.trim());

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
  }, [baseUrl, page, orderBy, keywordParam]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${baseUrl}/users/me/favorites`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const ids = data.list.map((item) => item.id);
        setFavoriteIds(ids);
      })
      .catch((err) => console.error("좋아요 목록 불러오기 실패", err));
  }, [baseUrl]);

  const bestProducts = [...products]
    .sort((a, b) => (b.favoriteCount || 0) - (a.favoriteCount || 0))
    .slice(0, bestCount);

  // 상태 변경 핸들러
  const handleSearchSubmit = (value) => {
    setSearchParams({ page: 1, keyword: value, orderBy });
  };

  const handleOrderChange = (value) => {
    setSearchParams({ page: 1, keyword: keywordParam, orderBy: value });
  };

  const handlePageChange = (value) => {
    setSearchParams({ page: value, keyword: keywordParam, orderBy });
  };

  return (
    <main className="item-page">
      <BestProductSection products={bestProducts} favoriteIds={favoriteIds} />

      <div className="all-product-header">
        <h2 className="product-title">전체 상품</h2>

        <div className="control-group">
          <SearchInput
            search={search}
            setSearch={setSearch}
            onSearch={handleSearchSubmit}
          />
          <button
            className="create-button"
            onClick={() => navigate("/additem")}
          >
            상품 등록하기
          </button>
          <DropdownSelect
            options={[
              { value: "recent", label: "최신순" },
              { value: "favorite", label: "좋아요순" },
            ]}
            value={orderBy}
            onChange={handleOrderChange}
          />
        </div>
      </div>

      <AllProductSection products={products} favoriteIds={favoriteIds} />

      <div className="pagination-wrapper">
        <Pagination
          currentPage={page}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}

export default ItemPage;
