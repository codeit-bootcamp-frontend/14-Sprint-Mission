import React from 'react';
import styles from './PageNation.module.css';
import Icon from './Icon';


interface PageNationListProps {
  list: number;
  onClick: (list: number) => void;
  current: number;
}

function PageNationList ({list, onClick, current}: PageNationListProps){
  const handleClick = () => onClick(list);
  return (
    <li onClick={handleClick} className={ list === Number(current) ? styles.active : ''}>{list}</li>
  )
}

interface PageNationProps {
  current: number;
  page: number;
  totalNum: number | undefined;
  size: number;
  clickEvent: (page: number) => void;
}

function PageNation({ current , page , totalNum , size , clickEvent}: PageNationProps){


  if( totalNum === undefined || size === 0) return null;
  const totalPages = Math.ceil(totalNum / size);

  function getNearestMultiplesOfFive(num: number) {
    if( num > 0 || num % Number(page) !== 0){
      const lower = Math.floor((num - 1) / 5) * 5 + 1;
      const upper = lower + 4;
      return { lower , upper };
    } 
  } 

  const getPageNation = (num: number) => {
    const pages = getNearestMultiplesOfFive(num);
    
    if (!pages) return [];

    const first = pages?.lower;
    const last = pages?.upper > totalPages ? totalPages : pages?.upper;
  
    return Array.from( { length: last - first + 1 }, (_, i) => first + i);
  }
  
  const pageArr = getPageNation(current);
  const pageFirst = pageArr[0];
  const pageLast = pageArr[Number(page) - 1];

  const handleClickPrev = () => {
  if (pageFirst > 1) {
    clickEvent(pageFirst - 1);
    }
  };

  const handleClickNext = () => {
    if (pageLast < totalPages) {
      clickEvent(pageLast + 1);
    }
  };

  return (
    ( totalPages < 2) ? null : (
      <ul className={styles.pageNation}>
        <li className={ pageFirst > 1 ? styles.prev : styles.disabled } onClick={handleClickPrev} ><Icon iconName='statusActiveL' width="16" height="16" alt='prev'/></li>
        {pageArr.map(list => (
          <PageNationList key={list} onClick={clickEvent} list={list} current={current}/>
        ))}
        <li className={ pageLast < totalPages ? styles.next : styles.disabled } onClick={handleClickNext}><Icon iconName='statusActiveR' width="16" height="16"  alt='next'/></li>
      </ul>
    )
  )
};

export default PageNation;