import Pagination from "./Pagination";
import AllProductHeader from "./AllProductHeader";
import ProductList from "./ProductList";
import useAllProductsController from "./useAllProductsController";

const AllProcuts = () => {
  const {
    sortOption,
    setSortOption,
    searchKeyword,
    setSearchKeyword,
    products,
    isLoading,
    visibleCount,
    currentPage,
    handlePageClick,
  } = useAllProductsController();

  return (
    <div className="px-[16px] mt-[24px] tablet:mt-[40px]">
      <div className="w-[343px] mx-auto tablet:mx-auto tablet:w-[696px] pc:w-[1200px]">
        <AllProductHeader
          sortOption={sortOption}
          setSortOption={setSortOption}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </div>
      <div className="mt-4 mb-[40px] flex flex-wrap gap-[8px] mx-auto w-[344px] tablet:gap-[16px] pc:gap-[24px] tablet:w-[695px] pc:w-[1201px]">
        {isLoading ? (
          <p>로딩 중...</p>
        ) : (
          <ProductList products={products.slice(0, visibleCount)} />
        )}
      </div>
      {searchKeyword ? null : (
        <Pagination currentPage={currentPage} onPageClick={handlePageClick} />
      )}
    </div>
  );
};

export default AllProcuts;
