import React from 'react';
import Icon from './Icon';


const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex top-0 left-0 w-full h-full items-center justify-center  bg-opacity-30 z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl relative  border border-cool-gray-200">
        {children}
      </div>
    </div>
  );
};

export default Modal;