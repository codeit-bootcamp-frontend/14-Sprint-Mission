import { Link } from "react-router-dom";
import SortDropdown from "./SortDropdown";
import ProductSearchBar from "./ProductSearchBar";

const AllProductHeader = ({
  sortOption,
  setSortOption,
  searchKeyword,
  setSearchKeyword,
}) => {
  return (
    <>
      {/* ✅ 모바일: 제목 + 등록버튼 (tablet 이상에서는 hidden) */}
      <div className="flex justify-between items-center w-full tablet:hidden">
        <h2 className="text-xl font-bold">전체 상품</h2>
        <Link to={"/"}>
          <div className="flex justify-center items-center bg-blue-500 text-white rounded-[8px] w-[133px] h-[42px]">
            상품 등록하기
          </div>
        </Link>
      </div>
      {/* ✅ 모바일: 검색창 + 정렬 드롭다운 버튼 */}
      <div className="flex items-center gap-2 mt-3 tablet:hidden">
        <ProductSearchBar
          className="flex-1"
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        <div className="w-[42px] h-[42px] border border-gray-300 rounded-[12px] flex items-center justify-center">
          <SortDropdown
            selected={sortOption}
            setSelected={setSortOption}
            isMobile={true}
          />
        </div>
      </div>
      {/* ✅ 태블릿 이상: 제목 + 정렬 드롭다운 + 상품 등록 버튼 */}
      <div className="hidden tablet:flex tablet:items-center tablet:gap-4 w-full justify-between">
        <h2 className="text-xl font-bold">전체 상품</h2>
        <div className="flex items-center gap-4 pc:relative">
          <ProductSearchBar
            className="w-[242px]"
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
          <SortDropdown selected={sortOption} setSelected={setSortOption} />
          <Link to={"/additem"}>
            <div className="flex justify-center items-center bg-blue-500 text-white rounded-[8px] w-[133px] h-[42px]">
              상품 등록하기
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllProductHeader;
