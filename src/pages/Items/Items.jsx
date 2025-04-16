import React from "react";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BestItems from "../../components/Items/BestItems";
import AllItems from "../../components/Items/AllItems";
import "./Items.scss";

function Items() {
  return (
    <div className="layout">
      <SubHeader />
      <div className="contents">
        <BestItems />
        <AllItems />
      </div>
    </div>
  );
}

export default Items;
