import { useEffect, useRef, useState } from 'react';
import './Select.css';
import { FaCaretDown, FaSortAmountDown } from 'react-icons/fa';
import { Label, SelectBoxValue, SortOrder } from '../../types/types';

interface SelectValue {
  onSelect: (e: SortOrder) => void;
  selectBox: SelectBoxValue[];
}

function Select({ onSelect, selectBox }: SelectValue) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Label>(
    selectBox[0].label
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectBoxValue) => {
    setSelectedOption(option.label);
    console.log(selectedOption);
    setIsOpen(false);
    onSelect(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);

  return (
    <div className="select-container" ref={selectRef} onClick={toggleOpen}>
      <div className="selected-option">
        {selectedOption}
        <FaCaretDown size={24} />
      </div>
      <FaSortAmountDown className="sort-icon" />
      <ul className={`options ${isOpen ? 'show' : ''}`}>
        {selectBox.map((select) => (
          <li
            key={select.label}
            onClick={() =>
              handleOptionClick({ label: select.label, value: select.value })
            }
          >
            {select.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
