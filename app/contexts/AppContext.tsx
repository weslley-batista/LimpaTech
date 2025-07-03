'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type ViewType = 'landing' | 'cidadao' | 'estabelecimento' | 'gestor' | 'denuncias' | 'relatorios-gestor';
type ModalType = 'reportar' | 'chamados' | 'solicitar-coleta' | 'historico' | 'relatorios-volume' | 'alertas-config' | 'confirmacao' | null;

interface AppContextProps {
  view: ViewType;
  modal: ModalType;
  confirmationMessage: string;
  navigateTo: (view: ViewType) => void;
  showModal: (modal: ModalType) => void;
  hideModal: () => void;
  submitAndShowConfirmation: (message: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<ViewType>('landing');
  const [modal, setModal] = useState<ModalType>(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const navigateTo = (targetView: ViewType) => {
    setView(targetView);
  };

  const showModal = (targetModal: ModalType) => {
    setModal(targetModal);
  };

  const hideModal = () => {
    setModal(null);
  };
  
  const submitAndShowConfirmation = (message: string) => {
      setConfirmationMessage(message);
      setModal('confirmacao');
  };

  return (
    <AppContext.Provider value={{ view, modal, confirmationMessage, navigateTo, showModal, hideModal, submitAndShowConfirmation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};