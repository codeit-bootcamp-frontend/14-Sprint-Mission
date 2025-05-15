'use client';
import React, { useLayoutEffect } from "react";
import Container from "components/layout/Container";
import Button from "components/ui/Button";
import SelectBox from "components/ui/SelectBox";
import PageNation from "components/ui/PageNation";
import LoadingBox from "../ui/LoadingBox";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductQuery, useItemList } from "@/hooks/useItems";
import { ProdListAll } from "./ProdListAll";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import EmptyBox from "../ui/EmptyBox";
import { useAuth } from "@/contexts/AuthContext";
import { useConfirmModal } from "@/hooks/useModal";
import ConfirmModal from "../ui/ConfirmModal";
import ProductSearchBox from "./ProductSearchBox";
import Title from "../ui/Title";
import { ORDER_OPTIONS, orderByType, VISIBLE_ITEMS } from "@/constants/product.constants";
import { usePushQueryToURL } from "@/hooks/useItemQuery";


export function AllItems() {

  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const breakpoint = useBreakpoint();

  const query: ProductQuery = {
    page: Number(searchParams.get("page") ?? 1),
    pageSize: Number(searchParams.get("pageSize") ?? VISIBLE_ITEMS.length[breakpoint]),
    orderBy: (searchParams.get("orderBy") ?? 'recent')as orderByType,
    keyword: searchParams.get("keyword") ?? '',
  };

  const pushQueryToURL = usePushQueryToURL();
  const { data , isLoading } = useItemList( query );
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();

  // 페이지 반응형 달라질때마다 pageSize 수정
  useLayoutEffect(() => {
    const pageSize = VISIBLE_ITEMS.length[breakpoint];
    if (query.pageSize === pageSize) return;

    const next = {
      ...query,
      page: query.page ?? 1,
      pageSize,
    };
  
    pushQueryToURL(next);
  }, [breakpoint]);


  // PageNation handle
  const handlePageNationClick = (num: number) => {
    const next = { ...query, page: (num) };
    pushQueryToURL(next);
  };

  // SelectBox handle
  const handleSelectBoxClick = (value: string) => {
    const next = { ...query, orderBy: value as orderByType, page: 1 };
    pushQueryToURL(next);
  };

  // Keyword handle
  const handleKeywordChange = (keyword: string) => {
    const next = { ...query,  keyword,page: 1};
    pushQueryToURL(next);
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
        <Title titleTag='h2' text='전체상품'> 
          <ProductSearchBox onSearch={(keyword) => handleKeywordChange(keyword)} />
          <Button
            className="absolute right-0 top-0"
            variant="roundedSS"
            onClick={handleApplyClick}
          >
            상품 등록하기
          </Button>

          <SelectBox
            options={ORDER_OPTIONS}
            screenType={breakpoint}
            current={query.orderBy}
            clickEvent={handleSelectBoxClick}
          />
        </Title>
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

