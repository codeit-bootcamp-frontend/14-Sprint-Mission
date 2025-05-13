import getArticleDetails from "@/services/getArticleDetails";
import { Articles } from "@/types/article";
import React, { useEffect, useState } from "react";

const useArticleDetails = (id: string) => {
  const [articleDetails, setArticleDetails] = useState<Articles | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await getArticleDetails(id);
        setArticleDetails(res ?? null);
      } catch (error: any) {
        if (error.response) {
          throw new Error("게시글 상세정보 불러오기 실패");
        }
      }
    };

    fetchDetail();
  }, []);

  return {
    articleDetails,
  };
};

export default useArticleDetails;
