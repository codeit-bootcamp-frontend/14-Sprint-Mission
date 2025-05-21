"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { CardItemList, Input, Pagination, Select } from "@/components/index";
import useItemPageState from "./_hooks/useItemPageState";

import SearchIcon from "@/assets/icons/ic_search.svg";
import styles from "./page.module.css";

const PAGINATION_AMOUNT = 5;

const sortList = [
  { value: "recent", label: "최신순 " },
  { value: "favorite", label: "좋아요 순" },
];

const ItemsPage = () => {
  const searchParams = useSearchParams();
  const currentSortBy = searchParams.get("sortBy");
  const currentSortValue =
    sortList.find(({ value }) => currentSortBy === value) ?? sortList[0];

  const {
    itemList,
    bestItemList,
    keyword,
    totalCount,
    currentPageSize,
    currentPageNumber,
    typingKeywordChangeHandler,
  } = useItemPageState();

  return (
    <div className={styles.main_center}>
      <article className={styles.best_items_container}>
        <span className={styles.best_title}>베스트 상품</span>
        <div className={styles.best_items_box}>
          {itemList?.length > 0 ? (
            <CardItemList itemList={bestItemList} columnSize="large" />
          ) : (
            <p className={styles.empty_paragraph}>상품을 찾고 있습니다.</p>
          )}
        </div>
      </article>
      <article>
        <div className={styles.all_items_container}>
          <span className={styles.title}>전체 상품</span>
          <div className={styles.search_box}>
            <Input
              defaultValue={keyword}
              className={styles.input_wrapper}
              placeholder="검색할 상품을 입력해주세요."
              prefix={<SearchIcon />}
              onChange={typingKeywordChangeHandler}
            />
            <Link className={styles.search_button} href="/additem">
              상품 등록하기
            </Link>
            <Select initialOption={currentSortValue}>
              <Select.Trigger>{currentSortValue.label}</Select.Trigger>
              <Select.List>
                {sortList.map((option) => (
                  <Select.Item
                    key={option.label}
                    queryStringKey="sortBy"
                    option={option}
                  >
                    {option.label}
                  </Select.Item>
                ))}
              </Select.List>
            </Select>
          </div>
        </div>
        <div className={styles.all_items_box}>
          {itemList?.length > 0 ? (
            <CardItemList itemList={itemList} columnSize="small" />
          ) : (
            <p className={styles.empty_paragraph}>상품을 찾을 수 없습니다.</p>
          )}
        </div>
        <Pagination
          className={styles.pagination}
          pageSize={PAGINATION_AMOUNT}
          totalCount={totalCount}
          currentPageNumber={currentPageNumber}
          showItemCount={currentPageSize}
        />
      </article>
    </div>
  );
};

export default ItemsPage;
