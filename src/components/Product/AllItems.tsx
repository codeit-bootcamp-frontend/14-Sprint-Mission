'use client';
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./AllItems.module.css";
import Container from "components/layout/Container";
import Icon from "components/ui/Icon";
import Button from "components/ui/Button";
import SelectBox from "components/ui/SelectBox";
import PageNation from "components/ui/PageNation";
import LoadingBox from "../ui/LoadingBox";
import { useItemService, useParsedItemQuery, useSetItemQuery } from "@/hooks/useItemQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductQuery } from "@/hooks/useItems";
import { useScreenType } from "@/hooks/useScreenType";
import { ProdListAll } from "./ProdListAll";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import EmptyBox from "../ui/EmptyBox";
import { useAuth } from "@/contexts/AuthContext";
import { useConfirmModal } from "@/hooks/useModal";
import ConfirmModal from "../ui/ConfirmModal";


type orderByType = "recent" | "favorite";


const ORDER_OPTIONS = [
  { value: 'recent', label: '최신순' },
  { value: 'favorite', label: '좋아요순' },
];

export function AllItems() {
  

  const searchParams = useSearchParams();
  const screenType = useScreenType(); // 0: 모바일, 1: 태블릿, 2: 데스크탑
  const breakpoint = useBreakpoint();

  const VISIBLE_ITEMS = {
    length: {mobile:4, tablet:6, desktop:10},
    column: {mobile:2, tablet:3, desktop:5},
  };

  const INITIAL_QUERY : ProductQuery = {
    page: 1,
    pageSize: VISIBLE_ITEMS.length[breakpoint],
    orderBy: 'recent',
    keyword: '',
  };

  const setQueryToURL = useSetItemQuery();
  
  const parsedQuery = useParsedItemQuery(INITIAL_QUERY, searchParams);
  const [query, setQuery] = useState(parsedQuery);
  const { data , isLoading } = useItemService( query , searchParams);
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { user } = useAuth();
  const router = useRouter();

  // 페이지 반응형 달라질때마다 pageSize 수정
  useLayoutEffect(() => {
    const pageSize = VISIBLE_ITEMS.length[breakpoint];
    if (query.pageSize === pageSize) return;

    const next = {
      ...query,
      page: query.page ?? 1,
      pageSize,
    };
  
    setQuery(next);
    setQueryToURL(next);
  }, [breakpoint]);


  // PageNation handle
  const handlePageNationClick = (num: number) => {
    const next = { ...query, page: (num) };
    setQuery(next);
    setQueryToURL(next);
  };

  // SelectBox handle
  const handleSelectBoxClick = (value: string) => {
    const next = { ...query, orderBy: value as orderByType, page: 1 };
    setQuery(next);
    setQueryToURL(next);
  };

  // Keyword handle
  const handleKeywordChange = (keyword: string) => {
    const next = { ...query,  keyword,page: 1};
    setQuery(next);
    setQueryToURL(next);
  };

  const handleApplyClick = () => {
    if(!user) {
      openConfirmModal('로그인 후 이용 가능합니다.');
      return;
    }
    router.push('items/apply');
  };

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
                      e.preventDefault();
                      handleKeywordChange((e.target as HTMLInputElement).value);
                    }
                  }}
                />
              </div>
            </form>

            <Button
              variant="roundedSS"
              className={styles.prodAddBtn}
              heightError='true'
              onClick={handleApplyClick}
            >
              상품 등록하기
            </Button>

            <SelectBox
              options={ORDER_OPTIONS}
              screenType={Number(screenType)}
              current={query.orderBy}
              clickEvent={handleSelectBoxClick}
            />
          </div>
        </div>
      </Container>

      {/* 🔹 로딩 중이면 LoadingBox 표시 */}
        {isLoading ? (
          <LoadingBox className="h-[572px] mb-[141px]" />
        ) : data?.list.length ? (
          <ProdListAll
            itemsData={data}
            pageColumn={VISIBLE_ITEMS.column[breakpoint]}
            className={Number(data?.list?.length) < Number(query.pageSize) ? 'mb-[141px]' : 'mb-0'} 
          />
        ) : (
          <EmptyBox context="아직 해당 상품이 없습니다." className="h-[572px] mb-[141px]" />
        )}

      {/* 🔹 페이지네이션 */}
      <PageNation
        current={query.page}
        page={5}
        totalNum={data?.totalCount}
        size={query.pageSize}
        clickEvent={handlePageNationClick}
      />
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </>
  );
}

