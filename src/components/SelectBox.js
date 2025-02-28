import styles from './SelectBox.module.css';
import Icon from '../components/Icon';
import { useRef } from 'react';


function SelectBoxList ( {  ItemValue, Event, ItemLabel } ) {
  const handleClick = () => Event(ItemValue);
  return (
    <li onClick={handleClick}><button type="button">{ItemLabel}</button></li>
  );
}

function SelectBox( { options, current , ClickEvent, screenType } ) {
  const selectBoxRef = useRef();

  const handleClickToggle = () => {
    selectBoxRef.current.classList.toggle(styles.active);
  };

  return (
    <section className={styles.selectBox}  >
        <button type="button" className={styles.selectBtn} onClick={handleClickToggle}>
          { screenType === 'mobile' ? 
            <Icon iconName='sort' alt='select box'/>
          :
            <>
              <span>{( current === options[0].value ) ? options[0].label : options[1].label }</span>
              <Icon iconName='arrowDown' alt='select box'/>
            </>
          }
        </button>
        <ul ref={selectBoxRef} className={styles.selectboxOption}>
          {options.map((Item , index) => (
            <SelectBoxList key={index} ItemValue={Item.value} Event={ClickEvent} ItemLabel={Item.label} />
          ))}
        </ul>
    </section>
  );
}

export default SelectBox;
