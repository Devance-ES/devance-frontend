import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DadosDaVitima from './pages/IdentficacaoPorPartes/DadosDaVitima';
import DadosDoAgressor from './pages/IdentficacaoPorPartes/DadosDoAgressor';
import VinculoEntrePartes from './pages/IdentficacaoPorPartes/VinculeEntrePartes';
import FormularioBloco1Pagina1 from './pages/Bloco1/page1';
import FormularioBloco1Pagina2 from './pages/Bloco1/page2';
import FormularioBloco1Pagina3 from './pages/Bloco1/page3';
import FormularioBloco2Pagina1 from './pages/Bloco2/page1';
import FormularioBloco2Pagina2 from './pages/Bloco2/page2';
import FormularioBloco2Pagina3 from './pages/Bloco2/page3';


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/identificacaoporpartes/dadosdavitima" element={<DadosDaVitima />} />
      <Route path="/identificacaoporpartes/dadosdoagressor" element={<DadosDoAgressor />} />
      <Route path="/identificacaoporpartes/vinculoentrepartes" element={<VinculoEntrePartes />} />
      <Route path="/bloco1/page1" element={<FormularioBloco1Pagina1 />} />
      <Route path="/bloco1/page2" element={<FormularioBloco1Pagina2 />} />
      <Route path="/bloco1/page3" element={<FormularioBloco1Pagina3 />} />
      <Route path="/bloco2/page1" element={<FormularioBloco2Pagina1 />} />
      <Route path="/bloco2/page2" element={<FormularioBloco2Pagina2 />} />
      <Route path="/bloco2/page3" element={<FormularioBloco2Pagina3 />} />
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