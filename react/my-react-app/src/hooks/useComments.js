import { useState, useEffect, useCallback } from "react";
import { productAPI } from "../api/products";
import { formatTimeAgo } from "../utils/timeFormat"; // 경로가 정확한지 확인 필요

function useComments(productId) {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false); // 초기값 false로 변경
  const [commentError, setCommentError] = useState(null);
  const [submittingComment, setSubmittingComment] = useState(false);

  const fetchComments = useCallback(async () => {
    if (!productId) return;
    setLoadingComments(true);
    setCommentError(null);
    try {
      const { data } = await productAPI.getComments(productId, null, 10); // page, pageSize는 필요에 따라 조정
      const formattedComments = data.list.map((comment) => ({
        id: comment.id,
        author: comment.writer.nickname,
        content: comment.content,
        createdAt: comment.createdAt,
        timeAgo: formatTimeAgo(comment.createdAt),
        date: new Date(comment.createdAt)
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\. /g, "-")
          .replace(/\.$/, ""),
        avatar: comment.writer.nickname.charAt(0), // 또는 writer.image 사용
        showMenu: false,
      }));
      setComments(formattedComments);
    } catch (err) {
      setCommentError(
        err.response?.data?.message || "댓글을 불러오는데 실패했습니다."
      );
    } finally {
      setLoadingComments(false);
    }
  }, [productId]);

  useEffect(() => {
    // productId가 있을 때만 댓글을 가져오도록 수정
    if (productId) {
      fetchComments();
    }
  }, [productId, fetchComments]);

  const handleCommentSubmit = useCallback(
    async (newCommentContent) => {
      if (!newCommentContent.trim() || submittingComment || !productId)
        return null;
      setSubmittingComment(true);
      try {
        // API 호출하여 댓글 추가
        await productAPI.addComment(productId, {
          content: newCommentContent,
        });
        // 댓글 추가 성공 후, 댓글 목록을 다시 불러옴
        await fetchComments(); // 댓글 목록 새로고침
        return true; // 성공 여부 반환 (객체 대신 boolean 또는 void로 변경 가능)
      } catch (err) {
        console.error("Failed to add comment:", err);
        alert(
          err.response?.data?.message ||
            "댓글 작성에 실패했습니다. 다시 시도해주세요."
        );
        return null;
      } finally {
        setSubmittingComment(false);
      }
    },
    [productId, submittingComment, fetchComments] // fetchComments 의존성 배열에 추가
  );

  const handleToggleCommentMenu = (commentId) => {
    setComments((prevComments) =>
      prevComments.map(
        (comment) =>
          comment.id === commentId
            ? { ...comment, showMenu: !comment.showMenu }
            : { ...comment, showMenu: false } // 다른 메뉴는 닫도록 유지
      )
    );
  };

  return {
    comments,
    loadingComments,
    commentError,
    submittingComment,
    handleCommentSubmit,
    handleToggleCommentMenu,
    fetchComments,
  };
}
export default useComments;
