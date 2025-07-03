'use client';
import { FormEvent } from 'react';
import { useAppContext } from '../../contexts/AppContext';

interface ModalProps {
  isOpen: boolean;
}

export default function AlertasConfigModal({ isOpen }: ModalProps) {
  const { hideModal, submitAndShowConfirmation } = useAppContext();

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    hideModal();
    submitAndShowConfirmation("Suas preferências de alerta foram salvas.");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Configurar Alertas</h2>
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="alert1" className="text-gray-700">Notificar quando o caminhão estiver a 15 min</label>
                    <input id="alert1" type="checkbox" className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="alert2" className="text-gray-700">Enviar resumo diário de coletas</label>
                    <input id="alert2" type="checkbox" className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="alert3" className="text-gray-700">Alertar sobre mudanças na rota</label>
                    <input id="alert3" type="checkbox" className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500" defaultChecked />
                </div>
            </div>
            <div className="flex justify-end mt-8 gap-4">
                <button type="button" onClick={hideModal} className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancelar</button>
                <button type="submit" className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Salvar</button>
            </div>
        </form>
      </div>
    </div>
  );
}
