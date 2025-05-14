'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

interface ErrorModalProps {
  isOpen: boolean;
  errorMessage: string;
  onClose: () => void;
}

export default function ConfirmModal({ isOpen, errorMessage, onClose }: ErrorModalProps) {
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
      <div className="bg-white px-[187px] py-[68px] tablet:px-[90px] tablet:py-[52px] rounded-lg shadow-lg text-center">
        <p className="mb-[42px] font-bold">{errorMessage}</p>
        <Button
          variant="roundedS"
          onClick={onClose}
          onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onClose();
            }
          }}
          ref={confirmButtonRef}
          className="px-[46px] py-[11px] bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          확인
        </Button>
      </div>
    </div>,
    modalRoot
  );
}
