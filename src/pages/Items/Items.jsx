import React, { useState } from "react";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BestItems from "../../components/Items/BestItems";
import AllItems from "../../components/Items/AllItems";
import "./Items.scss";
import useResponsiveCount from "../../utils/useResponsiveCount";

function Items() {
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

  return (
    <div className="layout">
      <SubHeader />
      <div className="contents">
        <BestItems itemCount={bestItemVisible} />
        <AllItems itemCount={allItemVisible} />
      </div>
    </div>
  );
}

export default Items;
