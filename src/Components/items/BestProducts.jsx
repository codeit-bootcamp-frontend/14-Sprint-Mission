import ProductCard from "./ProductCard";
import ErrorMessage from "../Common/ErrorMessage";
import Loading from "../Common/Loading";
import useResponsiveCount from "../../hooks/useResponsiveCount";
import useProducts from "../../hooks/\buseProducts";

const BestProducts = () => {
  const { products, isLoading, hasError } = useProducts({
    orderBy: "favorite",
    page: 1,
    pageSize: 10,
  });
  const visibleCount = useResponsiveCount({ pc: 4, tablet: 2, mobile: 1 });

  if (isLoading) return <Loading message="베스트 상품 불러오는 중..." />;
  if (hasError)
    return (
      <ErrorMessage
        message="베스트 상품 로딩 실패!"
        onRetry={() => window.location.reload()}
      />
    );

  return (
    <div className="mx-[16px] mt-[24px]">
      <div className="w-[343px] mx-auto tablet:mx-auto tablet:w-[696px] pc:w-[1200px] ">
        <div className="text-[20px] text-[#111827] font-bold ">베스트 상품</div>
        <div className="mt-[16px] flex justify-between">
          {products.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
