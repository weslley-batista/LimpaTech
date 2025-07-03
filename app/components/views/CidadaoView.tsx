'use client';
import { useAppContext } from '../../contexts/AppContext';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function CidadaoView() {
  const { navigateTo, showModal } = useAppContext();

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
            <header className="bg-gray-50 p-4 border-b w-full">
                <button onClick={() => navigateTo('landing')} className="text-gray-600 hover:text-green-600 flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Voltar
                </button>
            </header>
            <div className="flex flex-col md:flex-row">
                {/* Coluna do Mapa */}
                <div className="w-full md:w-2/3 relative h-[50vh] md:h-[calc(100vh-150px)] bg-gray-200">
                    <Image 
                        src="https://images.unsplash.com/photo-1572455152419-3c74a3c1f5a7?q=80&w=1974&auto=format&fit=crop" 
                        alt="Mapa da cidade com ruas e quarteirões" 
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
                        <div className="bg-white p-3 rounded-full shadow-lg">
                            <img src="https://img.icons8.com/ios-filled/50/4ade80/garbage-truck.png" alt="Ícone do caminhão de lixo" className="w-10 h-10"/>
                        </div>
                        <div className="mt-2 bg-white px-4 py-2 rounded-lg shadow-md">
                            <p className="font-semibold text-gray-700">Caminhão próximo!</p>
                        </div>
                    </div>
                </div>

                {/* Coluna de Informações */}
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center text-center">
                    <p className="text-xl text-gray-700">O caminhão da coleta diária chegará em</p>
                    <p className="text-4xl font-bold text-green-600 my-4">12 minutos</p>
                    
                    <button onClick={() => showModal('reportar')} className="w-full bg-green-600 text-white font-bold py-4 px-4 rounded-lg mt-8 hover:bg-green-700 transition-colors duration-300 text-lg shadow-md">
                        [+] REPORTAR UM PROBLEMA
                    </button>
                    <button onClick={() => showModal('chamados')} className="mt-4 text-green-600 font-semibold hover:underline">
                        Ver Meus Chamados
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
