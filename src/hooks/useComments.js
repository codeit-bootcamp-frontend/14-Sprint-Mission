import { useState, useEffect } from "react";
import { getComments } from "../api/commentApi";

function useComments(productId) {
  const [comments, setComments] = useState([]);
  const [cursor, setCursor] = useState(null);

  const loadComments = async () => {
    const { list, nextCursor } = await getComments({
      productId,
      cursor,
    });
    setComments((prev) => (cursor ? [...prev, ...list] : list));
    setCursor(nextCursor);
  };

  useEffect(() => {
    loadComments();
  }, [productId]);

  return { comments, cursor, loadComments };
}

export default useComments;
