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
  if (option === "latest") {
    // 서버로 사이즈 보내기
    const response = await getProduct(pageNum, pageSize);
    setAllProduct(response.list);
    const totalPages = Math.ceil(response.totalCount / pageSize);
    setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
  } else {
    const response = await getProduct(pageNum, pageSize, "favorite");
    setAllProduct(response.list);
    const totalPages = Math.ceil(response.totalCount / pageSize);
    setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
  }
};

// 검색하기 위해서 엔터를 눌렀을 때
export const searchSubmit = async ({
  value,
  pageNum,
  pageSize,
  option,
  setIsSearch,
  setSearchValue,
  setSearchProduct,
  setPaginationNum,
}) => {
  setIsSearch(true);
  setSearchValue(value);
  if (option === "latest") {
    if (window.innerWidth <= 767) {
      const pagesize = 4;
      const response = await getProduct(pageNum, pagesize, "recent", value);
      setSearchProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / pageSize);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    } else if (window.innerWidth <= 1199) {
      const pagesize = 6;
      const response = await getProduct(pageNum, pagesize, "recent", value);
      setSearchProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / pageSize);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      const response = await getProduct(pageNum, pageSize, "recent", value);
      setSearchProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / pageSize);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    }
  } else {
    if (window.innerWidth <= 767) {
      const pagesize = 4;
      const response = await getProduct(pageNum, pagesize, "favorite", value);
      setSearchProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / pageSize);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    } else if (window.innerWidth <= 1199) {
      const pagesize = 6;
      const response = await getProduct(pageNum, pagesize, "favorite", value);
      setSearchProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / pageSize);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      const response = await getProduct(pageNum, pageSize, "favorite", value);
      setSearchProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / pageSize);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    }
  }
};

 // 옵션 바뀌었을 때 동작하는 함수(정렬 바꾸기)
  export const handleOptionChange = async ({
    e,
    setOption,
    isSearch,
    searchProduct,
    setAllProduct,
    setSearchProduct,
    pageNum,
    pageSize,
  }) => {
    if (e.target.value === "latest" && !isSearch) {
      setOption(e.target.value);
      const response = await getProduct(pageNum, pageSize, "recent");
      setAllProduct(response.list);
    } else if (e.target.value === "sortByLike" && !isSearch) {
      setOption(e.target.value);
      const response = await getProduct(pageNum, pageSize, "favorite");
      setAllProduct(response.list);
    } else if (e.target.value === "latest" && isSearch) {
      setOption(e.target.value);
      const response = await getProduct(
        pageNum,
        pageSize,
        "recent",
        searchProduct
      );
      setSearchProduct(response.list);
    } else if (e.target.value === "sortByLike" && isSearch) {
      setOption(e.target.value);
      const response = await getProduct(
        pageNum,
        pageSize,
        "favorite",
        searchProduct
      );
      setSearchProduct(response.list);
    }
  };