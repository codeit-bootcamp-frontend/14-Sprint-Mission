import { Writer } from '@/app/boards/page';
import CommentItem from './CommentItem';
import NoComment from './NoComment';

export async function getComments(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${id}/comments?limit=20`
    );

    if (response.ok) {
      const data = await response.json();
      const list = await data.list;
      return list;
    } else {
      console.error('Request failed with status:', response.status);
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export interface Comment {
  id: number;
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
}

async function CommentList({ id }: { id: string }) {
  const comments: Comment[] = await getComments(id);
  return (
    <div>
      {comments.length ? (
        <div>
          {comments.map((comment: Comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <NoComment />
      )}
    </div>
  );
}

export default CommentList;
