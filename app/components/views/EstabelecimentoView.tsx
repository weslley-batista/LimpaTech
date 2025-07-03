'use client';
import { useAppContext } from '../../contexts/AppContext';
import { ArrowLeft, History, FileText, Bell, ChevronRight } from 'lucide-react';

export default function EstabelecimentoView() {
  const { navigateTo, showModal } = useAppContext();

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 min-h-screen shadow-2xl text-gray-800">
      <header className="p-4 flex items-center justify-between bg-white border-b">
        <button onClick={() => navigateTo('landing')} className="text-gray-600 hover:text-green-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-green-600">LimpaTech Pro</h1>
        <div className="w-6 h-6"></div>
      </header>
      <div className="p-6">
        <h2 className="text-lg text-gray-500">Shopping Center XYZ</h2>
        
        <div className="mt-6 p-5 rounded-xl bg-green-600 text-white shadow-lg">
          <p className="text-sm font-medium text-green-100">STATUS DA COLETA</p>
          <p className="text-2xl font-bold mt-2">Próxima Coleta Agendada:</p>
          <p className="text-xl font-light">Hoje, 18:00</p>
        </div>

        <button onClick={() => showModal('solicitar-coleta')} className="w-full bg-green-500 text-white font-bold py-4 px-4 rounded-lg mt-6 hover:bg-green-700 transition-colors duration-300 text-lg shadow-md">
          SOLICITAR COLETA EXTRAORDINÁRIA
        </button>

        <div className="mt-8 space-y-3">
          <a href="#" onClick={(e) => { e.preventDefault(); showModal('historico'); }} className="flex items-center justify-between bg-white p-4 rounded-lg hover:bg-gray-100 transition-colors border">
            <div className="flex items-center gap-4">
              <History className="w-6 h-6 text-gray-500" />
              <span className="font-medium">Histórico de Coletas</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); showModal('relatorios-volume'); }} className="flex items-center justify-between bg-white p-4 rounded-lg hover:bg-gray-100 transition-colors border">
            <div className="flex items-center gap-4">
              <FileText className="w-6 h-6 text-gray-500" />
              <span className="font-medium">Relatórios de Volume</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); showModal('alertas-config'); }} className="flex items-center justify-between bg-white p-4 rounded-lg hover:bg-gray-100 transition-colors border">
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 text-gray-500" />
              <span className="font-medium">Configurar Alertas</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
