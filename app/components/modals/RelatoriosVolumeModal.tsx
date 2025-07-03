'use client';
import { useAppContext } from '../../contexts/AppContext';

interface ModalProps {
  isOpen: boolean;
}

export default function RelatoriosVolumeModal({ isOpen }: ModalProps) {
  const { hideModal } = useAppContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Relatório de Volume</h2>
        <p className="text-gray-600 mb-4">Volume total nos últimos 30 dias: <span className="font-bold">2.500 Litros</span></p>
        <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
          <p className="text-gray-500">[Gráfico de Barras - Volume por Semana]</p>
        </div>
        <div className="flex justify-end mt-6">
          <button type="button" onClick={hideModal} className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Fechar</button>
        </div>
      </div>
    </div>
  );
}
