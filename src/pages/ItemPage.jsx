import AllItemList from "../component/AllItemList";
import BestItemList from "../component/BestItemList";
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
