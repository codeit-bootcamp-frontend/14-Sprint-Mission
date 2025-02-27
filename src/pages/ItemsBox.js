import styles from './ItemsBox.module.css';
import { addGetData } from '../api/index';
import { useState, useEffect, useCallback } from 'react';
import ProdListAll from '../components/Product/ProdListAll'
import Container from '../components/Container';
import Button from '../components/Button';
import SelectBox from '../components/SelectBox';
import PageNation from '../components/PageNation';
import Icon from '../components/Icon';


function ItemsBox() {
  
  const [totalCount, setTotalCount] =  useState(0);
  const orderOptions = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];

  //screenType 지정? 
  const screenTypeValue = [767,1199];
  const screen = ( WinWidth ) => ( WinWidth < screenTypeValue[0]) ? 'mobile' : ( WinWidth < screenTypeValue[1]) ? 'tablet' : 'desktop';
  const [screenType, setScreenType] = useState(String(screen(window.innerWidth)));

  //베스트 상품 반응형 width 기준값
  const WinBestValue = [1,2,4,[1,2,4]];
  const WinWidthCountBest = ( WinWidth ) => ( WinWidth < screenTypeValue[0]) ? WinBestValue[0] : ( WinWidth < screenTypeValue[1]) ? WinBestValue[1] : WinBestValue[2];
  //베스트 상품 쿼리 초기값
  const INITIALQUERYBEST = { 
    page: 1, 
    pageSize: WinWidthCountBest(window.innerWidth), 
    orderBy: 'favorite', 
    keyword: '' 
  };

  const [ItemsBest, setItemsBest] = useState([]); 
  const [QueryBest, setQueryBest] = useState(INITIALQUERYBEST);

  const [loading, setLoading] = useState(true);
  const [loadingBest, setLoadingBest] = useState(true);

  //반응형 width 기준값
  const WinValue = [4,6,10,[2,3,5]]; 
  const WinWidthCount = ( WinWidth ) => ( WinWidth < screenTypeValue[0]) ? WinValue[0] : ( WinWidth < screenTypeValue[1]) ? WinValue[1] : WinValue[2];
  //쿼리 초기값
  const INITIALQUERY = { 
    page: 1, 
    pageSize: WinWidthCount(window.innerWidth), 
    orderBy: 'recent', 
    keyword: '' 
  };

  const [Items, setItems] = useState([]);
  const [Query, setQuery] = useState(INITIALQUERY);

  //Query 값으로 상품데이터를 가져옵니다. 
  const handleLoadBest = async () => {
    let result;
    try {
      setLoadingBest(true);
      result = await addGetData(QueryBest);
      const { list } = result;
      setItemsBest(list);
    } catch (error) {
      console.error('데이터 가져오기 오류:', error);
    } finally {
      setLoadingBest(false);
    }
  };

  const handleLoad = async () => {
    let result;
    try {
      setLoading(true);
      result = await addGetData(Query);
      const { list, totalCount } = result;
      setItems(list);
      setTotalCount(totalCount);
    } catch (error) {
      console.error('데이터 가져오기 오류:', error);
    } finally {
      setLoading(false);
    }
  };


  // Query 값에 의존하여 상품 리렌더링
  useEffect(() => {
    handleLoad();
    handleLoadBest();
  }, [Query, QueryBest]);

  // 검색하거나, 정렬순 또는 페이징을 클릭하지 않고 페이지 재렌더링때 쿼리 초기화
  useEffect(() => {
    setQuery(INITIALQUERY); 
  }, []);
      
  // resize시 pageSize 
  const handleResize = useCallback(() => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        const width = window.innerWidth;

        const ScreenCount = screen(width);
        setScreenType(String(ScreenCount));

        const Count = WinWidthCount(width);
        setQuery(prev => ({...prev , pageSize:Count}));

        const CountBest = WinWidthCountBest(width);
        setQueryBest(prev => ({...prev , pageSize:CountBest}));

      }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // 페이지네이션 클릭시 page
  const handlePageNationClick = (num) => {
    setQuery(prev => ({...prev , page:num}));
  };

  // 셀렉터 클릭시 orderBy
  const handleSelectBoxClick = (value) => {
    setQuery(prev => ({ ...prev, orderBy: value, page: 1}));
  };


  return (
    <>
      <Container>
        <div className={styles.BestProdListTitle}>
          <div className='left'>
            <div className='title'>베스트 상품</div>
          </div>
        </div>
      </Container>
      { loadingBest === true ? 
      <Container><div className={styles.loadingBox}> 페이지 로딩중입니다. </div></Container> 
      : 
      <ProdListAll ItemsData={ItemsBest} pageColumn={WinBestValue[3]} screenType={screenType}/> 
      }
      <Container>
        <div className={styles.ProdListTitle}>
          <div className='left'>
            <div className={styles.title}>전체상품</div>
          </div>
          <div className='right'>
            <form className={styles.prodSearch}>
              <div className={styles.prodSearchWrap}>
                <Icon iconName='search' alt='search box'/>
                <input
                  name="keyword"
                  type='text'
                  placeholder="검색할 상품을 입력해주세요"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      let  SearchValue = e.target.value
                      setQuery((prev) => ({...prev, keyword: SearchValue, page: 1 }));
                    }
                  }}
                />
              </div>
            </form>
            <Button link="Additem" variant="roundedSS" className={styles.prodAddBtn} >상품 등록하기</Button>
            <SelectBox options={orderOptions} screenType={screenType} current={Query.orderBy} ClickEvent={handleSelectBoxClick} />
          </div>
        </div>
      </Container>
      { loading === true ? 
        <Container><div className={styles.loadingBox}> 페이지 로딩중입니다. </div></Container> 
        : 
        <ProdListAll ItemsData={Items} pageColumn={WinValue[3]} screenType={screenType} /> 
      }
      <PageNation current={Query.page} page='5' totalNum={totalCount} size={Query.pageSize} ClickEvent={handlePageNationClick} />
    </>
  );
}

export default ItemsBox;