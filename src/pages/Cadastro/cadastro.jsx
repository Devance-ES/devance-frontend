import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; 

const Cadastro = () => {
    const navigate = useNavigate();


    const [nome, setNome] = useState('');
    const [tipoDelegacia, setTipoDelegacia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [delegadoResponsavel, setDelegadoResponsavel] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleNavClick = (path) => {
        navigate(path);
    };

    //envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página
        console.log({
            nome,
            tipoDelegacia,
            cnpj,
            telefone,
            delegadoResponsavel,
            endereco
        });
        alert('Dados do funcionário cadastrados com sucesso! (Lógica de envio real não implementada)');
        // setNome('');
        // setTipoDelegacia('');
        // ...
    };

    return (
        <div className="cadastro-container">
            {/* Cabeçalho superior (reutilizado) */}
            <header className="cadastro-header">
                <div className="cadastro-header-left">
                    <h1 className="cadastro-fonar-title">FONAR</h1>
                </div>
                <nav className="cadastro-nav-links">
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

            {/* Seção de Boas-vindas (reutilizada) */}
            <section className="cadastro-welcome-section">
                <div className="cadastro-welcome-content">
                    <h2 className="cadastro-welcome-title">Bem vindo</h2>
                    <p className="cadastro-welcome-user">Olá, Paulo Silva</p>
                </div>
            </section>

            {/* Conteúdo principal da página de Cadastro */}
            <main className="cadastro-main-content">
                <div className="cadastro-form-card">
                    <h2 className="cadastro-form-title">CADASTRAR FUNCIONÁRIO</h2>
                    <form onSubmit={handleSubmit} className="cadastro-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Digite o nome social da Delegacia"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipoDelegacia">Tipo de delegacia</label>
                                <input
                                    type="text"
                                    id="tipoDelegacia"
                                    placeholder="Digite o tipo da delegacia"
                                    value={tipoDelegacia}
                                    onChange={(e) => setTipoDelegacia(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="cnpj">CNPJ</label>
                                <input
                                    type="text"
                                    id="cnpj"
                                    placeholder="Digite o seu CNPJ"
                                    value={cnpj}
                                    onChange={(e) => setCnpj(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefone">Telefone</label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    placeholder="Digite o seu telefone"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row full-width">
                            <div className="form-group">
                                <label htmlFor="delegadoResponsavel">Delegado Responsável</label>
                                <input
                                    type="text"
                                    id="delegadoResponsavel"
                                    placeholder="Digite o nome do Delegado Responsável"
                                    value={delegadoResponsavel}
                                    onChange={(e) => setDelegadoResponsavel(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row full-width">
                            <div className="form-group">
                                <label htmlFor="endereco">Endereço</label>
                                <input
                                    type="text"
                                    id="endereco"
                                    placeholder="Digite o endereço"
                                    value={endereco}
                                    onChange={(e) => setEndereco(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="submit-button">Cadastrar</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Cadastro;