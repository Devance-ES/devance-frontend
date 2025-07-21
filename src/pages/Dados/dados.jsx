import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; 

const Dados = () => {
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        navigate(path);
    };

    const formData = [
        { id: 1, nomeVitima: 'Maria de Fátima', data: '20/04/25', risco: 'Médio', status: 'Triagem', detalhes: 'PDF' },
        { id: 2, nomeVitima: 'Mariana da Silva', data: '11/04/25', risco: 'Baixo', status: 'Triagem', detalhes: 'PDF' },
        { id: 3, nomeVitima: 'Juliana de Paula', data: '09/04/25', risco: 'Alto', status: 'Concluído', detalhes: 'PDF' },
        { id: 4, nomeVitima: 'Samara Gabriella', data: '15/03/25', risco: 'Baixo', status: 'Triagem', detalhes: 'PDF' },
        { id: 5, nomeVitima: 'Sayonara Fernandes', data: '30/02/25', risco: 'Baixo', status: 'Triagem', detalhes: 'JPG' },
        { id: 6, nomeVitima: 'Josefa dos Santos Silva', data: '22/02/25', risco: 'Alto', status: 'Concluído', detalhes: 'JPG' },
        { id: 7, nomeVitima: 'Maria Odete de Souza', data: '10/02/25', risco: 'Médio', status: 'Análise', detalhes: 'PDF' },
    ];

    return (
        <div className="dados-container">
            <header className="dados-header">
                <div className="dados-header-left">
                    <h1 className="dados-fonar-title">FONAR</h1>
                </div>
                <nav className="dados-nav-links">
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

            <section className="dados-welcome-section">
                <div className="dados-welcome-content">
                    <h2 className="dados-welcome-title">Bem vindo</h2>
                    <p className="dados-welcome-user">Olá, Paulo Silva</p>
                </div>
            </section>

            <main className="dados-main-content">
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Nome da vítima</th>
                                <th>Data</th>
                                <th>Risco</th>
                                <th>Status</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.nomeVitima}</td>
                                    <td>{row.data}</td>
                                    <td>{row.risco}</td>
                                    <td>{row.status}</td>
                                    <td>{row.detalhes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Dados;