"use client";

import { DependencyList, useCallback, useEffect, useState } from "react";

interface ApiResponse<T> {
  status: number;
  result: T;
}

type RequestFunction<P, T> = (paraps: P) => Promise<ApiResponse<T>>;

interface UseFetchDataReturn<T> {
  data: T | null;
  fetchData: () => Promise<void>;
  isLoading: boolean;
  isError: boolean;
}

const useFetchData = <T, P = any>(
  request: RequestFunction<P, T>,
  params: P,
  dep: DependencyList = []
): UseFetchDataReturn<T> => {
  const [data, setData] = useState<T | null>(null);
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
