import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { getDetail, comment } from "../utils/productDetailFunctions";
import ProductDetailInfo from "./ProductDetailInfo";
import styles from "../styles/productDetail.module.scss";
import Ask from "./Ask";
import Comment from "./Comment";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [comments, setComment] = useState([]);
  const [limit, setLimit] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    getDetail(productId).then((data) => {
      setProductDetail(data);
    });
    comment(productId, limit, cursor).then((data) => {
      setCursor(data.nextCursor);
      setComment(data.comments);
    });
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <Header />
      <ProductDetailInfo productDetail={productDetail} />
      <div className={styles["divider"]}></div>
      <Ask />
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))
      ) : (
        <div className={styles["alternative-image"]}>
          <img src="/productdetail_none.png" alt="문의 없는 이미지" />
          <span>아직 문의가 없어요</span>
        </div>
      )}

      <button onClick={() => navigate(-1)} className={styles["back-button"]}>
        목록으로 돌아가기
        <img src="/ic_back.png" alt="뒤로가기" />
      </button>
    </div>
  );
};

export default ProductDetail;
