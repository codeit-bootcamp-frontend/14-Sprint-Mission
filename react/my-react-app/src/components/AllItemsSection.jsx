import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import SearchForm from "./SearchForm";
import Button from "./ui/Button";
import Pagination from "./Pagination";
import Dropdown from "./ui/Dropdown";

function AllItemsSection({
  items,
  loading,
  inputValue,
  handleSearchInputChange,
  handleSearchSubmit,
  orderBy,
  handleSortChange,
  windowWidth,
  currentPage,
  totalPages,
  handlePageChange,
  mobileSortOpen,
  setMobileSortOpen,
}) {
  // 정렬 옵션 정의
  const sortOptions = [
    { value: "recent", label: "최신순" },
    { value: "favorite", label: "인기순" },
  ];

  return (
    <section className="all-items-section">
      <div className="all-items-header">
        <div className="header-row1">
          <h2>전체 상품</h2>
          {windowWidth <= 767 && (
            <Link to="/additem" className="button add-item-button">
              상품 등록하기
            </Link>
          )}
        </div>
        <div className="header-row2">
          <SearchForm
            value={inputValue}
            onChange={handleSearchInputChange}
            onSubmit={handleSearchSubmit}
          />
          {windowWidth > 767 && (
            <Link to="/additem" className="button add-item-button">
              상품 등록하기
            </Link>
          )}

          {/* 드롭다운 메뉴 - 모든 화면 크기에서 커스텀 드롭다운 적용 */}
          <Dropdown
            options={sortOptions}
            selectedValue={orderBy}
            onChange={handleSortChange}
            isMobile={windowWidth <= 767}
            isOpen={mobileSortOpen}
            setIsOpen={setMobileSortOpen}
          />
        </div>
      </div>

      {loading ? (
        <p>상품 로딩 중...</p>
      ) : (
        <>
          <div className="items-grid all-items-grid">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* 페이지네이션 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </section>
  );
}

export default AllItemsSection;
