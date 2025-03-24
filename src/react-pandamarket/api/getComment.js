import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

export async function getComment(productId, limit = 10, cursor) {
  console.log(productId);
  const query = `limit=${limit}&cursor=${cursor}`;
  try {
    const response = await axios.get(
      `${Base_URL}/products/${productId}/comments?${query}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.message);
      throw new Error("데이터를 불러오는데 실패했습니다");
    }
  }
}
