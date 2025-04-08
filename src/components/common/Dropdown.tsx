import { MouseEventHandler, useEffect, useRef } from 'react';
import './Dropdown.css';

interface DropdownItem {
  label: string;
  onClick: MouseEventHandler;
}

interface DropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}

function Dropdown({ items, isOpen, onClose }: DropdownProps) {
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        console.log('close');
        onClose();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <ul className="commentDropdown" ref={dropdownRef}>
          {items.map((item, index) => (
            <li key={index} onClick={item.onClick}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Dropdown;
