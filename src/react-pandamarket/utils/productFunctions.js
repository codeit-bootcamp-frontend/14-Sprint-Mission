import { getProduct } from "../api/api";

// 좋아 순으로 상품 받아오기
export const getBestProduct = async (slice, setbestProduct) => {
  const response = await getProduct(1, slice, "favorite");
  setbestProduct(response.list);
};

// 모든 상품 받아오기
export const getAllProduct = async ({
  pageSize,
  setAllProduct,
  option,
  setPaginationNum,
  pageNum,
}) => {
  const response = await getProduct(pageNum, pageSize, option);
  setAllProduct(response.list);
  const totalPages = Math.ceil(response.totalCount / pageSize);
  setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
};

// 검색하기 위해서 엔터를 눌렀을 때
export const searchSubmit = async ({
  value,
  pageNum,
  allPlaceHolderCount,
  option,
  setIsSearch,
  setSearchValue,
  setSearchProduct,
  setPaginationNum,
}) => {
  setIsSearch(true);
  setSearchValue(value);
  const response = await getProduct(
    pageNum,
    allPlaceHolderCount,
    option,
    value
  );
  setSearchProduct(response.list);
  const totalPages = Math.ceil(response.totalCount / allPlaceHolderCount);
  setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
};

// 옵션 바뀌었을 때 동작하는 함수(정렬 바꾸기)
export const handleOptionChange = async ({
  e,
  option,
  setOption,
  searchProduct,
  setAllProduct,
  pageNum,
  pageSize,
}) => {
  setOption(e.target.value);
  const response = await getProduct(pageNum, pageSize, option, searchProduct);
  setAllProduct(response.list);
};
