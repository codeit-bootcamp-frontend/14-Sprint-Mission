import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/product/ProductImages";
import ProductDetails from "../components/product/ProductDetails";
import CommentSection from "../components/comment/CommentSection";
import LoadingErrorHandler from "../components/ui/LoadingErrorHandler";

import {
  PageContainer,
  ProductDetailContainer,
  ContentLayout,
  Divider,
} from "../styles/pages/ProductDetailPage.styled.js";

// 커스텀 훅 import
import useProductDetail from "../hooks/useProductDetail";
import useComments from "../hooks/useComments";

function ProductDetailPage() {
  const { productId } = useParams();

  const { product, loadingProduct, productError, handleFavoriteClick } =
    useProductDetail(productId);
  const {
    comments,
    loadingComments,
    commentError,
    submittingComment,
    handleCommentSubmit,
    handleToggleCommentMenu,
  } = useComments(productId);

  // 초기 product 로딩 중이거나 에러 발생 시 LoadingErrorHandler가 처리
  // product 데이터가 없는 경우 (null)는 LoadingErrorHandler 이후에 한 번 더 체크하여 렌더링 방지
  if (!loadingProduct && !product && !productError) {
    // 데이터도 없고, 로딩중도 아니고, 에러도 없는 초기 상태 (또는 productId가 없는 경우 useProductDetail에서 처리)
    // 이 경우는 useProductDetail 훅 내부에서 productId가 없을 때 error를 설정하거나
    // product를 null로 유지하여 아래 LoadingErrorHandler에서 걸리도록 할 수 있습니다.
    // 또는 여기서 특정 UI (예: "상품 정보를 찾을 수 없습니다.")를 보여줄 수 있습니다.
    // 현재 useProductDetail에서 productId가 없을 때 productError를 설정하므로, 그쪽 로직에 의해 처리됩니다.
  }

  return (
    <LoadingErrorHandler loading={loadingProduct} error={productError}>
      {product && ( // product가 존재할 때만 내부 UI 렌더링
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
              loadingComments={loadingComments}
              commentError={commentError}
              submittingComment={submittingComment}
              handleCommentSubmit={handleCommentSubmit}
              onToggleMenu={handleToggleCommentMenu}
            />
          </ProductDetailContainer>
        </PageContainer>
      )}
    </LoadingErrorHandler>
  );
}

export default ProductDetailPage;
