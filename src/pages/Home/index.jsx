import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './style.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="home-logo-section">
                    <h1 className="fonar-main-title">FONAR</h1>
                    <p className="fonar-subtitle">Formulário Nacional de Avaliação de Risco</p>
                </div>

                <nav className="home-nav-buttons">
                    <button className="btn-header" onClick={() => navigate('/bloco1/page1')}>Preencher formulário</button>
                    {}
                    <button className="btn-header" onClick={() => navigate('/login')}>Login</button>
                </nav>
            </header>

            <main className="home-main-content">
                <h1 className="main-title">O que é FONAR ?</h1>
                <p className="main-text">
                    O Formulário Nacional de Avaliação de Risco (FONAR) é uma ferramenta desenvolvida
                    para auxiliar magistrados e magistradas na análise de risco de violência doméstica e familiar
                    contra a mulher. Ele busca padronizar a coleta de informações relevantes sobre a
                    dinâmica da violência, o histórico do agressor e da vítima, e fatores de risco,
                    contribuindo para decisões mais seguras e eficazes na concessão de medidas protetivas
                    de urgência. O objetivo é aprimorar a proteção das vítimas e a prevenção de novas
                    ocorrências, com base em critérios objetivos e dados qualificados.
                </p>
            </main>
        </div>
    );
};

export default Home;