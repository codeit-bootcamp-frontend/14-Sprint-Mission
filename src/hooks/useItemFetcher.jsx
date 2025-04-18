import { useEffect, useState } from "react";

function useItemFetcher(fetchFunction, params = {}) {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFunction(params);
      setItems(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [JSON.stringify(params)]);

  return {
    items,
    isLoading,
    error,
  };
}

export default useItemFetcher;
