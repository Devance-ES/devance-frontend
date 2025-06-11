import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DadosDaVitima from './pages/IdentficacaoPorPartes/DadosDaVitima';
import DadosDoAgressor from './pages/IdentficacaoPorPartes/DadosDoAgressor';
import VinculoEntrePartes from './pages/IdentficacaoPorPartes/VinculeEntrePartes';
import FormularioPage1 from './pages/Bloco1/page1';
import FormularioPage2 from './pages/Bloco1/page2';
import FormularioPage3 from './pages/Bloco1/page3';

function App() {
  return (
    <Routes>
      <Route path="/identificacaoporpartes/dadosdavitima" element={<DadosDaVitima />} />
      <Route path="/identificacaoporpartes/dadosdoagressor" element={<DadosDoAgressor />} />
      <Route path="/identificacaoporpartes/vinculoentrepartes" element={<VinculoEntrePartes />} />
      <Route path="/bloco1/page1" element={<FormularioPage1 />} />
      <Route path="/bloco1/page2" element={<FormularioPage2 />} />
      <Route path="/bloco1/page3" element={<FormularioPage3 />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);