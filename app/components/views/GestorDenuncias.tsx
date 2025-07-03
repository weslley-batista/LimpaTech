export default function GestorDenuncias() {
    return (
      <>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Gerenciamento de Denúncias</h2>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-4">Tipo</th>
                  <th className="p-4">Localização</th>
                  <th className="p-4">Data</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Descarte Irregular</td>
                  <td className="p-4">Rua Fictícia, 123</td>
                  <td className="p-4">02/07/2025</td>
                  <td className="p-4"><span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">Novo</span></td>
                  <td className="p-4"><button className="text-green-600 hover:underline">Ver Detalhes</button></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Lixeira Cheia</td>
                  <td className="p-4">Av. Brasil, 456</td>
                  <td className="p-4">02/07/2025</td>
                  <td className="p-4"><span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">Em Análise</span></td>
                  <td className="p-4"><button className="text-green-600 hover:underline">Ver Detalhes</button></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Coleta Atrasada</td>
                  <td className="p-4">Praça Central</td>
                  <td className="p-4">01/07/2025</td>
                  <td className="p-4"><span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Em Rota</span></td>
                  <td className="p-4"><button className="text-green-600 hover:underline">Ver Detalhes</button></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4">Descarte Irregular</td>
                  <td className="p-4">Rua Teste, 789</td>
                  <td className="p-4">30/06/2025</td>
                  <td className="p-4"><span className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full">Resolvido</span></td>
                  <td className="p-4"><button className="text-green-600 hover:underline">Ver Detalhes</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
