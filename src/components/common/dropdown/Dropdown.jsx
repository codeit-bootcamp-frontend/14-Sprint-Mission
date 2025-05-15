import { useState, useEffect, useRef } from "react";
import arrowDown from "../../../asset/icon/arrow_down.png";
import sort from "../../../asset/icon/sort.png";
import "./dropdown.css";

export default function Dropdonw({ sortOption, setSortOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // 외부 클릭 시 감지용

  const handleSelect = (option) => {
    setSortOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="dropdown-button-text">
          {sortOption === "recent" ? "최신순" : "좋아요순"}
        </span>
        <img className="dropdown-icon" src={arrowDown} alt="정렬 아이콘" />
        <img className="sort-icon" src={sort} alt="정렬 아이콘" />
      </button>

      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item" onClick={() => handleSelect("recent")}>
            최신순
          </li>
          <li
            className="dropdown-item"
            onClick={() => handleSelect("favorite")}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}
