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
            <div className="etapa">
                <span>1</span>
                <div>
                    <div className="etapa-titulo">Identificação<br />das partes</div>
                </div>
            </div>
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

function FormularioBloco1Pagina1() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [ameaca, setAmeaca] = useState([]);
    const [agressoes, setAgressoes] = useState([]);
    const [erros, setErros] = useState({});

    const handleAmeaca = (valor) => {
        if (ameaca.includes(valor)) {
            setAmeaca(ameaca.filter((v) => v !== valor));
        } else {
            setAmeaca([...ameaca, valor]);
        }
    };

    const handleAgressoes = (valor) => {
        if (agressoes.includes(valor)) {
            setAgressoes(agressoes.filter((v) => v !== valor));
        } else {
            setAgressoes([...agressoes, valor]);
        }
    };

    // Validação ao trocar de página (pode ser usada futuramente)
    const validarCampos = () => {
        let valid = true;
        let newErros = {};

        if (ameaca.length === 0) {
            newErros.ameaca = 'Selecione pelo menos uma opção.';
            valid = false;
        }
        if (agressoes.length === 0) {
            newErros.agressoes = 'Selecione pelo menos uma opção.';
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
                                O(A) agressor(a) já ameaçou você ou algum familiar com a finalidade de atingi-la? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameaca"
                                        value="arma-fogo"
                                        checked={ameaca.includes('arma-fogo')}
                                        onChange={() => handleAmeaca('arma-fogo')}
                                    /> Sim, utilizando arma de fogo
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameaca"
                                        value="faca"
                                        checked={ameaca.includes('faca')}
                                        onChange={() => handleAmeaca('faca')}
                                    /> Sim, utilizando faca
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameaca"
                                        value="outra-forma"
                                        checked={ameaca.includes('outra-forma')}
                                        onChange={() => handleAmeaca('outra-forma')}
                                    /> Sim, de outra forma
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameaca"
                                        value="nao"
                                        checked={ameaca.includes('nao')}
                                        onChange={() => handleAmeaca('nao')}
                                    /> Não
                                </label>
                            </div>
                            {erros.ameaca && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.ameaca}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) já praticou alguma(s) destas agressões físicas contra você? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agressoes"
                                        value="queimadura"
                                        checked={agressoes.includes('queimadura')}
                                        onChange={() => handleAgressoes('queimadura')}
                                    /> Queimadura
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agressoes"
                                        value="enforcamento"
                                        checked={agressoes.includes('enforcamento')}
                                        onChange={() => handleAgressoes('enforcamento')}
                                    /> Enforcamento
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agressoes"
                                        value="sufocamento"
                                        checked={agressoes.includes('sufocamento')}
                                        onChange={() => handleAgressoes('sufocamento')}
                                    /> Sufocamento
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agressoes"
                                        value="tiro"
                                        checked={agressoes.includes('tiro')}
                                        onChange={() => handleAgressoes('tiro')}
                                    /> Tiro
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agressoes"
                                        value="afogamento"
                                        checked={agressoes.includes('afogamento')}
                                        onChange={() => handleAgressoes('afogamento')}
                                    /> Afogamento
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agressoes"
                                        value="facada"
                                        checked={agressoes.includes('facada')}
                                        onChange={() => handleAgressoes('facada')}
                                    /> Facada
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agressoes"
                                        value="paulada"
                                        checked={agressoes.includes('paulada')}
                                        onChange={() => handleAgressoes('paulada')}
                                    /> Paulada
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agressoes"
                                        value="nenhuma"
                                        checked={agressoes.includes('nenhuma')}
                                        onChange={() => handleAgressoes('nenhuma')}
                                    /> Nenhuma das agressões acima
                                </label>
                            </div>
                            {erros.agressoes && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.agressoes}</div>
                            )}
                        </div>
                        <div className="paginacao">
                            <span className="paginacao-atual">1</span>
                            <Link to="/bloco1/page2" className="paginacao-outro">2</Link>
                            <Link to="/bloco1/page3" className="paginacao-outro">3</Link>
                            <Link to="/bloco1/page2" className="paginacao-btn">{'>'}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioBloco1Pagina1;