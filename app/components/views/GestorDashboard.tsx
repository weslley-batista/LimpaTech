import { Search, Bell } from 'lucide-react';
import Image from 'next/image';

export default function GestorDashboard() {
  return (
    <>
      <header className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Painel de Controle</h2>
        <div className="flex items-center gap-4">
          <Search className="text-gray-500" />
          <Bell className="text-gray-500" />
          <Image src="https://i.pravatar.cc/40?u=gestora" alt="Avatar da gestora" width={40} height={40} className="w-10 h-10 rounded-full" />
        </div>
      </header>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
          <h3 className="text-lg font-semibold text-gray-500">Key Performances</h3>
          <div className="my-4 w-40 h-40 rounded-full border-8 border-green-500 flex items-center justify-center">
            <span className="text-4xl font-bold text-green-600">406</span>
          </div>
          <p className="text-gray-600">Alertas resolvidos</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-500">Eficiência e Anomalias</h3>
          <div className="flex items-center justify-center h-full mt-4">
            <Image src="https://i.imgur.com/gYjJqDk.png" alt="Gráfico de mapa de calor" width={500} height={256} className="object-contain max-h-64 rounded-md" />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-500">Alertas Críticos - Volume por Dia</h3>
          <div className="mt-4 h-64 flex items-end gap-2">
            <div className="flex-1 h-[60%] bg-green-300 rounded-t-md"></div>
            <div className="flex-1 h-[80%] bg-green-400 rounded-t-md"></div>
            <div className="flex-1 h-[50%] bg-green-300 rounded-t-md"></div>
            <div className="flex-1 h-[95%] bg-red-400 rounded-t-md"></div>
            <div className="flex-1 h-[70%] bg-green-400 rounded-t-md"></div>
            <div className="flex-1 h-[65%] bg-green-300 rounded-t-md"></div>
            <div className="flex-1 h-[40%] bg-green-300 rounded-t-md"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-500">Alertas Críticos - Tipos</h3>
          <ul className="mt-4 space-y-3">
            <li className="p-3 bg-red-100 text-red-800 rounded-lg font-medium">Descarte Irregular (15)</li>
            <li className="p-3 bg-orange-100 text-orange-800 rounded-lg font-medium">Coleta Atrasada (8)</li>
            <li className="p-3 bg-yellow-100 text-yellow-800 rounded-lg font-medium">Lixeira Cheia (5)</li>
            <li className="p-3 bg-gray-100 text-gray-800 rounded-lg font-medium">Veículo Quebrado (2)</li>
          </ul>
        </div>
      </div>
    </>
  );
}
