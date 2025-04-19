import { useParams } from "react-router-dom";
import useProductById from "../../hooks/useProductById";
import pandaFace from "../../assets/panda-face.png";
import heartIcon from "../../assets/heart-Icon.png";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, isLoading } = useProductById(id);

  if (isLoading || !product) return <p>상품 불러오는중. . .</p>;

  return (
    <div>
      <div className="m-[16px] mx-auto w-[344px] tablet:flex tablet:gap-[16px] pc:gap-[24px] tablet:w-[696px] pc:w-[1200px]">
        <div>
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-[343px] h-[343px] object-cover rounded-[12px] pc:w-[486px] pc:h-[486px]"
          />
        </div>
        <div className="flex-1 w-full">
          <h1 className="text-[16px] text-[#1F2937] font-[600] mt-[16px] mb-[8px] tablet:text-[20px] pc:text-[24px]">
            {product.name}
          </h1>
          <div className="text-[24px] text-[#1F2937] font-[600] tablet:text-[32px] pc:text-[40px]">
            {product.price.toLocaleString()}원
          </div>
          <div className="border-b border-[#E5E7EB] my-[16px]"></div>
          <div className="text-[14px] text-[#1F2937] font-[600] mb-[8px] tablet:text-[#4B5563] pc:text-[16px]">
            상품소개
          </div>
          <div className="text-[#1F2937]">{product.description}</div>
          <div className="mt-[24px] text-[14px] text-[#1F2937] font-[600] tablet:text-[#4B5563] pc:text-[16px]">
            상품태그
          </div>
          <div>
            <ul className="flex flex-wrap gap-[8px] mt-[8px]">
              {product.tags && product.tags.length > 0
                ? product.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      className="bg-[#F3F4F6] text-[#1F2937] rounded-full py-[6px] px-[16px]"
                    >
                      #{tag}
                    </li>
                  ))
                : null}
            </ul>
          </div>
          <div className="mb-[40px]"></div>
          <div className="flex w-[344px] h-[50px] items-center justify-between pc:w-full">
            <div className="flex gap-[16px]">
              <img
                src={pandaFace}
                alt="panda-face-logo"
                className="w-[40px] h-[40px]"
              />
              <div>
                <div className="text-[#4B5563]">{product.ownerNickname}</div>
                <div className="text-[#6B7280]">
                  {new Date(product.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex gap-[24px]">
              <div className="border-l border-[#E5E7EB] h-[32px]"></div>
              <div className="flex justify-center items-center gap-[4px] text-[#6B7280] w-[79px] h-[32px] rounded-[35px] border">
                <img
                  src={heartIcon}
                  alt="heartIcon"
                  className="w-[20px] h-[17px]"
                />
                {product.favoriteCount}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#E5E7EB] mt-[32px] mb-[24px] mx-[16px] tablet:mb-[40px]"></div>
    </div>
  );
};

export default ProductDetail;
