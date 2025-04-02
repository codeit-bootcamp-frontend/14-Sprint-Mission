import { useState, useEffect } from "react";
import { getItem } from "../api/api";

function useItems(orderBy, page, pageSize) {
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const { list, totalCount } = await getItem({ orderBy, page, pageSize });
      setTotalPage(Math.ceil(totalCount / pageSize));
      setItems(list);
    };

    fetchItems();
  }, [orderBy, page, pageSize]);

  return { items, totalPage };
}

export default useItems;
