import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

export async function getProductDetail(productId = "") {
  try {
    const response = await axios.get(`${Base_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error("데이터를 불러오는데 실패했습니다");
    }
  }
}
