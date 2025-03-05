import { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import { getProducts } from '../api/api';
import Product from '../components/common/Product';
import './ProductListPage.css';
import Select from '../components/common/Select';
import Pagination from '../components/common/Pagination';
import { Link } from 'react-router-dom';
import useWindowWidth from '../components/hooks/useWindowWidth';
import useProducts from '../components/hooks/useProducts';

// select prop
const selectBox = [
  { label: '최신순', value: 'recent' },
  { label: '좋아요순', value: 'favorite' },
];

// pageSize 계산 함수
const getPageSize = (width) => {
  if (width >= 1024) {
    return { pageSize: 10, bestPageSize: 4 };
  } else if (width >= 640) {
    return { pageSize: 6, bestPageSize: 2 };
  } else {
    return { pageSize: 4, bestPageSize: 1 };
  }
};

function ProductListPage() {
  const [sortOrder, setSortOrder] = useState('recent');
  const [keyword, setkeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowWidth();
  const { pageSize, bestPageSize } = getPageSize(windowWidth);
  const { products, totalProductsCount } = useProducts({
    sortOrder,
    currentPage,
    pageSize,
  });
  const { products: bestProducts } = useProducts({
    sortOrder: 'favorite',
    currentPage: 1,
    pageSize: bestPageSize,
  });
  const totalPages = Math.ceil(totalProductsCount / pageSize);

  // 상품 정렬 기준 변경
  const handleChange = (value) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main className="market">
        <div className="best-container">
          <h2>베스트 상품</h2>
          <div className="best-products">
            {bestProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="all-container">
          <div className="filter">
            <div className="row">
              <h2>전체</h2>
              <button className="add-item button mobile">상품 등록하기</button>
            </div>
            <div className="row">
              <form>
                <input
                  className="search-bar"
                  name="search"
                  type="text"
                  placeholder="검색할 상품을 입력해주세요"
                />
              </form>
              <button className="add-item button desktop">
                <Link to={`/additem`}>상품 등록하기</Link>
              </button>
              <Select
                className="select"
                selectBox={selectBox}
                onSelect={handleChange}
              />
            </div>
          </div>
          <div className="all-products">
            {products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="pagination-container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
}

export default ProductListPage;
