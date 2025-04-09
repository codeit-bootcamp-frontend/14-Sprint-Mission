import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

interface Article {
  totalCount: number;
  list: {
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
  }[];
}

interface Props {
  pageSize: number;
  page?: number;
  orderBy?: string;
  keyword?: string;
}

export default async function getArticles({ pageSize }: Props) {
  const query = `page=1&pageSize=${pageSize}&orderBy=like`;
  try {
    const response = await axios.get<Article>(`${Base_URL}/articles?${query}`);
    console.log("success");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error("게시글 불러오기 실패");
    }
  }
}
