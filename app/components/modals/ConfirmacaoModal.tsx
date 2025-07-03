'use client';
import { useAppContext } from '../../contexts/AppContext';
import { Check } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
}

export default function ConfirmacaoModal({ isOpen }: ModalProps) {
  const { hideModal, confirmationMessage } = useAppContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sucesso!</h2>
        <p className="text-gray-600 mb-6">{confirmationMessage}</p>
        <button onClick={hideModal} className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Ok</button>
      </div>
    </div>
  );
}
