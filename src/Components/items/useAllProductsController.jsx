import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useResponsiveCount from "../../hooks/useResponsiveCount";
import useProducts from "../../hooks/\buseProducts";

const useAllProductsController = () => {
  const [sortOption, setSortOption] = useState("최신순");
  const [searchKeyword, setSearchKeyword] = useState("");
  const orderBy = sortOption === "좋아요순" ? "favorite" : "recent";
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { products = [], isLoading } = useProducts({
    orderBy,
    keyword: searchKeyword,
    page: currentPage,
    pageSize: 10,
  });

  const visibleCount = useResponsiveCount({
    pc: 10,
    tablet: 6,
    mobile: 4,
  });

  const handlePageClick = (pageNum) => {
    setSearchParams({ page: pageNum });
  };

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
  };
};

export default useAllProductsController;
