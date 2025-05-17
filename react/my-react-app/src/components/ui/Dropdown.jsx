import React, { useRef, useEffect } from "react";
import "./Dropdown.css";

function Dropdown({
  options,
  selectedValue,
  onChange,
  isMobile = false,
  isOpen = false,
  setIsOpen,
}) {
  const dropdownRef = useRef(null);

  // 외부 클릭 시 드롭다운 닫기 (모든 화면 크기에 적용)
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, setIsOpen]);

  // 현재 선택된 옵션의 레이블 찾기
  const getSelectedLabel = () => {
    const option = options.find((opt) => opt.value === selectedValue);
    return option ? option.label : "";
  };

  // 모바일 버전 - 이미지 버튼 사용
  if (isMobile) {
    return (
      <div className="custom-dropdown-container mobile" ref={dropdownRef}>
        <button
          className="dropdown-button mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <img
            src="/images/icons/btn_sort.png"
            alt="정렬"
            className="sort-icon"
          />
        </button>

        {isOpen && (
          <ul className="dropdown-menu" role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className={`dropdown-option ${
                  selectedValue === option.value ? "active" : ""
                }`}
                onClick={() => {
                  onChange({ target: { value: option.value } });
                  setIsOpen(false);
                }}
                role="option"
                aria-selected={selectedValue === option.value}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // 데스크탑/태블릿 버전 - 텍스트 버튼 사용
  return (
    <div className="custom-dropdown-container desktop" ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {getSelectedLabel()}
        <span className="arrow-down">▼</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu" role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={`dropdown-option ${
                selectedValue === option.value ? "active" : ""
              }`}
              onClick={() => {
                onChange({ target: { value: option.value } });
                setIsOpen(false);
              }}
              role="option"
              aria-selected={selectedValue === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
