import getArticles from "@/services/getArticles";
import { useEffect, useState } from "react";

export interface Articles {
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

interface Props {
  setArticleResults: React.Dispatch<React.SetStateAction<Articles[] | null>>;
  basis: string;
}

const useArticle = ({ setArticleResults, basis }: Props) => {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  let orderBy;

  useEffect(() => {
    const fetchArticels = async () => {
      orderBy = basis === "최신순" ? "recent" : "like";
      const res = await getArticles({ pageSize: 10, page, orderBy, keyword });
      setArticleResults(res?.list ?? []);
    };
    fetchArticels();
  }, [basis, orderBy]);

  return {
    page,
    keyword,
    setKeyword,
  };
};

export default useArticle;
