import getComment from "@/services/getComment";
import { CommentType } from "@/types/comment";
import React, { useEffect, useState } from "react";

type Props = {
  id: string;
};

const useComment = ({ id }: Props) => {
  const [comments, setComment] = useState<CommentType[]>([]);
  const [nextCursor, setNextCursor] = useState<number | null>(null);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await getComment({ id, limit: 10 });
        setComment(res?.list ?? []);
        setNextCursor(res?.nextCursor ?? null);
      } catch (error: any) {
        if (error.response) {
          throw new Error("comment 가져오기 실패");
        }
      }
    };
    fetchComment();
  }, []);

  return {
    comments,
    nextCursor,
    setComment,
    setNextCursor,
  };
};

export default useComment;
