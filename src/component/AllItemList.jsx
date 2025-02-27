import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getItem } from "../api";
import Pagination from "./Pagination";
import "./AllItemList.css";

function AllItemList() {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);

  // 화면에 보여줄 개수
  const updatePageSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return 4;
    } else if (width < 1200) {
      return 6;
    } else {
      return 10;
    }
  };

  // select box의 값이 변할 때
  const handleOnChange = (e) => {
    const value = e.target.value;
    setOrderBy(value);
  };

  // 상품 등록하기 버튼
  const handleButtonClick = () => {
    window.location.href = "/additem";
  };

  // 상품 로드
  const handleLoad = async ({ orderBy, page, pageSize }) => {
    const { list, totalCount } = await getItem({ orderBy, page, pageSize });
    setTotalPage(Math.ceil(totalCount / pageSize));
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ orderBy, page, pageSize });
    window.addEventListener("resize", () => {
      setPageSize(updatePageSize);
    });
  }, [orderBy, pageSize, page]);

  return (
    <>
      <div className="item-section-flex">
        <div className="item-section-title">전체 상품</div>
        <div className="item-all-section-search-container">
          <img src="/image/search_icon.png" className="search-icon" />
          <input
            className="item-all-section-search"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <button onClick={handleButtonClick} className="item-all-section-button">
          상품등록하기
        </button>
        <select onChange={handleOnChange} className="item-all-section-select">
          <option value="recent" className="select-option">
            최신순
          </option>
          <option value="favorite" className="select-option">
            좋아요순
          </option>
        </select>
      </div>
      <ItemList items={items} className="all-item-grid" />
      <Pagination totalPage={totalPage} currentPage={page} setPage={setPage} />
    </>
  );
}

export default AllItemList;
