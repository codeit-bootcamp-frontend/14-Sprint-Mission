import Nav from "../Components/Common/Nav";
import BestProducts from "../Components/items/BestProducts";
import AllProducts from "../Components/items/AllProducts";
import MyErrorBoundary from "../Components/Common/MyErrorBoundary";

const ItemsPage = () => {
  return (
    <div>
      <Nav />
      <MyErrorBoundary>
        <BestProducts />
      </MyErrorBoundary>

      <MyErrorBoundary>
        <AllProducts />
      </MyErrorBoundary>
    </div>
  );
};

export default ItemsPage;
