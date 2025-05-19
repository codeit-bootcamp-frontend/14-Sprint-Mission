'use client';

import { orderByType, POST_OPTIONS, postByType } from "@/constants/product.constants";
import { useAuth } from "@/contexts/AuthContext";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { usePushQueryToURL } from "@/hooks/useItemQuery";
import { useConfirmModal } from "@/hooks/useModal";
import { useRouter, useSearchParams } from "next/navigation";
import Container from "../layout/Container";
import Title from "../ui/Title";
import SearchBox from "../ui/form/SearchBox";
import Button from "../ui/Button";
import SelectBox from "../ui/SelectBox";
import LoadingBox from "../ui/LoadingBox";
import EmptyBox from "../ui/EmptyBox";
import ConfirmModal from "../ui/ConfirmModal";
import ArticleListItem from "./ArticleListItem";
import { PostListQuery, useInfiniteArticles } from "@/hooks/useArticles";


export function ArticleList() {

  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const breakpoint = useBreakpoint();


  const query: PostListQuery = {
    page: Number(searchParams.get("page") ?? 1),
    pageSize: Number(searchParams.get("pageSize") ?? 10),
    orderBy: (searchParams.get("orderBy") ?? 'recent')as postByType,
    keyword: searchParams.get("keyword") ?? '',
  };

  const pushQueryToURL = usePushQueryToURL();
  const { data, handleLoadMore, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteArticles(query);
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();

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
      router.push('addboard');
    };
  return (
    <>
      <Container className='relative z-20'>      
        <Title titleTag='h2' text='게시글'> 
          <Button
            className="absolute right-0 top-0"
            variant="roundedSS"
            onClick={handleApplyClick}
          >
            글쓰기
          </Button>
        </Title>
        <div className="flex gap-4">
          <SearchBox className="w-full" onSearch={(keyword: string) => handleKeywordChange(keyword)} />
          <SelectBox
            options={POST_OPTIONS}
            screenType={breakpoint}
            current={query.orderBy}
            clickEvent={handleSelectBoxClick}
          />
        </div>
      </Container>

      <Container className="mb-[141px]">  
        {isLoading ? (
        <LoadingBox className="h-[572px] mb-[141px]"/>
         ) : (    
          data ?  (
            <div>             
              <ul>
              {data?.pages.flatMap((page) => (
                page.list.map((article) => (
                  <ArticleListItem key={article.id} postItem={article}/>
                ))
              ))}              
              </ul>
              {isFetchingNextPage && <LoadingBox className="h-[572px]" />}
              {hasNextPage && (
                <div className="text-center">
                  <button onClick={handleLoadMore} disabled={isFetchingNextPage} className="mt-4 bg-blue-500 text-white px-10 py-3 rounded">
                    게시물 더보기
                  </button>
                </div>
              )}
            </div>
          ) : (
          <EmptyBox context="해당 게시물이 없습니다." className="h-[572px]" />
          )
      )}    
      </Container>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </>
  );
}

