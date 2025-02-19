import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

export async function getProduct(page = 1, pageSize = 10, keyword = '') {
  const query = `page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  try {
    const response = await axios.get(`${Base_URL}/products?${query}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error("데이터를 불러오는데 실패했습니다");
    }
  }
}
