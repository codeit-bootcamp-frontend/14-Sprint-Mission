import styled from "styled-components";
import BestProducts from "./BestItems";
import Products from "./Products";
import "../../../styles/global.scss";

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 1200px) {
    max-width: 720px;
  }
  @media (max-width: 768px) {
    max-width: 344px;
  }
`;

function Items() {
  return (
    <ItemsContainer style={{}}>
      <BestProducts />
      <Products />
    </ItemsContainer>
  );
}

export default Items;
