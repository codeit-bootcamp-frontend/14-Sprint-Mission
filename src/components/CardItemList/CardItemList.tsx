import clsx from "clsx";
import { Link } from "react-router-dom";

import { ROUTE } from "@/constants/route";
import { ProductType } from "@/types/product";
import CardItem from "../CardItem/CardItem";

import styles from "./CardItemList.module.css";

type CardItemListProps = {
  itemList: ProductType[];
  columnSize: "large" | "small";
  className?: string;
};

const CardItemList = ({
  itemList,
  columnSize = "large",
  className,
}: CardItemListProps) => {
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
        <Link key={item.id} to={`${ROUTE.ITEMS}/${item.id}`}>
          <CardItem imgSrc={item.images[0]} {...item} />
        </Link>
      ))}
    </ul>
  );
};

export default CardItemList;
