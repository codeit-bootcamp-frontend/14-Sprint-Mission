import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

export async function getProduct(offset = 0, limit = 10) {
  const query = `offset=${offset}&limit=${limit}`;
  try {
    const response = await axios.get(`${Base_URL}/products?${query}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error("데이터를 불러오는데 실패했습니다");
    }
  }
}
