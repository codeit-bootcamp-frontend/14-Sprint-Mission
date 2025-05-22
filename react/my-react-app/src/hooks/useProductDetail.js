import { useState, useEffect, useCallback } from "react";
import { productAPI } from "../api/products";

function useProductDetail(productId) {
  const [product, setProduct] = useState(null);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [productError, setProductError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!productId) {
        setLoadingProduct(false); // productId가 없으면 로딩 종료
        setProductError("상품 ID가 유효하지 않습니다."); // 에러 메시지 설정 또는 다른 처리
        return;
      }
      setLoadingProduct(true);
      setProductError(null);
      try {
        const { data } = await productAPI.getDetail(productId);
        setProduct(data);
      } catch (err) {
        setProductError(
          err.response?.data?.message || "상품 정보를 불러오는데 실패했습니다."
        );
      } finally {
        setLoadingProduct(false);
      }
    };
    fetchProductData();
  }, [productId]);

  const handleFavoriteClick = useCallback(async () => {
    if (!product) return;
    try {
      // API 응답 구조에 따라 isFavorite, favoriteCount 직접 사용 또는 data 객체에서 가져오기
      const api = product.isFavorite
        ? productAPI.removeFavorite
        : productAPI.addFavorite;
      const { data } = await api(productId);
      // 서버 응답에서 업데이트된 isFavorite와 favoriteCount를 받아 상태를 갱신합니다.
      // API 응답이 전체 product 객체를 반환한다면 setProduct(data)를 사용할 수 있습니다.
      // 그렇지 않다면, 부분적으로 상태를 업데이트해야 합니다.
      setProduct((prevProduct) => ({
        ...prevProduct,
        isFavorite:
          data.isFavorite !== undefined
            ? data.isFavorite
            : prevProduct.isFavorite,
        favoriteCount:
          data.favoriteCount !== undefined
            ? data.favoriteCount
            : prevProduct.favoriteCount,
      }));
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
      // 사용자에게 에러 알림 등을 추가할 수 있습니다.
    }
  }, [product, productId]);

  return { product, loadingProduct, productError, handleFavoriteClick };
}

export default useProductDetail;
