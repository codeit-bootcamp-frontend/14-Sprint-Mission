import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

export interface Comment {
  productId: number;
  limit: number;
  cursor: number;
}

export interface CommentResponse {
  nextCursor?: number;
  list: {
    writer: {
      image: string;
      nickname: string;
      id: number;
    };
    updatedAt: string;
    createdAt: string;
    content: string;
    id: number;
  }[];
}

export interface CommentError {
  message: string;
}

export async function getComment({
  productId,
  limit = 10,
  cursor,
}: Comment): Promise<CommentResponse | undefined | CommentError> {
  console.log(productId);
  const query = `limit=${limit}&cursor=${cursor}`;
  try {
    const response = await axios.get<
      CommentResponse | undefined | CommentError
    >(`${Base_URL}/products/${productId}/comments?${query}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.log(error.message);
      throw new Error("데이터를 불러오는데 실패했습니다");
    }
    return undefined;
  }
}
