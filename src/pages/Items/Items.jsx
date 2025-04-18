import React, { useEffect, useState } from "react";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BestItems from "../../components/Items/BestItems";
import AllItems from "../../components/Items/AllItems";
import "./Items.scss";
import useResponsiveCount from "../../utils/useResponsiveCount";
import Loading from "../../components/Loading/Loading";

function Items() {
  const [bestLoading, setBestLoading] = useState(true);
  const [allLoading, setAllLoading] = useState(true);
  const [error, setError] = useState(null);

  const isLoading = bestLoading || allLoading;

  const allItemVisible = useResponsiveCount(
    {
      desktop: 10,
      tablet: 6,
      mobile: 4,
    },
    10
  );
  const bestItemVisible = useResponsiveCount(
    {
      desktop: 4,
      tablet: 2,
      mobile: 1,
    },
    4
  );

  useEffect(() => {
    if (error) {
      alert("오류가 발생했습니다.");
    }
  }, [error]);

  return (
    <div className="layout">
      <SubHeader />
      <div className="contents">
        {isLoading && <Loading />}
        <BestItems
          itemCount={bestItemVisible}
          onLoading={setBestLoading}
          onError={setError}
        />
        <AllItems
          itemCount={allItemVisible}
          onLoading={setAllLoading}
          onError={setError}
        />
      </div>
    </div>
  );
}

export default Items;
