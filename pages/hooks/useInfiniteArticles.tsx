import { useState, useEffect } from "react";

import useFetchArticles from "./useFetchArticles";

const useInfiniteArticles = ({
  sortOption,
  keyword,
  pageSize = 10,
}: {
  sortOption: "recent" | "like";
  keyword: string;
  pageSize?: number;
}) => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  const { articles: fetched } = useFetchArticles({
    sortOption,
    keyword,
    pageSize,
    page,
  });

  useEffect(() => {
    if (!fetched) return;

    if (fetched.list.length < pageSize) setHasMore(false);
    setArticles((prev) => {
      const existingIds = new Set(prev.map((a) => a.id));
      const newArticles = fetched.list.filter((a) => !existingIds.has(a.id));
      return [...prev, ...newArticles];
    });
  }, [fetched, pageSize]);

  useEffect(() => {
    setPage(1);
    setArticles([]);
    setHasMore(true);
  }, [sortOption, keyword]);

  useEffect(() => {
    console.log("✅ page:", page);
  }, [page]);

  useEffect(() => {
    console.log("📦 fetched list:", fetched?.list);
  }, [fetched]);

  return { articles, setPage, hasMore };
};

export default useInfiniteArticles;

type Article = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
};

type Articles = {
  list: Article[];
};
