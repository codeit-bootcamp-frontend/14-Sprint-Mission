import ItemsHeader from "./items-header";
import AllProducts from "./items-products";
import BestProducts from "./items-best-products";

export default function Items() {
  return (
    <>
      <ItemsHeader />
      <main>
        <BestProducts />
        <AllProducts />
      </main>
    </>
  );
}
