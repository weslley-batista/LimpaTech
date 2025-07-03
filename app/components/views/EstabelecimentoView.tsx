'use client';
import { useAppContext } from '../../contexts/AppContext';
import { ArrowLeft, History, FileText, Bell, ChevronRight } from 'lucide-react';

export default function EstabelecimentoView() {
  const { navigateTo, showModal } = useAppContext();

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto bg-gray-50 shadow-2xl rounded-lg overflow-hidden text-gray-800">
            <header className="p-4 flex items-center justify-between bg-white border-b">
                <button onClick={() => navigateTo('landing')} className="text-gray-600 hover:text-green-600 flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Voltar
                </button>
                <h1 className="text-xl font-bold text-green-600">LimpaTech Pro</h1>
                <div className="w-24"></div>
            </header>
            <div className="flex flex-col md:flex-row">
                {/* Coluna Principal */}
                <div className="w-full md:w-1/2 p-8 border-r border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Olá, Shopping Center XYZ</h2>
                    <p className="text-gray-500 mb-8">Gerencie suas coletas de forma eficiente.</p>
                    
                    <div className="mt-6 p-6 rounded-xl bg-green-600 text-white shadow-lg text-center">
                        <p className="text-sm font-medium text-green-100">STATUS DA COLETA</p>
                        <p className="text-2xl font-bold mt-2">Próxima Coleta Agendada:</p>
                        <p className="text-4xl font-light mt-2">Hoje, 18:00</p>
                    </div>

                    <button onClick={() => showModal('solicitar-coleta')} className="w-full bg-green-500 text-white font-bold py-4 px-4 rounded-lg mt-8 hover:bg-green-700 transition-colors duration-300 text-lg shadow-md">
                        SOLICITAR COLETA EXTRAORDINÁRIA
                    </button>
                </div>
                {/* Coluna de Ações */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-6">Ferramentas e Relatórios</h3>
                    <div className="space-y-4">
                        <a href="#" onClick={(e) => { e.preventDefault(); showModal('historico'); }} className="flex items-center justify-between bg-white p-5 rounded-lg hover:bg-gray-100 transition-colors border shadow-sm">
                            <div className="flex items-center gap-4">
                                <History className="w-7 h-7 text-gray-500" />
                                <div>
                                    <span className="font-medium text-lg">Histórico de Coletas</span>
                                    <p className="text-sm text-gray-500">Veja todas as coletas passadas.</p>
                                </div>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-400" />
                        </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); showModal('relatorios-volume'); }} className="flex items-center justify-between bg-white p-5 rounded-lg hover:bg-gray-100 transition-colors border shadow-sm">
                            <div className="flex items-center gap-4">
                                <FileText className="w-7 h-7 text-gray-500" />
                                <div>
                                    <span className="font-medium text-lg">Relatórios de Volume</span>
                                    <p className="text-sm text-gray-500">Analise o volume de lixo gerado.</p>
                                </div>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-400" />
                        </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); showModal('alertas-config'); }} className="flex items-center justify-between bg-white p-5 rounded-lg hover:bg-gray-100 transition-colors border shadow-sm">
                            <div className="flex items-center gap-4">
                                <Bell className="w-7 h-7 text-gray-500" />
                                <div>
                                    <span className="font-medium text-lg">Configurar Alertas</span>
                                    <p className="text-sm text-gray-500">Personalize suas notificações.</p>
                                </div>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-400" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
