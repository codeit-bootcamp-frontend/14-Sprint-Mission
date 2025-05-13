'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';
import Button from './Button';


interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onclick: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, onclick, message }) => {
  const [mounted, setMounted] = useState(false);
    const confirmButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && confirmButtonRef.current) {
      confirmButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl relative  border border-cool-gray-200">
        <Icon iconName="check"  width="12" height="12"  className="bg-[var(--primary_100)] mx-auto mb-6" alt="check icon" />
        <p className="mb-8 text-center">{message}</p>
        <div className="flex justify-center gap-2">
          <Button variant="lined_btn" onClick={() => closeModal()}>아니요</Button>
          <Button
            variant="roundedS"
            onClick={() => onclick()}
            onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onclick();
              }
            }}
            ref={confirmButtonRef}
          >확인</Button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;