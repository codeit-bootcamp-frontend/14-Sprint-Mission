import clsx from "clsx";
import Link from "next/link";

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
        {
          [styles.empty_list]: itemList.length === 0,
          [styles.item_list]: itemList.length !== 0,
          [styles.large_column]: columnSize === "large",
          [styles.small_column]: columnSize === "small",
        },
        className,
      ])}
    >
      {itemList.length === 0 ? (
        <p className={styles.empty_paragraph}>상품을 찾을 수 없습니다.</p>
      ) : (
        itemList.map((item) => (
          <Link key={item.id} href={`${ROUTE.ITEMS}/${item.id}`}>
            <CardItem imgSrc={item.images?.[0]} {...item} />
          </Link>
        ))
      )}
    </ul>
  );
};

export default CardItemList;
