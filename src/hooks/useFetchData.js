import { useCallback, useEffect, useState } from "react";

const useFetchData = (request, params, dep = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { status, result } = await request(params);

      if (status === 200) {
        setData(result);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [params, request]);

  useEffect(() => {
    fetchData();
  }, [...dep]);

  return { data, fetchData, isLoading, isError };
};

export default useFetchData;
