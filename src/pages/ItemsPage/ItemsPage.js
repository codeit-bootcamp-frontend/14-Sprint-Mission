import { useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";

import { getItems } from "../../api/item";
import useWindowSize from "../../hooks/useWindowSize";
import { CardItemList, Input, Pagination, Select } from "../../components";

import SearchIcon from "../../assets/icons/ic_search.svg";
import styles from "./ItemsPage.module.css";

const PAGINATION_AMOUNT = 5;

const columnList = {
  best: {
    desktop: 4,
    tablet: 2,
    mobile: 1,
  },
  all: {
    desktop: 10,
    tablet: 6,
    mobile: 4,
  },
};

const ItemsPage = () => {
  const [searchParams] = useSearchParams();
  const [itemList, setItemList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const windowSize = useWindowSize({
    desktop: 1200,
    tablet: 768,
  });

  const currentPageNumber = Number(searchParams.get("page")) || 1;
  const sortBy = searchParams.get("sortBy") || "recent";
  const currentPageSize = columnList.all[windowSize];
  const currentBestItemsAmount = columnList.best[windowSize];

  useEffect(() => {
    const requestItems = async () => {
      const result = await getItems({
        page: currentPageNumber,
        sortBy,
        pageSize: currentPageSize,
      });

      if (result) {
        setItemList(result.list);
        setTotalCount(result.totalCount);
      }
    };

    requestItems();
  }, [sortBy, currentPageNumber, currentPageSize]);

  if (currentPageNumber < 1) {
    return <Navigate to="/items?page=1" />;
  }

  const bestItemList =
    itemList
      ?.sort((a, b) => b.favoriteCount - a.favoriteCount)
      .slice(0, currentBestItemsAmount) ?? [];

  return (
    <div className={styles.main_center}>
      <article className={styles.best_items}>
        <p className={styles.title}>베스트 상품</p>
        <CardItemList itemList={bestItemList} />
      </article>
      <article>
        <div className={styles.all_items_container}>
          <p className={styles.title}>전체 상품</p>
          <div className={styles.serach_box}>
            <Input
              className={styles.input_wrapper}
              placeholder="검색할 상품을 입력해주세요."
              prefix={<img src={SearchIcon} alt="검색 아이콘" />}
            />
            <Link className={styles.search_button} to="/additem">
              상품 등록하기
            </Link>
            <Select>
              <p data-sort-value="recent">최신순</p>
              <p data-sort-value="favorite">좋아요순</p>
            </Select>
          </div>
        </div>
        <CardItemList itemList={itemList} imgSize="small" />
        <Pagination
          className={styles.pagination}
          pageSize={PAGINATION_AMOUNT}
          totalCount={totalCount}
          currentPageNumber={currentPageNumber}
        />
      </article>
    </div>
  );
};

export default ItemsPage;
