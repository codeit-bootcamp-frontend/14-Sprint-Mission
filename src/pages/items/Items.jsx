import styled from "styled-components";
import BestProducts from "./BestItems";
import Products from "./Products";
import "../../../styles/global.scss";

function Items() {
  return (
    <div className="flex-colum middle" style={{ maxWidth: "1200px" }}>
      <BestProducts />
      <Products />
    </div>
  );
}

export default Items;
