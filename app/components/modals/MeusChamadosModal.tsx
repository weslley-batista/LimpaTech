'use client';
import { useAppContext } from '../../contexts/AppContext';

interface ModalProps {
  isOpen: boolean;
}

export default function MeusChamadosModal({ isOpen }: ModalProps) {
  const { hideModal } = useAppContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Meus Chamados</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded-md">
            <p className="font-semibold">Descarte irregular</p>
            <p className="text-sm text-gray-500">Rua das Flores, 123</p>
            <p className="text-sm font-bold text-yellow-600 mt-2">Status: Em Análise</p>
          </li>
          <li className="border p-4 rounded-md">
            <p className="font-semibold">Lixeira cheia</p>
            <p className="text-sm text-gray-500">Praça da Matriz</p>
            <p className="text-sm font-bold text-green-600 mt-2">Status: Resolvido</p>
          </li>
        </ul>
        <div className="flex justify-end mt-6">
          <button type="button" onClick={hideModal} className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Fechar</button>
        </div>
      </div>
    </div>
  );
}
