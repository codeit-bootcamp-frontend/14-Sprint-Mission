import React from 'react';
import styles from './DropdownMenu.module.css';
import clsx from 'clsx';


function DropdownMenu({isOpen ,children}) {
  return (
    <div className={clsx(styles.dropdown, `${isOpen ? 'scale-y-100' : 'scale-y-0'} transition-transform origin-top absolute top-8 right-0 py-2 z-40 w-36 rounded-lg border border-Cool-Gray-200)] bg-white text-secondary_500 flex flex-col mobile:w-[100px]`)}>
      {children}
    </div>
  );
}
export default DropdownMenu;
