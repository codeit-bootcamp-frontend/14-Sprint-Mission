
import { BEST_POST_ITEMS, BEST_VISIBLE_ITEMS } from "@/constants/product.constants";
import { PostListQuery, useArticlesList } from "@/hooks/useArticles";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useEffect, useState } from "react";
import Container from "../layout/Container";
import LoadingBox from "../ui/LoadingBox";
import EmptyBox from "../ui/EmptyBox";


function BestArticleList() {
  const breakpoint = useBreakpoint();
  const INITIAL_QUERY: PostListQuery  = {
    page: 1,
    pageSize: BEST_POST_ITEMS.length[breakpoint],
    orderBy: 'like',
    keyword: '',
  };
   const [query, setQuery] = useState(INITIAL_QUERY);
  
    const { data , isLoading } = useArticlesList(query);
    // 페이지 반응형 달라질때마다 pageSize 수정
    useEffect(() => {
      setQuery((prev: typeof INITIAL_QUERY) => ({
        ...prev,
        pageSize: BEST_POST_ITEMS.length[breakpoint],
      }));
    }, [breakpoint]);
  
  return (
      <Container className="mb-[141px]">       
      
       {isLoading ? (
        <LoadingBox className="h-[178px]"/>
         ) : (    
          data ? (  data.list.map((article) => (
            <div key={article.id}>{article.title}----{article.likeCount}</div>
          ))
         ) : (
          <EmptyBox context="해당 게시물이 없습니다." className="h-[572px]" />
        )
      )}
      </Container>
  );
}

export default BestArticleList;
