'use client';
import { useAppContext } from '../../contexts/AppContext';
import { User, Store, BarChartBig, Trash2 } from 'lucide-react';

export default function LandingView() {
  const { navigateTo } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center max-w-7xl mx-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Trash2 size={48} className="text-green-600" />
          <h1 className="text-5xl font-bold text-gray-800">Limpa<span className="text-green-600">Tech</span></h1>
        </div>
        <p className="text-xl text-gray-600">Otimizando a gestão de resíduos para cidades mais limpas.</p>
        <p className="text-lg text-gray-500 pt-8">Selecione seu perfil para continuar:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        <div onClick={() => navigateTo('cidadao')} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <User className="w-16 h-16 mx-auto text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Cidadão</h2>
          <p className="text-gray-600 mt-2">Reporte problemas e acompanhe a coleta no seu bairro.</p>
        </div>
        <div onClick={() => navigateTo('estabelecimento')} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <Store className="w-16 h-16 mx-auto text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Estabelecimento</h2>
          <p className="text-gray-600 mt-2">Gerencie coletas e veja o status em tempo real.</p>
        </div>
        <div onClick={() => navigateTo('gestor')} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <BarChartBig className="w-16 h-16 mx-auto text-teal-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Gestor Público</h2>
          <p className="text-gray-600 mt-2">Acesse o painel de controle e otimize as rotas.</p>
        </div>
      </div>
    </div>
  );
}