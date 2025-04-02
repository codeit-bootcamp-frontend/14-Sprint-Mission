import { useState, useEffect } from "react";
import { getItemDetail } from "../api/api";

function useItemDetail(productId) {
  const [item, setItem] = useState({
    image: "",
    name: "",
    price: 0,
    description: "",
    tags: [],
    favoriteCount: 0,
    ownerNickname: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchItemDetail = async () => {
      const data = await getItemDetail(productId);
      setItem({
        image: data.images,
        name: data.name,
        price: data.price,
        description: data.description,
        tags: data.tags,
        favoriteCount: data.favoriteCount,
        ownerNickname: data.ownerNickname,
        updatedAt: data.updatedAt.split("T")[0].replace(/-/g, "."),
      });
    };
    fetchItemDetail();
  }, [productId]);

  return item;
}

export default useItemDetail;
