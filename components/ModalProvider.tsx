'use client';

import React, { createContext, useContext, useState } from 'react';
import ApplyModal from './ApplyModal';

interface ModalContextType {
  openApplyModal: () => void;
  closeApplyModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openApplyModal = () => setIsOpen(true);
  const closeApplyModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openApplyModal, closeApplyModal }}>
      {children}
      <ApplyModal isOpen={isOpen} onClose={closeApplyModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
