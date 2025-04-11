'use client';
import { redirect } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import arrowDownIcon from '@/public/assets/icons/arrow-down-icon.svg';
import filterIcon from '@/public/assets/icons/filter-icon.svg';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

interface Label {
  name: string;
  value: string;
}

interface SelectProps {
  labels: Label[];
}

function Select({ labels }: SelectProps) {
  const [name, setName] = useState<string>(labels[0].name);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleValueClick = (e: MouseEvent<HTMLLIElement>) => {
    setName(e.currentTarget.textContent || '');
    const order = e.currentTarget.getAttribute('value');
    setIsOpen(false);
    redirect(`/boards?orderBy=${order}`);
  };

  return (
    <div className="relative">
      <div
        className="border border-gray-200 rounded-[12px]  font-[400] text-[16px] cursor-pointer"
        onClick={handleOpenClick}
      >
        {!isMobile ? (
          <div className="flex justify-between px-[20px] py-[12px] w-[130px] h-[42px] items-center">
            {name}
            <Image src={arrowDownIcon} alt="arrow down" width={24} />
          </div>
        ) : (
          <Image
            className="w-[24px] h-[24px] m-[10px]"
            src={filterIcon}
            alt="filter"
            width={24}
          />
        )}
      </div>
      {isOpen && (
        <ul
          className={`absolute ${
            !isMobile ? 'left-0' : 'right-0'
          } top-[48px] border bg-white z-50 rounded-[12px] overflow-hidden`}
        >
          {labels.map((label, index) => (
            <li
              className="flex justify-center items-center w-[130px] h-[44px] cursor-pointer hover:bg-gray-100"
              key={index}
              onClick={handleValueClick}
              value={label.value}
            >
              {label.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
