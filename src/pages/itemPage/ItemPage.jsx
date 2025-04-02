import AllItemList from "../../component/item/AllItemList";
import BestItemList from "../../component/item/BestItemList";
import Header from "../../component/common/Header";
import "./ItemPage.css";

function ItemPage() {
  return (
    <section className="item-section">
      <Header />
      <BestItemList />
      <AllItemList />
    </section>
  );
}

export default ItemPage;
