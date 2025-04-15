import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

interface Comment {
  nextCursor: number;
  list: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    writer: {
      image: string;
      nickname: string;
      id: number;
    };
  }[];
}

interface Props {
  id: string;
  limit: number;
  cursor?: number | null;
}

export default async function getComment({ id, limit, cursor }: Props) {
  try {
    let query;
    if (cursor) {
      query = `limit=${limit}&cursor=${cursor}`;
    } else {
       query = `limit=${limit}`;
    }

    const response = await axios.get<Comment>(
      `${Base_URL}/articles/${id}/comments?${query}`
    );
    console.log("comment connection successful!");
    console.log(response);
    return response.data ?? null;
  } catch (error: any) {
    if (error.response) {
      throw new Error("게시글 불러오기 실패");
    }
  }
}
