import Nav from "../Components/Common/Nav";
import ErrorBoundary from "../Components/Common/ErrorBoundary";
import BestProducts from "../Components/items/BestProducts";
import AllProducts from "../Components/items/AllProducts";

const ItemsPage = () => {
  return (
    <div>
      <Nav />
      <ErrorBoundary>
        <BestProducts />
        <AllProducts />
      </ErrorBoundary>
    </div>
  );
};

export default ItemsPage;
