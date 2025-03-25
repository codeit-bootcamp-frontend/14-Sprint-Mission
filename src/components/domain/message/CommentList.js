import useComments from '../../hooks/useComments';

function CommentList({ productId }) {
  const { comments, loading, error, refetch } = useComments(productId);
  console.log('comments', comments);

  return (
    <div>{!loading && comments.map((comment) => <div>{comment.id}</div>)}</div>
  );
}

export default CommentList;
