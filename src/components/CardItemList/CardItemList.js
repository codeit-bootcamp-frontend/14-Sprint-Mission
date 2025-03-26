import clsx from "clsx";
import { Link } from "react-router-dom";

import CardItem from "../CardItem/CardItem";

import styles from "./CardItemList.module.css";

const CardItemList = ({ itemList, columnSize = "large", className }) => {
  return (
    <ul
      className={clsx([
        styles.item_list,
        {
          [styles.large_column]: columnSize === "large",
          [styles.small_column]: columnSize === "small",
        },
        className,
      ])}
    >
      {itemList?.map((item) => (
        <Link key={item.id} to={`/items/${item.id}`}>
          <CardItem imgSrc={item.images[0]} {...item} />
        </Link>
      ))}
    </ul>
  );
};

export default CardItemList;
