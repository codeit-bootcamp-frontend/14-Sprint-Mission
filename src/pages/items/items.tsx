import ItemsHeader from "./items-header";
import AllProducts from "./items-products";
import BestProducts from "./items-best-products";
import styles from "./styles/items.module.css";

export default function Items() {
  return (
    <>
      <ItemsHeader />
      <main style={styles}>
        <BestProducts />
        <AllProducts />
      </main>
    </>
  );
}
