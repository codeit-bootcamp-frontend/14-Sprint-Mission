import { useEffect, useRef } from 'react';
import './Dropdown.css';

function Dropdown({ items, isOpen, onClose }) {
  console.log(isOpen);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <ul className="commentDropdown" ref={dropdownRef}>
        {items.map((item, index) => (
          <li key={index} onClick={item.onClick}>
            {item.label}
          </li>
        ))}
      </ul>
    )
  );
}

export default Dropdown;
