import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
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

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 20px;
  color: #4e5968;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #3692ff;
  }
`;

function ProductDetailPage() {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // TODO: API 연동 후 구현
    setLoading(false);
  }, [productId]);

  if (loading) return <LoadingSpinner>Loading...</LoadingSpinner>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <ProductDetailContainer>
      <BackButton to="/items">← 목록으로 돌아가기</BackButton>
      {/* TODO: 상품 상세 정보 컴포넌트들 추가 예정 */}
      <div>Product ID: {productId}</div>
    </ProductDetailContainer>
  );
}

export default ProductDetailPage;
