import { useState, useCallback } from 'react';

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openModal = useCallback((msg: string) => {
    setModalMessage(msg);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalMessage('');
  }, []);

  return {
    isModalOpen, 
    modalMessage, 
    openModal, 
    closeModal
  };
}


export function useConfirmModal() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');

  const openConfirmModal = useCallback((msg: string) => {
    setConfirmMessage(msg);
    setIsConfirmOpen(true);
  }, []);

  const closeConfirmModal = useCallback(() => {
    setIsConfirmOpen(false);
    setConfirmMessage('');
  }, []);

  return {
    isConfirmOpen,
    confirmMessage,
    openConfirmModal,
    closeConfirmModal,
  };
}