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
} from "../pages/ItemsPage.styled";

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
      <AllItemsHeader>
        <TitleRow>
          <AllItemsTitle>전체 상품</AllItemsTitle>
          <MobileAddButton to="/additem">상품 등록하기</MobileAddButton>
        </TitleRow>
        <HeaderControls>
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
            isMobile={windowWidth <= 767}
            isOpen={mobileSortOpen}
            setIsOpen={setMobileSortOpen}
          />
        </HeaderControls>
      </AllItemsHeader>

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
