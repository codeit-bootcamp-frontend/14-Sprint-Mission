import { Link } from "react-router-dom";

import { CardItemList, Input, Pagination, Select } from "../../components";
import useItemPageState from "./useItemPageState";

import SearchIcon from "../../assets/icons/ic_search.svg";
import styles from "./ItemsPage.module.css";

const PAGINATION_AMOUNT = 5;

const ItemsPage = () => {
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
        <p className={styles.title}>베스트 상품</p>
        <div className={styles.best_items_box}>
          {itemList.length > 0 ? (
            <CardItemList itemList={bestItemList} />
          ) : (
            <p className={styles.empty_paragraph}>상품을 찾을 수 없습니다.</p>
          )}
        </div>
      </article>
      <article>
        <div className={styles.all_items_container}>
          <p className={styles.title}>전체 상품</p>
          <div className={styles.serach_box}>
            <Input
              defaultValue={keyword}
              className={styles.input_wrapper}
              placeholder="검색할 상품을 입력해주세요."
              prefix={<img src={SearchIcon} alt="검색 아이콘" />}
              onChange={typingKeywordChangeHandler}
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
        <div className={styles.all_items_box}>
          {itemList.length > 0 ? (
            <CardItemList itemList={itemList} imgSize="small" />
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
