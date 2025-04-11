import { useState, useEffect, useRef } from "react";

import arrowDownIcon from "../../assets/arrow-down-icon.png";
import sortIcon from "../../assets/sort-icon.png";

const SortDropdown = ({ selected, setSelected, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div
        className={`relative ${isMobile ? "w-[42px]" : "w-[130px]"}`}
        ref={dropdownRef}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full ${
            isMobile ? "px-0" : "px-4"
          } py-2 border rounded-[12px] text-left bg-white flex items-center justify-center`}
        >
          {isMobile ? (
            <img
              src={sortIcon}
              alt="정렬"
              className="w-[24px] h-[24px] object-contain mx-auto"
            />
          ) : (
            <>
              <span>{selected}</span>
              <img src={arrowDownIcon} className="w-[24px] h-[24px]" />
            </>
          )}
        </button>
        {isOpen && (
          <ul className="absolute top-full right-0 w-[120px] border rounded-[12px] mt-1 bg-white shadow-md z-10 overflow-hidden">
            <li
              onClick={() => {
                setSelected("최신순");
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 border-b"
            >
              최신순
            </li>
            <li
              onClick={() => {
                setSelected("좋아요순");
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100"
            >
              좋아요순
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
