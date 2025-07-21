import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Importe o CSS para este componente

const Dashboard = () => {
    const navigate = useNavigate();

    // Função para lidar com o clique nos cartões de feature
    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard-container">
            {/* Cabeçalho superior */}
            <header className="dashboard-header">
                <div className="dashboard-header-left">
                    <h1 className="dashboard-fonar-title">FONAR</h1>
                </div>
                <nav className="dashboard-nav-links">
                    {/* Botões do menu superior */}
                    <button className="nav-button" onClick={() => navigate('/')}>
                        Página inicial
                    </button>
                    <button className="nav-button" onClick={() => navigate('/bloco1/page1')}>
                        Preencher formulário
                    </button>
                    <button className="nav-button" onClick={() => handleCardClick('/anexar-formulario')}>
                        Anexar formulário
                    </button>
                    <button className="nav-button" onClick={() => handleCardClick('/logout')}> {/* Lógica de logout aqui */}
                        Sair
                    </button>
                </nav>
            </header>

            {/* Seção de Boas-vindas */}
            <section className="welcome-section">
                <div className="welcome-content">
                    <h2 className="welcome-title">Bem vindo</h2>
                    <p className="welcome-user">Olá, Paulo Silva</p>
                </div>
            </section>

            {/* Seção de Cartões de Features */}
            <main className="features-section">
                <div className="features-grid">
                    {/* Cartão 1: DADOS */}
                    <div className="feature-card" onClick={() => handleCardClick('/dados')}>
                        <span className="feature-label">DADOS</span>
                    </div>

                    {/* Cartão 2: ANALYTICS */}
                    <div className="feature-card" onClick={() => handleCardClick('/analytics')}>
                        <span className="feature-label">ANALYTICS</span>
                    </div>

                    {/* Cartão 3: CADASTRO */}
                    <div className="feature-card" onClick={() => handleCardClick('/cadastro')}>
                        <span className="feature-label">CADASTRO</span>
                    </div>

                    {/* Cartão 4: AJUSTES */}
                    <div className="feature-card" onClick={() => handleCardClick('/ajustes')}>
                        <span className="feature-label">AJUSTES</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;