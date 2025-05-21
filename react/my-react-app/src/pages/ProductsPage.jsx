import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import BestItemsSection from "../components/BestItemsSection";
import AllItemsSection from "../components/AllItemsSection";
import { ErrorMessage, ProductsPageContainer } from "./ProductsPage.styled";
import Button from "../components/ui/Button";

const PageContainer = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 10px;
`;

const CommonContainer = styled.div`
  width: 100%;
  max-width: 344px; /* 모바일 기본 너비 */
  margin: 0 auto;
  box-sizing: border-box;

  /* 태블릿 화면 */
  @media (min-width: 768px) {
    max-width: 696px;
  }

  /* 데스크톱 화면 */
  @media (min-width: 1280px) {
    max-width: 1200px;
  }
`;

const FormHeader = styled(CommonContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const API_BASE_URL = "https://panda-market-api.vercel.app/";

function ProductsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // URL에서 쿼리 파라미터 읽기
  const page = parseInt(queryParams.get("page") || "1", 10);
  const sort = queryParams.get("sort") || "recent";
  const search = queryParams.get("search") || "";

  const [bestItems, setBestItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [totalAllItemsCount, setTotalAllItemsCount] = useState(0);
  const [inputValue, setInputValue] = useState(search); // 입력창의 현재 값

  const [loadingBest, setLoadingBest] = useState(false);
  const [loadingAll, setLoadingAll] = useState(false);
  const [error, setError] = useState(null);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  const { width: windowWidth } = useWindowSize();
  const ITEMS_PER_API_PAGE = 10;

  // URL 업데이트 함수
  const updateQueryParams = useCallback(
    (updates) => {
      const newParams = new URLSearchParams(location.search);

      // 업데이트할 파라미터 설정
      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      });

      // 1페이지와 기본 정렬일 경우 쿼리 파라미터에서 제거
      if (newParams.get("page") === "1") newParams.delete("page");
      if (newParams.get("sort") === "recent") newParams.delete("sort");

      // 빈 검색어는 제거
      if (!newParams.get("search")) newParams.delete("search");

      // URL 업데이트
      navigate(
        {
          pathname: location.pathname,
          search: newParams.toString() ? `?${newParams.toString()}` : "",
        },
        { replace: true }
      );
    },
    [location.pathname, location.search, navigate]
  );

  const fetchProducts = useCallback(async (params) => {
    setError(null);
    let queryParams = `?orderBy=${params.orderBy || "recent"}`;
    if (params.page) queryParams += `&page=${params.page}`;
    if (params.pageSize) queryParams += `&pageSize=${params.pageSize}`;
    if (params.keyword)
      queryParams += `&keyword=${encodeURIComponent(params.keyword)}`;

    try {
      const response = await fetch(`${API_BASE_URL}products${queryParams}`);
      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: `HTTP error! status: ${response.status}` }));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }
      const data = await response.json();
      return { list: data.list || [], totalCount: data.totalCount || 0 };
    } catch (err) {
      console.error("Error in fetchProducts:", err);
      setError(err.message || "데이터를 불러오는 중 오류가 발생했습니다.");
      throw err;
    }
  }, []);

  // 디바운싱을 위한 useEffect
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (inputValue !== search) {
        updateQueryParams({
          search: inputValue,
          page: inputValue !== search ? "1" : page.toString(),
        });
      }
    }, 500); // 500ms 디바운스 시간

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue, search, page, updateQueryParams]);

  // 베스트 상품 로드
  useEffect(() => {
    const loadBestItems = async () => {
      setLoadingBest(true);
      setError(null);
      try {
        const response = await fetchProducts({
          orderBy: "favorite",
          pageSize: 4,
        });
        setBestItems(response.list);
      } catch (err) {
        // 에러 처리는 fetchProducts에서 함
      } finally {
        setLoadingBest(false);
      }
    };
    loadBestItems();
  }, [fetchProducts]);

  // 전체 상품 로드 (페이지, 정렬, 검색어 변경 시)
  useEffect(() => {
    const loadAllItems = async () => {
      setLoadingAll(true);
      setError(null);
      try {
        const response = await fetchProducts({
          page: page,
          pageSize: ITEMS_PER_API_PAGE,
          orderBy: sort,
          keyword: search,
        });
        setAllItems(response.list);
        setTotalAllItemsCount(response.totalCount);
      } catch (err) {
        // 에러 처리는 fetchProducts에서 함
      } finally {
        setLoadingAll(false);
      }
    };
    loadAllItems();
  }, [page, sort, search, fetchProducts]);

  // 반응형 상품 개수 결정 로직
  const getVisibleItemsCount = (itemType) => {
    if (itemType === "best") {
      if (windowWidth >= 1280) return 4;
      if (windowWidth >= 768) return 2;
      return 1;
    } else {
      // 'all'
      if (windowWidth >= 1280) return 10;
      if (windowWidth >= 768) return 6;
      return 4;
    }
  };

  const visibleBestItems = bestItems.slice(0, getVisibleItemsCount("best"));
  const visibleAllItems = allItems.slice(0, getVisibleItemsCount("all"));

  // 이벤트 핸들러
  const handleSortChange = (e) => {
    updateQueryParams({ sort: e.target.value, page: "1" });
  };

  const handleSearchInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateQueryParams({ search: inputValue, page: "1" });
  };

  const handlePageChange = (newPage) => {
    updateQueryParams({ page: newPage.toString() });
  };

  const totalPages = Math.ceil(totalAllItemsCount / ITEMS_PER_API_PAGE);

  if (error) {
    return <ErrorMessage>오류: {error}</ErrorMessage>;
  }

  return (
    <PageContainer>
      <ProductsPageContainer>
        <BestItemsSection items={visibleBestItems} loading={loadingBest} />

        <AllItemsSection
          items={visibleAllItems}
          loading={loadingAll}
          inputValue={inputValue}
          handleSearchInputChange={handleSearchInputChange}
          handleSearchSubmit={handleSearchSubmit}
          orderBy={sort}
          handleSortChange={handleSortChange}
          windowWidth={windowWidth}
          currentPage={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          mobileSortOpen={mobileSortOpen}
          setMobileSortOpen={setMobileSortOpen}
        />
      </ProductsPageContainer>
    </PageContainer>
  );
}

export default ProductsPage;
