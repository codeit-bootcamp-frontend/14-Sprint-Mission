import "./ItemList.css";

function Item({ item }) {
  return (
    <>
      <img className="item-img" src={item.images} />
      <div className="item-name">{item.name}</div>
      <div className="item-price">{item.price}원</div>
      <div className="item-favorite">
        <img src="./image/favorite.png" className="item-favorite-icon" />
        {item.favoriteCount}
      </div>
    </>
  );
}

function ItemList({ items, className }) {
  return (
    <div className={`${className}`}>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Item item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
