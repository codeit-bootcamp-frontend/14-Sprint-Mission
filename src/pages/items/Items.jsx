import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { productServices } from "../../api/productServices";
import Navbar from "../../components/layout/Navbar";
import Dropdown from "../../components/common/dropdown/Dropdown";
import ItemCard from "../../components/items/ItemCard";
import PagenationContainer from "../../components/common/pagenation/PagenationContainer";

import serchIcon from "../../asset/icon/search.svg";
import "./items.css";

export default function Items() {
  const [sort, setSort] = useState("recent");
  const [totalCount, setTotalCount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");

  const getResponsiveLimit = () => {
    const width = window.innerWidth;

    if (width < 768) {
      return { best: 1, recent: 4 };
    } else if (width < 1024) {
      return { best: 2, recent: 6 };
    } else {
      return { best: 4, recent: 10 };
    }
  };

  const getProducts = async (orderBy, pageNumber = 1, limit = 10) => {
    if (orderBy === "recent" || orderBy === "favorite") {
      const res = await productServices.getProducts(pageNumber, limit, orderBy);
      setAllProducts(res.list);
      setTotalCount(res.totalCount);
    } else if (orderBy === "best") {
      // best는 직접 정한 기준, favorite은 서버에서 받는 단어로 하드코딩
      const res = await productServices.getProducts(1, limit, "favorite");
      setBestProducts(res.list);
    }
  };

  useEffect(() => {
    const { recent } = getResponsiveLimit();
    getProducts(sort, pageNumber || 1, recent);
  }, [sort, pageNumber]);

  useEffect(() => {
    const { best } = getResponsiveLimit();
    getProducts("best", 1, best);
  }, []);

  return (
    <>
      <Navbar />
      <main className="items-container">
        <section className="best-section">
          <div className="section-title">베스트 상품</div>
          <article className="card-container">
            {bestProducts &&
              bestProducts.map((bestProduct) => (
                <ItemCard
                  key={bestProduct.id}
                  cardInfo={bestProduct}
                  cardType="best"
                />
              ))}
          </article>
        </section>
        <section className="all-section">
          <div className="all-header">
            <span className="section-title">전체 상품</span>
            <div className="all-header-right">
              <div className="search-box">
                <img
                  className="search-icon"
                  src={serchIcon}
                  alt="돋보기 아이콘"
                />
                <input placeholder="검색할 상품을 입력해주세요" />
              </div>
              <Link className="add-button" href="/additem">
                상품 등록하기
              </Link>
              <Dropdown sortOption={sort} setSortOption={setSort} />
            </div>
          </div>
          <div className="mobile-all-header">
            <div className="mobile-all-header-top">
              <span className="mobile-section-title">전체 상품</span>
              <Link className="add-button" href="/additem">
                상품 등록하기
              </Link>
            </div>
            <div className="mobile-all-header-bottom">
              <div className="search-box">
                <img
                  className="search-icon"
                  src={serchIcon}
                  alt="돋보기 아이콘"
                />
                <input placeholder="검색할 상품을 입력해주세요" />
              </div>
              <Dropdown sortOption={sort} setSortOption={setSort} />
            </div>
          </div>
          <article className="card-container">
            {allProducts &&
              allProducts.map((allProduct) => (
                <ItemCard
                  key={allProduct.id}
                  cardInfo={allProduct}
                  cardType="all"
                />
              ))}
          </article>
          <PagenationContainer
            totalCount={totalCount}
            itemsPerPage={10}
            setSearchParams={setSearchParams}
          />
        </section>
      </main>
    </>
  );
}
