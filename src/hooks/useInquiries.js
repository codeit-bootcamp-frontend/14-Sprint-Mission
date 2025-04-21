import { useEffect, useState, useCallback } from "react";

const useInquiries = (productId) => {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchInquiries = useCallback(async () => {
    const res = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?cursor=0&limit=10`
    );
    if (!res.ok) {
      throw new Error(`요청 실패: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    setInquiries(data.list ?? []);
    setIsLoading(false);
  }, [productId]);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  return { inquiries, isLoading, refetch: fetchInquiries };
};

export default useInquiries;
