import React from "react";
import ItemCard from "./ItemCard";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import Dropdown from "./ui/Dropdown";
import {
  SectionContainer,
  AllItemsHeader,
  TitleRow,
  AllItemsTitle,
  HeaderControls,
  AddItemButton,
  MobileAddButton,
  DesktopAddButton,
  AllItemsGrid,
  MessageParagraph,
  MobileSortContainer,
  MobileSortButton,
  MobileSortMenu,
  MobileSortMenuItem,
} from "../pages/ProductsPage.styled";

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
    <SectionContainer>
      {/* 데스크톱 & 태블릿 모드 (768px 이상) */}
      {windowWidth > 767 ? (
        <AllItemsHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AllItemsTitle>전체 상품</AllItemsTitle>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <SearchForm
              value={inputValue}
              onChange={handleSearchInputChange}
              onSubmit={handleSearchSubmit}
            />
            <DesktopAddButton to="/additem">상품 등록하기</DesktopAddButton>
            <Dropdown
              options={sortOptions}
              selectedValue={orderBy}
              onChange={handleSortChange}
              isMobile={false}
              isOpen={mobileSortOpen}
              setIsOpen={setMobileSortOpen}
            />
          </div>
        </AllItemsHeader>
      ) : (
        /* 모바일 모드 (767px 이하) */
        <AllItemsHeader>
          {/* 첫 번째 줄: 전체 상품 텍스트와 상품 등록하기 버튼 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AllItemsTitle>전체 상품</AllItemsTitle>
            <MobileAddButton to="/additem">상품 등록하기</MobileAddButton>
          </div>

          {/* 두 번째 줄: 검색창과 정렬 드롭다운 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              justifyContent: windowWidth <= 767 ? "flex-end" : undefined,
            }}
          >
            <SearchForm
              value={inputValue}
              onChange={handleSearchInputChange}
              onSubmit={handleSearchSubmit}
              style={{ flex: 1 }}
            />
            <Dropdown
              options={sortOptions}
              selectedValue={orderBy}
              onChange={handleSortChange}
              isMobile={true}
              isOpen={mobileSortOpen}
              setIsOpen={setMobileSortOpen}
            />
          </div>
        </AllItemsHeader>
      )}

      {loading ? (
        <MessageParagraph>상품 로딩 중...</MessageParagraph>
      ) : (
        <>
          <AllItemsGrid>
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </AllItemsGrid>

          {/* 페이지네이션 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </SectionContainer>
  );
}

export default AllItemsSection;
