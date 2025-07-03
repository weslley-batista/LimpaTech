'use client';
import { FormEvent } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { UploadCloud } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
}

export default function ReportarProblemaModal({ isOpen }: ModalProps) {
  const { hideModal, submitAndShowConfirmation } = useAppContext();

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    hideModal();
    submitAndShowConfirmation("Seu reporte foi enviado e será analisado pela equipe.");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reportar um Problema</h2>
        <p className="text-gray-600 mb-6">Descreva o problema e, se possível, anexe uma foto para ajudar na identificação.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="problema-tipo" className="block text-sm font-medium text-gray-700">Tipo de Problema</label>
            <select id="problema-tipo" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
              <option>Descarte irregular de lixo</option>
              <option>Lixeira danificada ou cheia</option>
              <option>Coleta não realizada</option>
              <option>Outro</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="problema-desc" className="block text-sm font-medium text-gray-700">Descrição</label>
            <textarea id="problema-desc" rows={3} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Ex: Lixo acumulado em terreno baldio na Rua..."></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Anexar Foto</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={hideModal} className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancelar</button>
            <button type="submit" className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Enviar Reporte</button>
          </div>
        </form>
      </div>
    </div>
  );
}
