import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DadosDaVitima from './pages/IdentficacaoPorPartes/DadosDaVitima';
import DadosDoAgressor from './pages/IdentficacaoPorPartes/DadosDoAgressor';
import VinculoEntrePartes from './pages/IdentficacaoPorPartes/VinculeEntrePartes';
import FormularioBloco1Pagina1 from './pages/Bloco1/page1';
import FormularioBloco1Pagina2 from './pages/Bloco1/page2';
import FormularioBloco1Pagina3 from './pages/Bloco1/page3';
import FormularioBloco2Pagina1 from './pages/Bloco2/page1';
import FormularioBloco2Pagina2 from './pages/Bloco2/page2';
import FormularioBloco2Pagina3 from './pages/Bloco2/page3';
import FormularioBloco3Pagina1 from './pages/Bloco3/page1';
import FormularioBloco3Pagina2 from './pages/Bloco3/page2';
import FormularioBloco3Pagina3 from './pages/Bloco3/page3';
import FormularioBloco3Pagina4 from './pages/Bloco3/page4';
import FormularioBloco3Pagina5 from './pages/Bloco3/page5';
import FormularioBloco4Pagina1 from './pages/Bloco4/page1';
import TermoDeEnvioVitima from './pages/TermoDeEnvio/FeitoPelaVitima';
import PreenchimentoProfissional from './pages/TermoDeEnvio/FeitoPeloProfissional';
import Login from './pages/Login/login'; 
import Dashboard from "./pages/Dashboard/dashboard";
import Analytics from './pages/Analytics/analytics';
import Dados from './pages/Dados/dados';
import Cadastro from './pages/Cadastro/cadastro';



function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/dados" element={<Dados />} /> 
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/identificacaoporpartes/dadosdavitima" element={<DadosDaVitima />} />
      <Route path="/identificacaoporpartes/dadosdoagressor" element={<DadosDoAgressor />} />
      <Route path="/identificacaoporpartes/vinculoentrepartes" element={<VinculoEntrePartes />} />
      <Route path="/bloco1/page1" element={<FormularioBloco1Pagina1 />} />
      <Route path="/bloco1/page2" element={<FormularioBloco1Pagina2 />} />
      <Route path="/bloco1/page3" element={<FormularioBloco1Pagina3 />} />
      <Route path="/bloco2/page1" element={<FormularioBloco2Pagina1 />} />
      <Route path="/bloco2/page2" element={<FormularioBloco2Pagina2 />} />
      <Route path="/bloco2/page3" element={<FormularioBloco2Pagina3 />} />
      <Route path="/bloco3/page1" element={<FormularioBloco3Pagina1 />} />
      <Route path="/bloco3/page2" element={<FormularioBloco3Pagina2 />} />
      <Route path="/bloco3/page3" element={<FormularioBloco3Pagina3 />} />
      <Route path="/bloco3/page4" element={<FormularioBloco3Pagina4 />} />
      <Route path="/bloco3/page5" element={<FormularioBloco3Pagina5 />} />
      <Route path="/bloco4/page1" element={<FormularioBloco4Pagina1 />} />
      <Route path="/termo-de-envio/feito-pela-vitima" element={<TermoDeEnvioVitima />} />
      <Route path="/termo-de-envio/feito-pelo-profissional" element={<PreenchimentoProfissional />} />
    </Routes>
  );
}

//teste
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);