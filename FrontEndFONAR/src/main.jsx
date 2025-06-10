import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DadosDaVitima from './pages/DadosDaVitima';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App() {
  return (
    <DadosDaVitima />
  );
}