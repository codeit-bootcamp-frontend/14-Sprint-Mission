import React, { useEffect, useState } from "react";
import BestProduct from "../components/BestProduct";
import AllProduct from "../components/AllProduct";
import "../styles/body.css";

const Body = () => {
  const [browserSize, setBrowseSize] = useState(window.innerWidth);
  const bestPlaceHolderCount =
    browserSize <= 767 ? 1 : browserSize <= 1199 ? 2 : 4;
  const allPlaceHolderCount =
    browserSize <= 767 ? 4 : browserSize <= 1199 ? 6 : 10;

  useEffect(() => {
    const handleResize = () => {
      setBrowseSize(window.innerWidth);
    };

    // 리스너 추가
    window.addEventListener("resize", handleResize);

    // 클린업
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="body">
      {/* 베스트 상품 */}
      <BestProduct bestPlaceHolderCount={bestPlaceHolderCount} />

      {/* 모든 상품 */}
      <AllProduct
        allPlaceHolderCount={allPlaceHolderCount}
      />
    </div>
  );
};

export default Body;
