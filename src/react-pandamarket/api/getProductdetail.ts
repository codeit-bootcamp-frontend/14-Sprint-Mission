import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

export interface Response {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
}

export interface ApiError {
  message: string;
}

export async function getProductDetail(
  productId = ""
): Promise<Response | undefined | ApiError> {
  try {
    const response = await axios.get<Response | ApiError | undefined>(
      `${Base_URL}/products/${productId}`
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error("데이터를 불러오는데 실패했습니다");
    }
    return undefined;
  }
}
