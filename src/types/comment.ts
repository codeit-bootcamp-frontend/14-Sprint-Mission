type WriterType = {
  id: number;
  image: string;
  nickname: string;
};

type CommentType = {
  id: number;
  writer: WriterType;
  updatedAt: string;
  createdAt: string;
  content: string;
};

type CommentResponseType = {
  nextCursor: number;
  list: CommentType[];
};

export { CommentType, CommentResponseType };
