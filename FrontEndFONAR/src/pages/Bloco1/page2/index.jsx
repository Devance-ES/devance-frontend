import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MenuLateral = ({ aberto, onToggle }) => (
    <aside className={`menu-lateral${aberto ? ' aberto' : ''}`}>
        <button className="btn-menu" onClick={onToggle}>
            <span className="menu-icone">&#9776;</span>
        </button>
        <nav className="menu-links"></nav>
    </aside>
);

const Etapas = () => (
    <div className="etapas-container">
        <div className="etapas">
            <Link to="/bloco1/page1" className="etapa-link">
                <div className="etapa">
                    <span>1</span>
                    <div className="etapa-titulo">Identificação<br />das partes</div>
                </div>
            </Link>
            <div className="linha"></div>
            <div className="etapa active">
                <span>2</span>
                <div className="etapa-titulo ativo">Bloco I</div>
            </div>
            <div className="linha"></div>
            <Link to="/bloco1/page3" className="etapa-link">
                <div className="etapa">
                    <span>3</span>
                    <div className="etapa-titulo">Bloco II</div>
                </div>
            </Link>
            <div className="linha"></div>
            <div className="etapa">
                <span>4</span>
                <div className="etapa-titulo">Bloco III</div>
            </div>
            <div className="linha"></div>
            <div className="etapa">
                <span>5</span>
                <div className="etapa-titulo">Bloco IV</div>
            </div>
            <div className="linha"></div>
            <div className="etapa">
                <span>6</span>
                <div className="etapa-titulo">Termo de envio</div>
            </div>
        </div>
    </div>
);

const FormularioPage2 = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [outrasAgressoes, setOutrasAgressoes] = useState([]);
    const [sexoForcado, setSexoForcado] = useState('');
    const [erros, setErros] = useState({});

    const handleOutrasAgressoes = (valor) => {
        if (outrasAgressoes.includes(valor)) {
            setOutrasAgressoes(outrasAgressoes.filter((v) => v !== valor));
        } else {
            setOutrasAgressoes([...outrasAgressoes, valor]);
        }
    };

    const handleSexoForcado = (valor) => {
        setSexoForcado(valor === sexoForcado ? '' : valor);
    };

    // Validação ao trocar de página (pode ser usada futuramente)
    const validarCampos = () => {
        let valid = true;
        let newErros = {};

        if (outrasAgressoes.length === 0) {
            newErros.outrasAgressoes = 'Selecione pelo menos uma opção.';
            valid = false;
        }
        if (!sexoForcado) {
            newErros.sexoForcado = 'Selecione uma opção.';
            valid = false;
        }

        setErros(newErros);
        return valid;
    };

    return (
        <div className="pagina-fonar">
            <MenuLateral aberto={menuAberto} onToggle={() => setMenuAberto(!menuAberto)} />
            <div className="dados-da-vitima">
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) já praticou alguma(s) destas outras agressões físicas contra você? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="outras-agressoes"
                                        value="socos"
                                        checked={outrasAgressoes.includes('socos')}
                                        onChange={() => handleOutrasAgressoes('socos')}
                                    />
                                    Socos
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="outras-agressoes"
                                        value="chutes"
                                        checked={outrasAgressoes.includes('chutes')}
                                        onChange={() => handleOutrasAgressoes('chutes')}
                                    />
                                    Chutes
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="outras-agressoes"
                                        value="tapas"
                                        checked={outrasAgressoes.includes('tapas')}
                                        onChange={() => handleOutrasAgressoes('tapas')}
                                    />
                                    Tapas
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="outras-agressoes"
                                        value="empurroes"
                                        checked={outrasAgressoes.includes('empurroes')}
                                        onChange={() => handleOutrasAgressoes('empurroes')}
                                    />
                                    Empurrões
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="outras-agressoes"
                                        value="puxoes-cabelo"
                                        checked={outrasAgressoes.includes('puxoes-cabelo')}
                                        onChange={() => handleOutrasAgressoes('puxoes-cabelo')}
                                    />
                                    Puxões de Cabelo
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="outras-agressoes"
                                        value="nenhuma"
                                        checked={outrasAgressoes.includes('nenhuma')}
                                        onChange={() => handleOutrasAgressoes('nenhuma')}
                                    />
                                    Nenhuma das agressões acima
                                </label>
                            </div>
                            {erros.outrasAgressoes && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.outrasAgressoes}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) já obrigou você a fazer sexo ou a praticar atos sexuais contra sua vontade? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="sexo-forcado"
                                        value="sim"
                                        checked={sexoForcado === 'sim'}
                                        onChange={() => handleSexoForcado('sim')}
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="sexo-forcado"
                                        value="nao"
                                        checked={sexoForcado === 'nao'}
                                        onChange={() => handleSexoForcado('nao')}
                                    />
                                    Não
                                </label>
                            </div>
                            {erros.sexoForcado && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.sexoForcado}</div>
                            )}
                        </div>
                        <div className="paginacao">
                            <Link to="/bloco1/page1" className="paginacao-btn">{'<'}</Link>
                            <Link to="/bloco1/page1" className="paginacao-outro">1</Link>
                            <span className="paginacao-atual">2</span>
                            <Link to="/bloco1/page3" className="paginacao-outro">3</Link>
                            <Link to="/bloco1/page3" className="paginacao-btn">{'>'}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioPage2;