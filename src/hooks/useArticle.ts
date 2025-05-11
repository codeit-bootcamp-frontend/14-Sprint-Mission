import getArticles from "@/services/getArticles";
import { Articles } from "@/types/article";
import { useCallback, useEffect, useState } from "react";

interface Props {
  setArticleResults: React.Dispatch<React.SetStateAction<Articles[] | null>>;
  basis: string;
}

const useArticle = ({ setArticleResults, basis }: Props) => {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 30
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
      console.log(`page: ${page}`);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const fetchArticls = async () => {
      const orderBy = basis === "최신순" ? "recent" : "like";
      const res = await getArticles({ pageSize: 10, page, orderBy, keyword });
      setLoading(false);
      console.log(`page:${page}`);
      setArticleResults((prev) => {
        const newArticles = res?.list ?? [];
        if (page === 1) return newArticles;
        if (!prev) return newArticles;
        return [...prev, ...newArticles];
      });
    };
    fetchArticls();
  }, [basis, page, keyword]);

  return {
    keyword,
    setKeyword,
    loading,
    setPage,
  };
};

export default useArticle;
