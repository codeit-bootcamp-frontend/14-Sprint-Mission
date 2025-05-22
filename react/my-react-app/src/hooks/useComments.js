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
        const { data } = await productAPI.addComment(productId, {
          content: newCommentContent,
        });
        // API 응답에서 writer 정보가 완전한지 확인 필요
        const newCommentObj = {
          id: data.id,
          author: data.writer?.nickname || "사용자", // writer 객체 및 nickname 존재 여부 확인
          content: data.content,
          createdAt: data.createdAt,
          timeAgo: formatTimeAgo(data.createdAt),
          date: new Date(data.createdAt)
            .toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\. /g, "-")
            .replace(/\.$/, ""),
          avatar: data.writer?.nickname?.charAt(0) || "U",
          showMenu: false,
        };
        setComments((prevComments) => [newCommentObj, ...prevComments]);
        return newCommentObj; // 성공 시 새 댓글 객체 반환
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
    [productId, submittingComment]
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
