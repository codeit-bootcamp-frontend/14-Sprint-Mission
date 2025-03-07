import { getProduct } from "../api/api";

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
