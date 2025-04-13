import getComment from "@/services/getComment";
import React, { useEffect, useState } from "react";

type Props = {
  id: string;
};

interface Comment {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
}

const useComment = ({ id }: Props) => {
  const [comments, setComment] = useState<Comment[]>([]);
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
  };
};

export default useComment;
