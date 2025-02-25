import clsx from "clsx";

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
        <CardItem key={item.id} imgSrc={item.images[0]} {...item} />
      ))}
    </ul>
  );
};

export default CardItemList;
