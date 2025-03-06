import styles from './PageNation.module.css';
import Icon from '../components/Icon';

function PageNationList ({list, clickEvent, isActive}){
  const handleClick = () => clickEvent(list);
  return (
    <li key={list} onClick={handleClick} className={isActive ? styles.active :''}>{list}</li>
  )
}

function PageNation({ current , page , totalNum , size , clickEvent}){


  const totalPages = Math.ceil(totalNum / size);

  function getNearestMultiplesOfFive(num) {
    if( num > 0 || num % Number(page) !== 0){
      const lower = Math.floor((num - 1) / 5) * 5 + 1;
      const upper = lower + 4;
      return { lower , upper };
    } 
  } 

  const getPageNation = (num) => {
    const pages = getNearestMultiplesOfFive(num);
    const first = pages.lower;
    const last = pages.upper > totalPages ? totalPages : pages.upper;
  
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
        <li className={ pageFirst > 1 ? styles.prev : styles.disabled } onClick={handleClickPrev} ><Icon iconName='statusActiveL' alt='prev'/></li>
        {getPageNation(current).map(list => (
          <PageNationList key={list} clickEvent={clickEvent} list={list} isActive={current === list}/>
        ))}
        <li className={ pageLast < totalPages ? styles.next : styles.disabled } onClick={handleClickNext}><Icon iconName='statusActiveR' alt='next'/></li>
      </ul>
    )
  )
};

export default PageNation;