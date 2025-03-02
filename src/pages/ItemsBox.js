import styles from './ItemsBox.module.css';
import { useState, useEffect, useCallback } from 'react';
import Container from '../components/Container';
import BestItems from '../components/Product/BestItems';
import AllItems from '../components/Product/AllItems';


function ItemsBox() {

  const screenTypeValue = { 
    mobile: 767,
    tablet : 1199
  };

  const getScreenType = ( WinWidth ) => 
    ( WinWidth < screenTypeValue.mobile) 
    ? 0 : ( WinWidth < screenTypeValue.tablet) 
    ? 1 : 2;
  const [screenType, setScreenType] = useState(getScreenType(window.innerWidth));


  // resize시 pageSize 
  const handleResize = useCallback(() => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        const width = window.innerWidth;
        const screenCount = getScreenType(width);
        setScreenType(screenCount);
      }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <>
      <Container>
        <div className={styles.bestProdListTitle}>
          <div className='left'>
            <div className='title'>베스트 상품</div>
          </div>
        </div>
      </Container>
      <BestItems screenType={screenType}/> 
      <AllItems screenType={screenType}/> 
    </>
  );
}

export default ItemsBox;