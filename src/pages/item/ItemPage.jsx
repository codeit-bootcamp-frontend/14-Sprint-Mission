import AllItemList from "../../component/item/AllItemList";
import BestItemList from "../../component/item/BestItemList";
import "./ItemPage.css";

function ItemPage() {
  return (
    <section className="item-section">
      <BestItemList />
      <AllItemList />
    </section>
  );
}

export default ItemPage;
