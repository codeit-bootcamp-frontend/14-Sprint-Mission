import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useResponsiveCount from "../../hooks/useResponsiveCount";
import useProducts from "../../hooks/\buseProducts";

const useAllProductsController = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const searchKeyword = searchParams.get("keyword") || "";
  const sort = searchParams.get("sort") || "recent";
  const sortOption = sort === "favorite" ? "좋아요순" : "최신순";
  const orderBy = sortOption === "좋아요순" ? "favorite" : "recent";

  const pageSize = useResponsiveCount({ pc: 10, tablet: 6, mobile: 4 });

  const {
    products = [],
    totalCount = 0,
    isLoading,
  } = useProducts({
    orderBy,
    keyword: searchKeyword,
    page: currentPage,
    pageSize,
  });

  const visibleCount = useResponsiveCount({
    pc: 10,
    tablet: 6,
    mobile: 4,
  });

  const handlePageClick = (pageNum) => {
    setSearchParams((prev) => {
      return {
        ...Object.fromEntries(prev),
        page: pageNum,
      };
    });
  };

  const setSortOption = (newSortOption) => {
    const newSort = newSortOption === "좋아요순" ? "favorite" : "recent";
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      sort: newSort,
      page: 1,
    }));
  };

  const setSearchKeyword = (newKeyword) => {
    setSearchKeyword((prev) => ({
      ...Object.fromEntries(prev),
      keyword: newKeyword,
      page: 1,
    }));
  };

  useEffect(() => {
    const maxPage = Math.ceil(totalCount / pageSize);
    if (currentPage > maxPage && maxPage > 0) {
      setSearchParams({ page: 1 });
    }
  }, [totalCount, pageSize, currentPage, setSearchParams]); // 모바일에서 페이지 수는 67개인데 67번째 페이지에서 크기를 늘리면 (태블릿:45, 피씨:27 페이지까지 밖에 없음) 페이지번호가 렌더링되지 않는 불편함 개선을 위해 추가한 로직

  return {
    sortOption,
    setSortOption,
    searchKeyword,
    setSearchKeyword,
    products,
    isLoading,
    visibleCount,
    currentPage,
    handlePageClick,
    totalCount,
    pageSize,
  };
};

export default useAllProductsController;
