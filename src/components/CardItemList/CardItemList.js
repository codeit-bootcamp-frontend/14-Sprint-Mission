import clsx from "clsx";

import CardItem from "../CardItem/CardItem";

import styles from "./CardItemList.module.css";

const CardItemList = ({ itemList, imgSize = "large", className }) => {
  return (
    <ul
      className={clsx([
        styles.item_list,
        {
          [styles.large_column]: imgSize === "large",
          [styles.small_column]: imgSize === "small",
        },
        className,
      ])}
    >
      {itemList?.map((item) => (
        <CardItem
          key={item.id}
          imgSrc={item.images[0]}
          imgSize={imgSize}
          {...item}
        />
      ))}
    </ul>
  );
};

export default CardItemList;
