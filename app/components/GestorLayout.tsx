'use client';
import { ReactNode } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { LayoutDashboard, AlertTriangle, FileBarChart2, LogOut, Trash2 } from 'lucide-react';

interface GestorLayoutProps {
  children: ReactNode;
}

export default function GestorLayout({ children }: GestorLayoutProps) {
  const { view, navigateTo } = useAppContext();

  const navItems = [
    { id: 'gestor', label: 'Painel de Controle', icon: LayoutDashboard },
    { id: 'denuncias', label: 'Denúncias', icon: AlertTriangle },
    { id: 'relatorios-gestor', label: 'Relatórios', icon: FileBarChart2 },
  ];

  return (
    <div className="bg-gray-200 flex h-screen">
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b">
          <Trash2 size={32} className="text-green-600" />
          <h1 className="text-2xl font-bold text-gray-800">Limpa<span className="text-green-600">Tech</span></h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map(item => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                navigateTo(item.id as any);
              }}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                view === item.id
                  ? 'text-gray-700 bg-green-100 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t mt-auto">
          <button onClick={() => navigateTo('landing')} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full">
            <LogOut /> Sair
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
