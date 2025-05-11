import React from 'react';
import { createPortal } from 'react-dom';


interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="flex w-full h-full items-center justify-center  bg-opacity-30 z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl relative  border border-cool-gray-200">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;