import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { productAPI } from "../api/products";
import ProductImages from "../components/product/ProductImages";
import ProductDetails from "../components/product/ProductDetails";
import CommentSection from "../components/comment/CommentSection";
import LoadingErrorHandler from "../components/ui/LoadingErrorHandler";
import { formatTimeAgo } from "../utils/timeFormat";
import {
  PageContainer,
  ProductDetailContainer,
  ContentLayout,
  Divider
} from "../styles/pages/ProductDetailPage.styled.js";



function ProductDetailPage() {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentError, setCommentError] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [submittingComment, setSubmittingComment] = useState(false);

  // 댓글 메뉴 토글 핸들러
  const handleToggleCommentMenu = (commentId) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, showMenu: !comment.showMenu }
        : { ...comment, showMenu: false }
    );
    setComments(updatedComments);
  };

  const handleFavoriteClick = async () => {
    try {
      if (!product) return;

      const api = product.isFavorite
        ? productAPI.removeFavorite
        : productAPI.addFavorite;
      const { data } = await api(productId);
      setProduct(data);
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
    }
  };

  // 댓글 목록 가져오기
  const fetchComments = useCallback(async () => {
    if (!productId) return;

    setLoadingComments(true);
    setCommentError(null);

    try {
      const { data } = await productAPI.getComments(productId, null, 10);
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
        avatar: comment.writer.nickname.charAt(0),
        showMenu: false,
      }));

      setComments(formattedComments);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
      setCommentError(
        err.response?.data?.message || "댓글을 불러오는데 실패했습니다."
      );
    } finally {
      setLoadingComments(false);
    }
  }, [productId]);

  // 댓글 작성 제출
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || submittingComment) return;

    setSubmittingComment(true);

    try {
      const { data } = await productAPI.addComment(productId, {
        content: newComment,
      });

      // 새 댓글 추가
      const newCommentObj = {
        id: data.id,
        author: data.writer.nickname,
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
        avatar: data.writer.nickname.charAt(0),
        showMenu: false,
      };

      setComments([newCommentObj, ...comments]);
      setNewComment("");
    } catch (err) {
      console.error("Failed to add comment:", err);
      alert(
        err.response?.data?.message || "댓글 작성에 실패했습니다. 다시 시도해주세요."
      );
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // 상품 정보 가져오기
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await productAPI.getDetail(productId);
        setProduct(data);
      } catch (err) {
        setError(
          err.response?.data?.message || "상품 정보를 불러오는데 실패했습니다."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (!loading && product) {
      fetchComments();
    }
  }, [loading, product, fetchComments]);

  return (
    <LoadingErrorHandler loading={loading} error={error}>
      {product && (
        <PageContainer>
          <ProductDetailContainer>
            <ContentLayout>
              <div>
                <ProductImages images={product.images} />
              </div>
              <ProductDetails
                product={product}
                onFavoriteClick={handleFavoriteClick}
              />
            </ContentLayout>

            <Divider />

            <CommentSection
              comments={comments}
              newComment={newComment}
              loadingComments={loadingComments}
              commentError={commentError}
              onCommentChange={handleCommentChange}
              onCommentSubmit={handleCommentSubmit}
              onCommentFocus={() => {}}
              onCommentBlur={() => {}}
              onToggleMenu={handleToggleCommentMenu}
            />
          </ProductDetailContainer>
        </PageContainer>
      )}
    </LoadingErrorHandler>
  );
}

export default ProductDetailPage;
