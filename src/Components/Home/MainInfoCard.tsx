import MainInfoCardItem from "./MainInfoCardItem";

import img1 from "../../assets/hot-item.png";
import img2 from "../../assets/search.png";
import img3 from "../../assets/register.png";

const MainInfoCard = () => {
  return (
    <div className="mx-[16px]">
      <MainInfoCardItem
        title="인기 상품을 "
        title2="확인해 보세요"
        description="가장 HOT한 중고거래 물품을"
        description2="판다 마켓에서 확인해 보세요"
        image={img1}
        highlightText="Hot item"
      />
      <MainInfoCardItem
        title="구매를 원하는 "
        title2="상품을 검색하세요"
        description="구매하고 싶은 물품을 검색해서"
        description2="쉽게 찾아보세요"
        image={img2}
        highlightText="Search"
        reverse={true}
      />
      <MainInfoCardItem
        title="판매를 원하는 "
        title2="상품을 등록하세요"
        description="어떤 물건이든 판매하고 싶은 상품을"
        description2="쉽게 등록하세요"
        image={img3}
        highlightText="Register"
      />
    </div>
  );
};

export default MainInfoCard;
