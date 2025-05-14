import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Icon from './Icon';


interface DropdownAction {
  label: string;
  onClick: () => void;
}

interface DropdownMenuProps {
  dropdownActions: DropdownAction[];
  className?: string;
}

function DropdownMenu({ dropdownActions, className }: DropdownMenuProps) {
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className={clsx( className)} ref={dropdownRef}>
      <div className="absolute top-0 right-0 cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
        <Icon iconName="ic_kebab" width="24" height="24" alt="드롭다운 버튼" />
      </div>
      {isOpen && (
        <div  className={clsx(`${isOpen ? 'scale-y-100' : 'scale-y-0'} transition-transform origin-top absolute top-8 right-0 py-2 z-40 w-32 rounded-lg border border-Cool-Gray-200)] bg-white text-secondary-500 flex flex-col mobile:w-[100px]`)}>
          {dropdownActions.map((action, index) => (
            <button 
              key={index} 
              className='py-2 hover:bg-secondary-50' 
              onClick={() => {
                setIsOpen(false);
                action.onClick();
              }}>
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default DropdownMenu;
