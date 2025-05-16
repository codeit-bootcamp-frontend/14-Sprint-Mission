import bannerHome01 from "@assets/images/banner-home-01.png";
import bannerHome02 from "@assets/images/banner-home-02.png";
import bannerHome03 from "@assets/images/banner-home-03.png";

export interface Banner {
  image: string;
  keyword: string;
  title: string;
  description: string;
}

export const bannerData: Banner[] = [
  {
    image: bannerHome01,
    keyword: "Hot item",
    title: "인기 상품을 확인해보세요",
    description: "가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해보세요",
  },
  {
    image: bannerHome02,
    keyword: "Search",
    title: "구매를 원하는 상품을 검색하세요",
    description: "구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요",
  },
  {
    image: bannerHome03,
    keyword: "register",
    title: "판매를 원하는 상품을 등록하세요",
    description: "어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요",
  },
];
