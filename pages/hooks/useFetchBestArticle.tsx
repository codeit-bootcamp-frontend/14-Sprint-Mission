import { useState, useEffect } from "react";

import fetchArticles from "../api/fetchArticles";

const useFetchBestArticle = () => {
  const [bestArticle, setBestArticle] = useState<Articles | null>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const pageSize = width < 768 ? 1 : width < 1024 ? 2 : 3;
    fetchArticles({ pageSize, orderBy: "like" }).then(setBestArticle);
  }, []);

  /**
   * 요구사항이 모바일 태블릿 pc 사용자에 따라서 데이터를 fetch하면 되어서 굳이 화면이 변경될 때마다 fetch를 해서 데이터를 새로 받아오지 않게 하려고 했어요.
   * (모바일/태블릿/PC 등 디바이스별 대응은 첫 진입 시점에만 하면 충분하다고 판단.)
   *
   * 물론 크롬 개발자 도구에서 화면 너비를 바꿀 때마다 리렌더링이 일어나지 않아서 새로고침을 통해서 데이터를 다시 받아와야하지만
   * 성능적으로 이점이 있어서 이렇게 구현했어요. (API 호출 최소화)
   */

  return { bestArticle };
};

export default useFetchBestArticle;

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
