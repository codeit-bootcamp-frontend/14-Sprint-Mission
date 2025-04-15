import React, { useCallback, useEffect, useState } from "react";
import { Comment } from "./useComment";
import getComment from "@/services/getComment";

type Props = {
  nextCursor: number | null;
  setComment: React.Dispatch<React.SetStateAction<Comment[]>>;
  id: string;
  setNextCursor: React.Dispatch<React.SetStateAction<number | null>>;
};

const useScroll = ({ nextCursor, setComment, id, setNextCursor }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 30
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const fetchMoreComment = async () => {
      if (loading && nextCursor !== null) {
        const res = await getComment({ id, limit: 10, cursor: nextCursor });
        if (res?.list) {
          console.log(`nextCursor: ${res.nextCursor}`);
          setComment((prev) => [...prev, ...res.list]);
          setNextCursor(res.nextCursor);
        }
      }
    };

    fetchMoreComment();
  }, [loading]);

  return {
    loading,
  };
};

export default useScroll;
