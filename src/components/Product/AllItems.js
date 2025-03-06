import ProdListAll from './ProdListAll';
import useItems from '../../hooks/useItems';
import { useEffect } from 'react';
import Button from '../Button';
import SelectBox from '../SelectBox';
import PageNation from '../PageNation';
import LoadingBox from '../LoadingBox';
import Container from '../Container';
import Icon from '../Icon';
import styles from './AllItems.module.css';

function AllItems({ screenType }) {

  const orderOptions = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];

  //반응형 width 기준값
  const visibleItems = {
    length : [4,6,10],
    column : [2,3,5],
  }; 

  //쿼리 초기값
  const INITIAL_QUERY = { 
    page: 1, 
    pageSize: visibleItems.length[screenType], 
    orderBy: 'recent', 
    keyword: '' 
  };

  const { loading, items, itemQuery, totalCount, setItemQuery } = useItems(INITIAL_QUERY);

  // resize시 pageSize 업데이트 (반응형)
  useEffect(() => {
    setItemQuery(prev => ({...prev , pageSize:visibleItems.length[screenType]}));
  }, [screenType, setItemQuery]); 

  // 페이지네이션 클릭시 page
  const handlePageNationClick = (num) => {
    setItemQuery(prev => ({...prev , page:num}));
  };

  // 셀렉터 클릭시 orderBy
  const handleSelectBoxClick = (value) => {
    setItemQuery(prev => ({ ...prev, orderBy: value, page: 1}));
  };

  return (
    <>
    <Container>
        <div className={styles.prodListTitle}>
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
                      let  searchValue = e.target.value
                      setItemQuery((prev) => ({...prev, keyword: searchValue, page: 1 }));
                    }
                  }}
                />
              </div>
            </form>
            <Button link="Additem" variant="roundedSS" className={styles.prodAddBtn} >상품 등록하기</Button>
            <SelectBox options={orderOptions} screenType={screenType} current={itemQuery.orderBy} clickEvent={handleSelectBoxClick} />
          </div>
        </div>
      </Container>
      { loading === true ? 
        <LoadingBox />
        : 
        <ProdListAll 
        itemsData={items} 
        pageColumn={visibleItems.column[screenType]} /> 
      }
      <PageNation current={itemQuery.page} page='5' totalNum={totalCount} size={itemQuery.pageSize} clickEvent={handlePageNationClick} />
    </>
  );
}

export default AllItems;
