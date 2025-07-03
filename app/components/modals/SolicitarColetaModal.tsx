'use client';
import { FormEvent } from 'react';
import { useAppContext } from '../../contexts/AppContext';

interface ModalProps {
  isOpen: boolean;
}

export default function SolicitarColetaModal({ isOpen }: ModalProps) {
  const { hideModal, submitAndShowConfirmation } = useAppContext();

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    hideModal();
    submitAndShowConfirmation("Sua solicitação de coleta foi confirmada.");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Solicitar Coleta Extraordinária</h2>
        <p className="text-gray-600 mb-6">Informe o volume estimado para a coleta.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="volume-lixo" className="block text-sm font-medium">Volume (litros)</label>
            <input type="number" id="volume-lixo" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Ex: 500" />
          </div>
          <div className="mb-6">
            <label htmlFor="observacoes" className="block text-sm font-medium">Observações</label>
            <textarea id="observacoes" rows={3} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Ex: Material reciclável, urgência, etc."></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={hideModal} className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancelar</button>
            <button type="submit" className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Confirmar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
