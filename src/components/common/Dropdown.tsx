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
  triggerElementId?: string;
}

function Dropdown({ items, isOpen, onClose, triggerElementId }: DropdownProps) {
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      // 트리거 요소(이미지)를 클릭한 경우 무시
      if (triggerElementId && target.id === triggerElementId) {
        return;
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
