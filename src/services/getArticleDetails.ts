import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

interface Article {
    id: number;
    title: string;
    content: string;
    image: string;
    likeCount: number;
    createdAt: string;
    updatedAt: string;
    writer: {
      nickname: string;
      id: number;
    };
}

export default async function getArticleDetails(id: string) {
  try {
    const response = await axios.get<Article>(`${Base_URL}/articles/${id}`);
    console.log("success");
    console.log(response);
    return response.data ?? null;
  } catch (error: any) {
    if (error.response) {
      throw new Error("게시글 불러오기 실패");
    }
  }
}
