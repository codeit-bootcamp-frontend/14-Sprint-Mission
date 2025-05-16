import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";

export enum DefaultPageSize {
  mobile = 1,
  tablet = 2,
  desktop = 4,
}

export interface PageSizeConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

export default function useResponsivePageSize(
  pageSizeConfig: PageSizeConfig = DefaultPageSize, // 기본값으로 DefaultPageSize 사용
  defaultSizeKey: keyof PageSizeConfig = "desktop" // 초기 렌더링 시 사용할 키
) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  // useMediaQuery가 안정화되었는지 확인하는 상태 (선택적)
  const [isHydrated, setIsHydrated] = useState(false);

  const [pageSize, setPageSize] = useState<number>(
    pageSizeConfig[defaultSizeKey]
  );

  useEffect(() => {
    setIsHydrated(true); // 클라이언트에서 실행되었음을 표시
  }, []);

  useEffect(() => {
    // isHydrated가 true가 된 후 (즉, 클라이언트에서 useMediaQuery가 값을 가질 준비가 된 후) pageSize를 설정
    if (!isHydrated) return; // 아직 클라이언트 사이드 렌더링 전이면 아무것도 안 함

    if (isMobile) {
      setPageSize(pageSizeConfig.mobile);
    } else if (isTablet) {
      setPageSize(pageSizeConfig.tablet);
    } else {
      setPageSize(pageSizeConfig.desktop);
    }
  }, [isMobile, isTablet, pageSizeConfig, isHydrated]);

  // isHydrated 상태와 pageSize를 함께 반환하여 컴포넌트에서 활용 가능
  return { pageSize, isResponsiveSizeReady: isHydrated };
}
