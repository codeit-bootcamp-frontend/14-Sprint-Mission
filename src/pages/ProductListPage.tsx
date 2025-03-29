import Navbar from '../components/common/Navbar';
import './ProductListPage.css';
import Select from '../components/common/Select';
import Pagination from '../components/common/Pagination';
import { Link, useSearchParams } from 'react-router-dom';
import useWindowWidth from '../components/hooks/useWindowWidth';
import useProducts from '../components/hooks/useProducts';
import BestProducts from '../components/domain/products/BestProducts';
import AllProducts from '../components/domain/products/AllProducts';
import Search from '../components/common/Search';
import { SortOrder, SelectBoxValue } from '../types/types';

const selectBox: SelectBoxValue[] = [
  { label: '최신순', value: 'recent' },
  { label: '좋아요순', value: 'favorite' },
];

// pageSize 계산 함수
const getPageSize = (width: number) => {
  if (width >= 1024) {
    return { pageSize: 10, bestPageSize: 4 };
  } else if (width >= 640) {
    return { pageSize: 6, bestPageSize: 2 };
  } else {
    return { pageSize: 4, bestPageSize: 1 };
  }
};

function ProductListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderParams = searchParams.get('orderBy');
  const sortOrder: SortOrder =
    orderParams === 'favorite' ? 'favorite' : 'recent';
  const keyword = searchParams.get('keyword') || '';
  const currentPage = Number(searchParams.get('page')) || 1;
  const windowWidth = useWindowWidth();
  const { pageSize, bestPageSize } = getPageSize(windowWidth);
  const { products, totalProductsCount } = useProducts({
    sortOrder,
    currentPage,
    pageSize,
    keyword,
  });
  const { products: bestProducts } = useProducts({
    sortOrder: 'favorite',
    currentPage: 1,
    pageSize: bestPageSize,
  });
  const totalPages = Math.ceil(totalProductsCount / pageSize);

  // 상품 정렬 기준 변경
  const handleChange = (value: SelectBoxValue['value']): void => {
    setSearchParams({ ...searchParams, orderBy: value, page: '1' });
  };

  const handlePageChange = (pageNumber: number): void => {
    setSearchParams({ ...searchParams, page: pageNumber.toString() });
  };

  // const handleKeyChange = (keyword) => {
  //   setSearchParams({ ...searchParams, keyword: keyword });
  // };

  const handleSubmit = (newKeyword: string): void => {
    setSearchParams(
      newKeyword ? { ...searchParams, keyword: newKeyword, page: '1' } : {}
    );
  };

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main className="market">
        <div className="best-container">
          <h2>베스트 상품</h2>
          <BestProducts bestProducts={bestProducts} />
        </div>
        <div className="all-container">
          <div className="filter">
            <div className="row">
              <h2>전체</h2>
              <button className="add-item button mobile">상품 등록하기</button>
            </div>
            <div className="row">
              <Search keyword={keyword} onSubmit={handleSubmit} />
              <Link className="add-item button desktop" to={`/additem`}>
                상품 등록하기
              </Link>
              <Select selectBox={selectBox} onSelect={handleChange} />
            </div>
          </div>
          <AllProducts products={products} />
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
