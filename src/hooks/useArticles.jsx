import axios from "axios";
import { useEffect, useState } from "react";

function useArticles(page = 1, pageSize = 10, order = "recent", keyword = "") {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`
        );
        setArticles(response.data.list);
        setCount(response.data.totalCount);
      } catch (error) {
        console.error("API failed", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [page, keyword, order, pageSize]);

  return { articles, isLoading, count };
}

export default useArticles;
