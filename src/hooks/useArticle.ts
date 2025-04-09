import getArticles from "@/services/getArticles";
import { useEffect, useState } from "react";

interface Articles {
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

const useArticle = () => {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    const fetchArticels = async () => {
      const res = await getArticles({ pageSize: 10, page, orderBy, keyword });
      setArticles(res?.list ?? []);
    };
    fetchArticels();
  }, [page, orderBy, keyword]);

  return {
    articles,
  };
};

export default useArticle;
