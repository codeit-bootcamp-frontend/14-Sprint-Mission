import { useEffect, useRef, useState } from "react";
import "./Select.css";
import { FaCaretDown, FaSortAmountDown } from "react-icons/fa";

function Select({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("최신순");
  const selectRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSelect(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <div className="select-container" ref={selectRef} onClick={toggleOpen}>
      <div className="selected-option">
        {selectedOption}
        <FaCaretDown size={24} />
      </div>
      <FaSortAmountDown className="sort-icon" />
      <ul className={`options ${isOpen ? "show" : ""}`}>
        <li
          onClick={() =>
            handleOptionClick({ label: "최신순", value: "recent" })
          }
        >
          최신순
        </li>
        <li
          onClick={() =>
            handleOptionClick({ label: "좋아요순", value: "favorite" })
          }
        >
          좋아요순
        </li>
      </ul>
    </div>
  );
}

export default Select;
