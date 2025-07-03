'use client';
import { useAppContext } from '../../contexts/AppContext';

interface ModalProps {
  isOpen: boolean;
}

export default function HistoricoColetasModal({ isOpen }: ModalProps) {
  const { hideModal } = useAppContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Histórico de Coletas</h2>
        <ul className="space-y-4 max-h-80 overflow-y-auto">
          <li className="border p-4 rounded-md flex justify-between items-center">
            <div>
              <p className="font-semibold">Coleta Padrão</p>
              <p className="text-sm text-gray-500">02/07/2025 - 18:05</p>
            </div>
            <span className="text-green-600 font-bold">Concluída</span>
          </li>
          <li className="border p-4 rounded-md flex justify-between items-center">
            <div>
              <p className="font-semibold">Coleta Extraordinária</p>
              <p className="text-sm text-gray-500">01/07/2025 - 10:20</p>
            </div>
            <span className="text-green-600 font-bold">Concluída</span>
          </li>
        </ul>
        <div className="flex justify-end mt-6">
          <button type="button" onClick={hideModal} className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Fechar</button>
        </div>
      </div>
    </div>
  );
}
