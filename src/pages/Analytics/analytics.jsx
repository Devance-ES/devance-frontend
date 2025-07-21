import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'; // Ícone de lupa 
import './style.css'; 
import chartImage from '../../assets/grafico.png';

const Analytics = () => {
    const navigate = useNavigate();

    
    const handleNavClick = (path) => {
        navigate(path);
    };

    
    const handleFilterClick = () => {
        alert('Funcionalidade de Filtrar ainda não implementada.');
        
    };

    
    const handleStatusBlockClick = (status) => {
        console.log(`Clicou em: ${status}`);
        
    };

    return (
        <div className="analytics-container">
            {/* Cabeçalho superior (reutilizado do Dashboard) */}
            <header className="analytics-header">
                <div className="analytics-header-left">
                    <h1 className="analytics-fonar-title">FONAR</h1>
                </div>
                <nav className="analytics-nav-links">
                    <button className="nav-button" onClick={() => handleNavClick('/dashboard')}>
                        Página inicial
                    </button>
                    <button className="nav-button" onClick={() => handleNavClick('/bloco1/page1')}>
                        Preencher formulário
                    </button>
                    <button className="nav-button" onClick={() => handleNavClick('/anexar-formulario')}>
                        Anexar formulário
                    </button>
                    <button className="nav-button" onClick={() => handleNavClick('/logout')}>
                        Sair
                    </button>
                </nav>
            </header>

            {/* Seção de Boas-vindas (reutilizada do Dashboard) */}
            <section className="analytics-welcome-section">
                <div className="analytics-welcome-content">
                    <h2 className="analytics-welcome-title">Bem vindo</h2>
                    <p className="analytics-welcome-user">Olá, Alison Guilherme</p>
                </div>
            </section>

            {/* Conteúdo principal da página de Analytics */}
            <main className="analytics-main-content">
                <div className="analytics-left-panel">
                    {/* Botão Filtrar */}
                    <button className="filter-button" onClick={handleFilterClick}>
                        <FiSearch size={20} /> Filtrar
                    </button>

                    {/* Blocos de Status */}
                    <div className="status-blocks">
                        <div className="status-block filled-forms" onClick={() => handleStatusBlockClick('preenchidos')}>
                            Formulários preenchidos 71
                        </div>
                        <div className="status-block in-analysis-forms" onClick={() => handleStatusBlockClick('em análise')}>
                            Formulários em análise 188
                        </div>
                        <div className="status-block completed-forms" onClick={() => handleStatusBlockClick('concluídos')}>
                            Formulários concluídos 14
                        </div>
                    </div>
                </div>

                <div className="analytics-chart-section">
                    {/* Placeholder para o gráfico. Você pode usar uma imagem de fundo aqui ou uma biblioteca de gráficos */}
                    <div className="chart-placeholder">
                        <img src={chartImage} alt="Gráfico de Formulários" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Analytics;