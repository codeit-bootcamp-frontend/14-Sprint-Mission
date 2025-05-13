export interface CommentType {
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
