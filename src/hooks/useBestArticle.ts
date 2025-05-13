import getArticles from "@/services/getArticles";
import { Articles } from "@/types/article";
import { useEffect, useState } from "react";

const useBestArticle = () => {
  const [bestArticles, setArticles] = useState<Articles[]>([]);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const getPageSize = () => {
      if (windowSize < 768) return 1; // 모바일
      else if (windowSize < 1199) return 2; // 태블릿
      else return 3;
    };

    const fetchBestArticles = async () => {
      const pageSize = getPageSize();
      console.log(pageSize);
      const res = await getArticles({ pageSize, orderBy:'like' });
      console.log(res?.list);
      setArticles(res?.list ?? []);
    };

    fetchBestArticles();
  }, [windowSize]);
  return {
    bestArticles,
  };
};

export default useBestArticle;
