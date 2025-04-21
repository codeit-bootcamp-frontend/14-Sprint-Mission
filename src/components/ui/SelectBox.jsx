import React from 'react';
import { useState } from 'react';
import styles from './SelectBox.module.css';
import Icon from './Icon';
import clsx from 'clsx';


function SelectBoxList ( {  ItemValue, Event, ItemLabel } ) {
  const handleClick = () => Event(ItemValue);
  return (
    <li onClick={handleClick}><button type="button">{ItemLabel}</button></li>
  );
}

function SelectBox( { options, current , clickEvent, screenType } ) {

  const [isSelect, setIsSelect] = useState(false);
  const handleClickToggle = () => {
    setIsSelect((prev) => !prev);  // 현재 상태를 반전시킴
  };

  return (
    <section className={styles.selectBox}  >
        <button type="button" className={styles.selectBtn} onClick={handleClickToggle}>
          { screenType === 0 ? 
            <Icon iconName='sort' alt='select box'/>
          :
            <>
              <span>{( current === options[0].value ) ? options[0].label : options[1].label }</span>
              <Icon iconName='arrowDown' alt='select box'/>
            </>
          }
        </button>
        <ul className={clsx(styles.selectboxOption, { [styles.active]: isSelect })}>
          {options.map((item , index) => (
            <SelectBoxList key={index} ItemValue={item.value} Event={clickEvent} ItemLabel={item.label} />
          ))}
        </ul>
    </section>
  );
}

export default SelectBox;
