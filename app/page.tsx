'use client';

import { useAppContext } from './contexts/AppContext';

// Import Views
import LandingView from './components/views/LandingView';
import CidadaoView from './components/views/CidadaoView';
import EstabelecimentoView from './components/views/EstabelecimentoView';
import GestorLayout from './components/GestorLayout';
import GestorDashboard from './components/views/GestorDashboard';
import GestorDenuncias from './components/views/GestorDenuncias';
import GestorRelatorios from './components/views/GestorRelatorios';

// Import Modals
import ReportarProblemaModal from './components/modals/ReportarProblemaModal';
import MeusChamadosModal from './components/modals/MeusChamadosModal';
import SolicitarColetaModal from './components/modals/SolicitarColetaModal';
import HistoricoColetasModal from './components/modals/HistoricoColetasModal';
import RelatoriosVolumeModal from './components/modals/RelatoriosVolumeModal';
import AlertasConfigModal from './components/modals/AlertasConfigModal';
import ConfirmacaoModal from './components/modals/ConfirmacaoModal';

export default function Home() {
  const { view, modal } = useAppContext();

  const renderView = () => {
    switch (view) {
      case 'cidadao':
        return <CidadaoView />;
      case 'estabelecimento':
        return <EstabelecimentoView />;
      case 'gestor':
        return <GestorLayout><GestorDashboard /></GestorLayout>;
      case 'denuncias':
        return <GestorLayout><GestorDenuncias /></GestorLayout>;
      case 'relatorios-gestor':
        return <GestorLayout><GestorRelatorios /></GestorLayout>;
      case 'landing':
      default:
        return <LandingView />;
    }
  };

  return (
    <main>
      {renderView()}

      {/* Modals */}
      <ReportarProblemaModal isOpen={modal === 'reportar'} />
      <MeusChamadosModal isOpen={modal === 'chamados'} />
      <SolicitarColetaModal isOpen={modal === 'solicitar-coleta'} />
      <HistoricoColetasModal isOpen={modal === 'historico'} />
      <RelatoriosVolumeModal isOpen={modal === 'relatorios-volume'} />
      <AlertasConfigModal isOpen={modal === 'alertas-config'} />
      <ConfirmacaoModal isOpen={modal === 'confirmacao'} />
    </main>
  );
}