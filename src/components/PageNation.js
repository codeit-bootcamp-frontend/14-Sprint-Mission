import styles from './PageNation.module.css';
import Icon from '../components/Icon';

function PageNationList ({list, ClickEvent, isActive}){
  const handleClick = () => ClickEvent(list);
  return (
    <li key={list} onClick={handleClick} className={isActive ? styles.active :''}>{list}</li>
  )
}

function PageNation({ current , page , totalNum , size , ClickEvent}){

  const pageNum = Number(page);

  function getNearestMultiplesOfFive(num) {
    if( num > 0 || num % pageNum !== 0){
      const lower = Math.floor((num - 1) / 5) * 5 + 1;
      const upper = lower + 4;
      return { lower , upper };
    } 
  } 

  const totalPages = Math.ceil(totalNum / size);

  const pages = getNearestMultiplesOfFive(current);
  const first = pages.lower;
  const last = pages.upper > totalPages ? totalPages : pages.upper;

 const pageNationArr = Array.from( { length: last - first + 1 }, (_, i) => first + i);
 
 const handleClickPrev = () => {
  if (first > 1) {
    ClickEvent(first - 1);
    }
  };

  const handleClickNext = () => {
    if (last < totalPages) {
      ClickEvent(last + 1);
    }
  };

  return (
    ( totalPages < 2) ? null : (
      <ul className={styles.pageNation}>
        <li className={ first > 1 ? styles.prev : styles.disabled } onClick={handleClickPrev} ><Icon iconName='statusActiveL' alt='prev'/></li>
        {pageNationArr.map(list => (
          <PageNationList key={list} ClickEvent={ClickEvent} list={list} isActive={current === list}/>
        ))}
        <li className={ last < totalPages ? styles.next : styles.disabled } onClick={handleClickNext}><Icon iconName='statusActiveR' alt='next'/></li>
      </ul>
    )
  )
};

export default PageNation;