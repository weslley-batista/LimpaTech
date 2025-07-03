export default function GestorRelatorios() {
    return (
      <>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Relatórios Gerenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-700">Volume de Coleta (Mês)</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">1.200 <span className="text-lg font-normal text-gray-500">ton</span></p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-700">Denúncias Resolvidas</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">92%</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-700">Custo por Coleta</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">R$ 250,00</p>
          </div>
        </div>
        <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="font-semibold text-gray-700 mb-4">Tipos de Denúncia (Últimos 30 dias)</h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
            <p className="text-gray-500">[Gráfico de Pizza]</p>
          </div>
        </div>
      </>
    );
  }
