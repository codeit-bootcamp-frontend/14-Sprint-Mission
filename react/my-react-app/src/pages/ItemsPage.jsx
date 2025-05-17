import React, { useState, useEffect, useCallback, useRef } from "react";
import "./ItemsPage.css";
import useWindowSize from "../hooks/useWindowSize";
import BestItemsSection from "../components/BestItemsSection";
import AllItemsSection from "../components/AllItemsSection";

const API_BASE_URL = "https://panda-market-api.vercel.app/"; // API base URL 업데이트

function ItemsPage() {
  const [bestItems, setBestItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [totalAllItemsCount, setTotalAllItemsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent"); // 'recent' or 'favorite'
  const [searchTerm, setSearchTerm] = useState(""); // 최종 검색어 (API 호출용)
  const [inputValue, setInputValue] = useState(""); // 입력창의 현재 값 (디바운싱용)

  const [loadingBest, setLoadingBest] = useState(false);
  const [loadingAll, setLoadingAll] = useState(false);
  const [error, setError] = useState(null);

  const { width: windowWidth } = useWindowSize();
  const ITEMS_PER_API_PAGE = 10; // API 요청 시 사용하는 pageSize

  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  const fetchProducts = useCallback(async (params) => {
    // params: { page, pageSize, orderBy, keyword }
    // setLoading 상태는 각 useEffect에서 호출 전에 직접 관리
    setError(null);
    let queryParams = `?orderBy=${params.orderBy || "recent"}`;
    if (params.page) queryParams += `&page=${params.page}`;
    if (params.pageSize) queryParams += `&pageSize=${params.pageSize}`;
    if (params.keyword)
      queryParams += `&keyword=${encodeURIComponent(params.keyword)}`;

    try {
      const response = await fetch(`${API_BASE_URL}products${queryParams}`);
      if (!response.ok) {
        // 서버에서 에러 응답 (4xx, 5xx)을 보낸 경우
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
      setSearchTerm(inputValue); // 일정 시간 후 inputValue를 searchTerm으로 반영
      setCurrentPage(1); // 검색 시 1페이지로
    }, 500); // 500ms 디바운스 시간

    return () => {
      clearTimeout(timerId); // 컴포넌트 언마운트 또는 inputValue 변경 시 타이머 클리어
    };
  }, [inputValue]); // inputValue가 변경될 때마다 이 effect 실행

  // 베스트 상품 로드
  useEffect(() => {
    const loadBestItems = async () => {
      setLoadingBest(true);
      setError(null); // API 호출 전 에러 초기화
      try {
        const response = await fetchProducts({
          orderBy: "favorite",
          pageSize: 4,
        });
        console.log(
          "API 응답 - 베스트 상품 개수:",
          response.list.length,
          response.list
        );
        setBestItems(response.list);
      } catch (err) {
        // setError는 fetchProducts 내부에서 이미 호출됨
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
      setError(null); // API 호출 전 에러 초기화
      try {
        const response = await fetchProducts({
          page: currentPage,
          pageSize: ITEMS_PER_API_PAGE,
          orderBy: orderBy,
          keyword: searchTerm,
        });
        setAllItems(response.list);
        setTotalAllItemsCount(response.totalCount);
      } catch (err) {
        // setError는 fetchProducts 내부에서 이미 호출됨
      } finally {
        setLoadingAll(false);
      }
    };
    loadAllItems();
  }, [currentPage, orderBy, searchTerm, fetchProducts]);

  // 반응형 상품 개수 결정 로직
  const getVisibleItemsCount = (itemType) => {
    console.log("화면 너비:", windowWidth, "px");
    if (itemType === "best") {
      if (windowWidth >= 1280) {
        console.log("데스크톱 뷰 - 베스트 상품 4개 표시");
        return 4; // Desktop
      }
      if (windowWidth >= 768) {
        console.log("태블릿 뷰 - 베스트 상품 2개 표시");
        return 2; // Tablet
      }
      console.log("모바일 뷰 - 베스트 상품 1개 표시");
      return 1; // Mobile
    } else {
      // 'all'
      if (windowWidth >= 1280) return 10; // Desktop
      if (windowWidth >= 768) return 6; // Tablet
      return 4; // Mobile
    }
  };

  const visibleBestItems = bestItems.slice(0, getVisibleItemsCount("best"));
  console.log("표시될 베스트 상품 개수:", visibleBestItems.length);
  const visibleAllItems = allItems.slice(0, getVisibleItemsCount("all"));

  // 이벤트 핸들러
  const handleSortChange = (e) => {
    setOrderBy(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue); // 현재 입력된 값으로 즉시 검색
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(totalAllItemsCount / ITEMS_PER_API_PAGE);

  if (error) {
    return <div className="error-message">오류: {error}</div>;
  }

  return (
    <div className="items-page-container">
      <BestItemsSection items={visibleBestItems} loading={loadingBest} />

      <AllItemsSection
        items={visibleAllItems}
        loading={loadingAll}
        inputValue={inputValue}
        handleSearchInputChange={handleSearchInputChange}
        handleSearchSubmit={handleSearchSubmit}
        orderBy={orderBy}
        handleSortChange={handleSortChange}
        windowWidth={windowWidth}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        mobileSortOpen={mobileSortOpen}
        setMobileSortOpen={setMobileSortOpen}
      />
    </div>
  );
}

export default ItemsPage;
