import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { productAPI } from "../api/products";
import ProductImages from "../components/product/ProductImages";
import ProductInfo from "../components/product/ProductInfo";
import ProductTags from "../components/product/ProductTags";
import SellerInfo from "../components/product/SellerInfo";
import FormField from "../components/ui/FormField";
import Button from "../components/ui/Button";

const PageContainer = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 10px;
`;

const CommonContainer = styled.div`
  width: 100%;
  max-width: 344px; /* 모바일 기본 너비 */
  margin: 0 auto;
  box-sizing: border-box;

  /* 태블릿 화면 */
  @media (min-width: 768px) {
    max-width: 696px;
  }

  /* 데스크톱 화면 */
  @media (min-width: 1280px) {
    max-width: 1200px;
  }
`;

const FormHeader = styled(CommonContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #e53935;
  padding: 20px;
  margin-top: 100px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #dfdfdf;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  /* 태블릿 화면 */
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 340px 1fr;
    gap: 32px;
  }

  /* 데스크톱 화면 */
  @media (min-width: 1024px) {
    grid-template-columns: 486px 1fr;
    gap: 48px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CommentsSection = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 16px;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  padding: 0;
  border-radius: 8px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 104px;
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  background-color: #f4f6fa;
  padding: 16px;
  font-size: 14px;
  resize: none;
  box-sizing: border-box;
  color: #333333;
  font-family: inherit;

  &:focus {
    border-color: #007aff;
    outline: none;
  }

  &::placeholder {
    color: #666;
    opacity: 1;
  }
`;

const NoticeText = styled.p`
  font-size: 12px;
  color: #777;
  margin-top: 8px;
  margin-bottom: 16px;
  line-height: 1.4;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a6268;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MessageParagraph = styled.p`
  text-align: center;
  color: #8b95a1;
  padding: 20px;
  font-size: 14px;
`;

const CommentItem = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const CommentAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: 600;
  flex-shrink: 0;
  margin-right: 8px;
`;

const CommentKebabMenu = styled.div`
  position: relative;
  cursor: pointer;
`;

const KebabIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const KebabMenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #e5e8ec;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 100px;
`;

const KebabMenuItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 8px 12px;
  background: none;
  border: none;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const CommentAuthor = styled.span`
  font-weight: 500;
  color: #666;
  margin-right: 8px;
`;

const CommentDate = styled.span`
  color: #999;
`;

const CommentText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  flex-grow: 1;
`;

const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;
  color: #999;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
`;

// 디폴트 문구 정의
const DEFAULT_COMMENT =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

// 시간 포맷 함수
const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) {
    return "방금 전";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}년 전`;
};

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
  const commentInputRef = useRef(null);

  // 포커스 핸들러: 더 이상 필요하지 않음 (placeholder 사용)
  const handleCommentFocus = () => {
    // 플레이스홀더를 사용하므로 아무 작업도 하지 않음
  };

  // 블러 핸들러: 더 이상 필요하지 않음 (placeholder 사용)
  const handleCommentBlur = () => {
    // 플레이스홀더를 사용하므로 아무 작업도 하지 않음
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
      // TODO: 에러 처리
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
          .replace(/\. /g, ".")
          .replace(/\.$/, ""),
        avatar:
          comment.writer.image || comment.writer.nickname[0].toUpperCase(),
        writerId: comment.writer.id,
        showMenu: false,
      }));

      setComments(formattedComments);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
      setCommentError("댓글을 불러오는데 실패했습니다.");
    } finally {
      setLoadingComments(false);
    }
  }, [productId]);

  // 댓글 작성 제출
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (
      !newComment.trim() ||
      newComment === DEFAULT_COMMENT ||
      submittingComment
    )
      return;

    setSubmittingComment(true);

    try {
      const { data } = await productAPI.addComment(productId, newComment);

      const formattedComment = {
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
          .replace(/\. /g, ".")
          .replace(/\.$/, ""),
        avatar: data.writer.image || data.writer.nickname[0].toUpperCase(),
        writerId: data.writer.id,
        showMenu: false,
      };

      setComments([formattedComment, ...comments]);
      setNewComment(DEFAULT_COMMENT);
    } catch (err) {
      console.error("Failed to submit comment:", err);
      alert("댓글 작성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

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

  if (loading) return <LoadingSpinner>Loading...</LoadingSpinner>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!product) return null;

  return (
    <PageContainer>
      <ProductDetailContainer>
        <ContentLayout>
          <div>
            <ProductImages images={product.images} />
          </div>
          <ProductDetails>
            <ProductInfo
              name={product.name}
              price={product.price}
              description={product.description}
            />
            <ProductTags tags={product.tags} />
            <SellerInfo
              nickname={product.ownerNickname}
              image={product.ownerImage}
              createdAt={product.createdAt}
              favoriteCount={product.favoriteCount}
              isFavorite={product.isFavorite}
              onFavoriteClick={handleFavoriteClick}
            />
          </ProductDetails>
        </ContentLayout>

        <Divider />

        <CommentsSection>
          <SectionTitle>문의하기</SectionTitle>
          <CommentForm onSubmit={handleCommentSubmit}>
            <CommentInput
              placeholder={DEFAULT_COMMENT}
              value={newComment}
              onChange={handleCommentChange}
              onFocus={handleCommentFocus}
              onBlur={handleCommentBlur}
            />
            <SubmitButton type="submit">등록</SubmitButton>
          </CommentForm>

          <CommentList>
            {loadingComments ? (
              <MessageParagraph>댓글을 불러오는 중...</MessageParagraph>
            ) : commentError ? (
              <MessageParagraph>
                댓글을 불러오는데 오류가 발생했습니다.
              </MessageParagraph>
            ) : comments.length === 0 ? (
              <MessageParagraph>
                아직 댓글이 없습니다. 처음으로 댓글을 남겨보세요!
              </MessageParagraph>
            ) : (
              comments.map((comment) => (
                <CommentItem key={comment.id}>
                  <CommentHeader>
                    <CommentText>{comment.content}</CommentText>
                    <CommentKebabMenu>
                      <KebabIcon
                        onClick={() => {
                          // 케밥 메뉴 토글 로직 추가
                          const updatedComments = comments.map((c) =>
                            c.id === comment.id
                              ? { ...c, showMenu: !c.showMenu }
                              : { ...c, showMenu: false }
                          );
                          setComments(updatedComments);
                        }}
                      >
                        ⋮
                      </KebabIcon>
                      {comment.showMenu && (
                        <KebabMenuDropdown>
                          <KebabMenuItem>수정하기</KebabMenuItem>
                          <KebabMenuItem>삭제하기</KebabMenuItem>
                        </KebabMenuDropdown>
                      )}
                    </CommentKebabMenu>
                  </CommentHeader>
                  <CommentFooter>
                    <CommentAvatar>{comment.avatar}</CommentAvatar>
                    <CommentAuthor>{comment.author}</CommentAuthor>
                    <CommentDate>{comment.timeAgo}</CommentDate>
                  </CommentFooter>
                </CommentItem>
              ))
            )}
          </CommentList>
        </CommentsSection>
      </ProductDetailContainer>
    </PageContainer>
  );
}

export default ProductDetailPage;
