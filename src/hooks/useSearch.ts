import getArticles from "@/services/getArticles";
import { useState } from "react";

type Props = {
  basis: string;
  keyword: string;
  page: number;
  setArticleResults: React.Dispatch<React.SetStateAction<Articles[] | null>>;
};

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

const useSearch = ({ basis, keyword, page, setArticleResults }: Props) => {

  const handleBasis = () => {
    if (basis === "최신순") {
      return "recent";
    } else {
      return "like";
    }
  };
  const orderBy = handleBasis();

  const fetchSearch = async () => {
    const res = await getArticles({page, pageSize: 10, orderBy, keyword });
    setArticleResults(res?.list ?? []);
  };
  fetchSearch();

};

export default useSearch;
