import { useParams, useNavigate } from "react-router-dom";
import "./itemsDetail.css";
import { useEffect, useState } from "react";
import { productServices } from "../../../api/productServices";
import Navbar from "../../../components/layout/Navbar";
import profileImg from "../../../asset/icon/profile_icon.svg";
import kebab from "../../../asset/icon/kebab.svg";
import largeHeart from "../../../asset/icon/large_heart.svg";
import inquiryEmpty from "../../../asset/image/inquiry_empty.png";
import backIcon from "../../../asset/icon/back.svg";
import { commentServices } from "../../../api/commentServices";

export default function ItemsDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  const getProductDetail = async (productId) => {
    const res = await productServices.getProductDetail(productId);
    setProductDetail(res);
  };

  const getComments = async (productId) => {
    const res = await commentServices.getComments(productId);
    setComments(res.list);
    console.log(res);
  };

  const formatPrice = (price) => {
    if (!price) return "0";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}. ${month}. ${day}`;
  };

  const formatRelativeTime = (isoDate) => {
    const now = new Date();
    const date = new Date(isoDate);
    const diff = (now - date) / 1000; // 초 단위 차이

    if (diff < 60) return "방금 전";
    if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
    if (diff < 172800) return "어제";
    if (diff < 604800) return `${Math.floor(diff / 86400)}일 전`;

    return formatDate(isoDate);
  };

  const toggleDropdown = (commentId) => {
    setOpenDropdownId((prev) => (prev === commentId ? null : commentId));
  };

  const handleDelete = async (commentId) => {
    try {
      await commentServices.deleteComment(commentId);
      setComments((prev) => prev.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
      alert("댓글 삭제에 실패했습니다.");
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    await commentServices.postComment(productId, commentInput);
    await getComments(productId); // 새로고침
    setCommentInput(""); // 입력창 초기화
  };

  useEffect(() => {
    getProductDetail(productId);
    getComments(productId);
  }, [productId]);

  return (
    <>
      <Navbar />
      <main className="item-detail-page">
        <section className="item-detail-container">
          {productDetail && (
            <section className="product-detail-info-section">
              <section>
                {productDetail.images && (
                  <img
                    className="product-detail-img"
                    src={productDetail.images[0]}
                    alt="상품 이미지"
                  />
                )}
              </section>
              <section className="product-detail-content-container">
                <section className="product-detail-title-container">
                  <section className="product-detail-name-container">
                    <p className="product-detail-name">{productDetail.name}</p>
                    <img src={kebab} alt="케밥" />
                  </section>
                  <p className="product-detail-price">
                    {formatPrice(productDetail.price)}원
                  </p>
                </section>
                <section className="product-detail-description-container">
                  <p className="product-detail-text">상품 소개</p>
                  <p className="product-detail-description">
                    {productDetail.description}
                  </p>
                </section>
                <section>
                  <p className="product-detail-text">상품 태그</p>
                  <div className="product-detail-tag-list-container">
                    {productDetail.tags &&
                      productDetail.tags.map((tag) => (
                        <article className="product-detail-tag" key={tag}>
                          #{tag}
                        </article>
                      ))}
                  </div>
                </section>
                <section className="product-detail-owner-container">
                  <section className="product-detail-owner-left">
                    <section className="product-detail-profile-img">
                      <img src={profileImg} alt="프로필 이미지" />
                    </section>
                    <section className="product-detail-profile-text">
                      <div className="product-detail-nickname">
                        {productDetail.ownerNickname}
                      </div>
                      <div className="product-detail-date">
                        {formatDate(productDetail.createdAt)}
                      </div>
                    </section>
                  </section>
                  <section className="product-detail-owner-right-wrapper">
                    <div className="product-detail-owner-right">
                      <img
                        className="product-detail-heart-img"
                        src={largeHeart}
                        alt="좋아요"
                      />
                      <p className="product-detail-heart-count">
                        {productDetail.favoriteCount}
                      </p>
                    </div>
                  </section>
                </section>
              </section>
            </section>
          )}
          <section className="ask-container">
            <form className="ask-form-container">
              <p className="ask-form-title">문의하기</p>
              <textarea
                className="ask-form-input"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                style={{ color: commentInput.trim() ? "#1F2937" : "#9ca3af" }}
              />
              <button
                className={`ask-form-submit-button ${
                  commentInput.trim() ? "active" : ""
                }`}
                onClick={handleCommentSubmit}
              >
                등록
              </button>
            </form>
          </section>
          {Array.isArray(comments) && comments.length === 0 && (
            <section className="comments-section empty-comment">
              <img
                className="inquiry-empty-img"
                src={inquiryEmpty}
                alt="문의 없음"
              />
              <p className="inquiry-empty-text">아직 문의가 없어요</p>
            </section>
          )}

          {comments && comments.length > 0 && (
            <section className="comments-section">
              {comments.map((comment) => (
                <section key={comment.id} className="comment-item">
                  <section className="comment-content-row">
                    {editingCommentId === comment.id ? (
                      <textarea
                        className="comment-edit-textarea"
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                      />
                    ) : (
                      <p className="comment-text">{comment.content}</p>
                    )}
                    {editingCommentId === comment.id ? null : (
                      <div className="comment-dropdown-wrapper">
                        <img
                          className="comment-kebab-icon"
                          src={kebab}
                          alt="더보기"
                          onClick={() => toggleDropdown(comment.id)}
                        />
                        {openDropdownId === comment.id && (
                          <section className="comment-dropdown-menu">
                            <div
                              className="comment-dropdown-option"
                              onClick={() => {
                                setEditingCommentId(comment.id);
                                setEditedContent(comment.content);
                                setOpenDropdownId(null);
                              }}
                            >
                              수정하기
                            </div>
                            <div
                              className="comment-dropdown-option"
                              onClick={() => handleDelete(comment.id)}
                            >
                              삭제하기
                            </div>
                          </section>
                        )}
                      </div>
                    )}
                  </section>

                  <section className="comment-meta-row">
                    <div className="comment-meta-left">
                      <img
                        className="comment-profile-img"
                        src={profileImg}
                        alt="프로필 이미지"
                      />
                      <div className="comment-meta-text">
                        <div className="comment-nickname">
                          {comment.writer.nickname}
                        </div>
                        <div className="comment-created-at">
                          {editingCommentId === comment.id
                            ? formatRelativeTime(comment.updatedAt)
                            : formatRelativeTime(comment.createdAt)}
                        </div>
                      </div>
                    </div>

                    {editingCommentId === comment.id && (
                      <div className="comment-edit-button-row">
                        <button
                          className="comment-edit-cancel-button"
                          onClick={() => setEditingCommentId(null)}
                        >
                          취소
                        </button>
                        <button
                          className={`comment-edit-submit-button ${
                            editedContent.trim() === comment.content.trim()
                              ? "disabled"
                              : "active"
                          }`}
                          disabled={
                            editedContent.trim() === comment.content.trim()
                          }
                          onClick={async () => {
                            try {
                              await commentServices.patchComment(
                                comment.id,
                                editedContent
                              );
                              await getComments(productId); // 댓글 목록 갱신
                              setEditingCommentId(null);
                            } catch (error) {
                              console.error("댓글 수정 실패:", error);
                              alert("댓글 수정에 실패했습니다.");
                            }
                          }}
                        >
                          수정 완료
                        </button>
                      </div>
                    )}
                  </section>
                </section>
              ))}
            </section>
          )}
          <div className="back-button-wrapper">
            <button className="back-button" onClick={() => navigate("/items")}>
              목록으로 돌아가기
              <img className="back-button-icon" src={backIcon} alt="돌아가기" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
