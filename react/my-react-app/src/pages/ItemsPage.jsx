import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ItemsPage.css"; // ItemsPage 전용 CSS 파일 import
import ItemImage from "../components/ItemImage"; // 새 컴포넌트 import
import ItemCardContent from "../components/ItemCardContent"; // 새 컴포넌트 import

const API_BASE_URL = "https://panda-market-api.vercel.app/"; // API base URL 업데이트

// 화면 크기 감지 Hook
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

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

  const navigate = useNavigate();
  const { width: windowWidth } = useWindowSize();

  const ITEMS_PER_API_PAGE = 10; // API 요청 시 사용하는 pageSize

  const [mobileSortOpen, setMobileSortOpen] = useState(false);
  const mobileSortRef = useRef(null);

  // 모바일 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    if (!mobileSortOpen) return;
    function handleClick(e) {
      if (mobileSortRef.current && !mobileSortRef.current.contains(e.target)) {
        setMobileSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileSortOpen]);

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
      // 여기서 setError를 호출하면, 각 useEffect의 finally 블록에서 setLoading을 false로 설정하기 전에 에러 상태가 업데이트됨.
      // 에러 메시지를 여기서 통일적으로 설정하거나, 호출부에서 개별 설정.
      setError(err.message || "데이터를 불러오는 중 오류가 발생했습니다.");
      throw err; // 에러를 다시 throw하여 호출부의 catch에서 처리하도록 함
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
        // setError는 fetchProducts 내부에서 이미 호출되었거나, 여기서 특정 메시지로 덮어쓸 수 있음
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
        // setError는 fetchProducts 내부에서 이미 호출되었거나, 여기서 특정 메시지로 덮어쓸 수 있음
      } finally {
        setLoadingAll(false);
      }
    };
    loadAllItems();
  }, [currentPage, orderBy, searchTerm, fetchProducts]);

  // --- 반응형 상품 개수 결정 로직 ---
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

  // --- 이벤트 핸들러 (자리 표시자) ---
  const handleSortChange = (e) => {
    setOrderBy(e.target.value);
    setCurrentPage(1);
  };

  // 입력창 값 변경 시 inputValue 상태만 업데이트
  const handleSearchInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 폼 제출 핸들러는 즉시 검색 (디바운스 무시)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue); // 현재 입력된 값으로 즉시 검색
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(totalAllItemsCount / ITEMS_PER_API_PAGE);

  // --- 렌더링 로직 (간단한 골격) ---
  if (error) {
    return <div className="error-message">오류: {error}</div>;
  }

  return (
    <div className="items-page-container">
      {" "}
      {/* 페이지 전체를 감싸는 컨테이너 */}
      <section className="best-items-section">
        <h2>베스트 상품</h2>
        {loadingBest ? (
          <p>베스트 상품 로딩 중...</p>
        ) : (
          <div className="items-grid best-items-grid">
            {visibleBestItems.map((item) => (
              <div key={item.id} className="item-card">
                <ItemImage src={item.images[0]} alt={item.name} type="best" />
                <ItemCardContent
                  name={item.name}
                  price={item.price}
                  favoriteCount={item.favoriteCount}
                />
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="all-items-section">
        <div className="all-items-header">
          <div className="header-row1">
            <h2>전체 상품</h2>
            {windowWidth <= 767 && (
              <Link to="/additem" className="button add-item-button">
                상품 등록하기
              </Link>
            )}
          </div>
          <div className="header-row2">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                name="searchInput"
                placeholder="검색할 상품을 입력해주세요"
                value={inputValue}
                onChange={handleSearchInputChange}
              />
            </form>
            {windowWidth > 767 && (
              <Link to="/additem" className="button add-item-button">
                상품 등록하기
              </Link>
            )}
            {windowWidth > 767 ? (
              <select
                value={orderBy}
                onChange={handleSortChange}
                className="sort-dropdown"
              >
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            ) : (
              <div className="mobile-sort-dropdown" ref={mobileSortRef}>
                <button
                  type="button"
                  className="mobile-sort-btn"
                  onClick={() => setMobileSortOpen((v) => !v)}
                  aria-haspopup="listbox"
                  aria-expanded={mobileSortOpen}
                >
                  <img src="/images/icons/btn_sort.png" alt="정렬" />
                </button>
                {mobileSortOpen && (
                  <ul className="mobile-sort-menu" role="listbox">
                    <li
                      className={orderBy === "recent" ? "selected" : ""}
                      onClick={() => {
                        setOrderBy("recent");
                        setCurrentPage(1);
                        setMobileSortOpen(false);
                      }}
                      role="option"
                      aria-selected={orderBy === "recent"}
                    >
                      최신순
                    </li>
                    <li
                      className={orderBy === "favorite" ? "selected" : ""}
                      onClick={() => {
                        setOrderBy("favorite");
                        setCurrentPage(1);
                        setMobileSortOpen(false);
                      }}
                      role="option"
                      aria-selected={orderBy === "favorite"}
                    >
                      좋아요순
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
        {loadingAll ? (
          <p>전체 상품 로딩 중...</p>
        ) : (
          <>
            <div className="items-grid all-items-grid">
              {visibleAllItems.map((item) => (
                <div key={item.id} className="item-card">
                  <ItemImage src={item.images[0]} alt={item.name} type="all" />
                  <ItemCardContent
                    name={item.name}
                    price={item.price}
                    favoriteCount={item.favoriteCount}
                  />
                </div>
              ))}
            </div>
            {/* 페이지네이션 UI 추가 */}
            {totalPages > 1 && (
              <div className="pagination-container">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="page-button prev-button"
                  aria-label="Previous Page"
                >
                  ‹
                </button>
                {[...Array(totalPages).keys()].map((num) => {
                  const pageNum = num + 1;
                  // 페이지 번호가 너무 많을 경우, 현재 페이지 주변만 표시 (간단한 버전)
                  // 예: 현재 페이지 기준 +-2 페이지만 표시, 나머지는 ...
                  // 여기서는 우선 모든 페이지 번호 표시 (페이지 수가 적을 때 적합)
                  // 추후 더 복잡한 로직으로 개선 가능
                  if (
                    totalPages <= 7 || // 전체 페이지 수가 7개 이하이면 모두 표시
                    pageNum === 1 || // 첫 페이지
                    pageNum === totalPages || // 마지막 페이지
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1) // 현재 페이지와 양 옆
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        disabled={currentPage === pageNum}
                        className={`page-button ${
                          currentPage === pageNum ? "active" : ""
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (
                    (pageNum === currentPage - 2 && pageNum > 1) ||
                    (pageNum === currentPage + 2 && pageNum < totalPages)
                  ) {
                    return (
                      <span key={pageNum} className="page-ellipsis">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="page-button next-button"
                  aria-label="Next Page"
                >
                  ›
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default ItemsPage;
