import React, { useState, useEffect, useCallback } from "react";
import styles from "./AllItems.module.css";
import Container from "components/layout/Container";
import Icon from "components/ui/Icon";
import Button from "components/ui/Button";
import SelectBox from "components/ui/SelectBox";
import LoadingBox from "components/LoadingBox";
import PageNation from "components/ui/PageNation";
import ProdListAll from "./ProdListAll";

function AllItems({ items, query, setMergedQuery, totalCount, updateQuery, screenType, loading, VISIBLE_ITEMS}) {
 
  const ORDER_OPTIONS = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];

  // PageNation handle
  const handlePageNationClick = useCallback( (num) => {
    setMergedQuery((prev) => ({ ...prev, page: num }));
    updateQuery({ page: num });
      },
    [setMergedQuery, updateQuery]
  );
  
    // SelectBox handle
    const handleSelectBoxClick = useCallback( (value) => {
      setMergedQuery((prev) => ({ ...prev, orderBy: value, page: 1 }));
        updateQuery({ orderBy: value, page: 1 });
      },
      [setMergedQuery, updateQuery]
    );
  
    // Keyword handle
    const handleKeywordChange = useCallback(
      (keyword) => {
        setMergedQuery((prev) => ({
          ...prev,
          keyword,
          page: 1,
        }));
        updateQuery({ keyword, page: 1 });
      },
      [setMergedQuery, updateQuery]
    );

  return (
    <>
      <Container className='relative z-20'>
        <div className={styles.prodListTitle}>
          <div className="left">
            <div className={styles.title}>전체상품</div>
          </div>
          <div className="right">
            <form className={styles.prodSearch}>
              <div className={styles.prodSearchWrap}>
                <Icon iconName="search" alt="search box" />
                <input
                  name="keyword"
                  type="text"
                  placeholder="검색할 상품을 입력해주세요"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleKeywordChange(e.target.value);
                    }
                  }}
                />
              </div>
            </form>

            <Button
              link="Additem"
              variant="roundedSS"
              className={styles.prodAddBtn}
               heightError='true'
            >
              상품 등록하기
            </Button>

            <SelectBox
              options={ORDER_OPTIONS}
              screenType={screenType}
              current={query.orderBy}
              clickEvent={handleSelectBoxClick}
            />
          </div>
        </div>
      </Container>

      {/* 🔹 로딩 중이면 LoadingBox 표시 */}
      {loading === true ? (
        <LoadingBox />
      ) : (
        <ProdListAll
          itemsData={items}
          pageColumn={VISIBLE_ITEMS.column[screenType]}
        />
      )}

      {/* 🔹 페이지네이션 */}
      <PageNation
        current={query.page}
        page="5"
        totalNum={totalCount}
        size={query.pageSize}
        clickEvent={handlePageNationClick}
      />
    </>
  );
}

export default AllItems;
