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

const FormularioBloco1Pagina3 = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    // Controle para permitir apenas uma opção nas duas últimas perguntas
    const [ocorrencia, setOcorrencia] = useState('');
    const [ameacasFrequentes, setAmeacasFrequentes] = useState('');
    const [comportamentos, setComportamentos] = useState([]);
    const [erros, setErros] = useState({});

    const handleComportamento = (valor) => {
        if (comportamentos.includes(valor)) {
            setComportamentos(comportamentos.filter((v) => v !== valor));
        } else {
            setComportamentos([...comportamentos, valor]);
        }
    };

    const handleOcorrencia = (valor) => {
        setOcorrencia(valor === ocorrencia ? '' : valor);
    };

    const handleAmeacasFrequentes = (valor) => {
        setAmeacasFrequentes(valor === ameacasFrequentes ? '' : valor);
    };

    // Validação ao trocar de página (pode ser usada futuramente)
    const validarCampos = () => {
        let valid = true;
        let newErros = {};

        if (comportamentos.length === 0) {
            newErros.comportamentos = 'Selecione pelo menos uma opção.';
            valid = false;
        }
        if (!ocorrencia) {
            newErros.ocorrencia = 'Selecione uma opção.';
            valid = false;
        }
        if (!ameacasFrequentes) {
            newErros.ameacasFrequentes = 'Selecione uma opção.';
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
                                O(A) agressor(a) já teve algum destes comportamentos? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="comportamento"
                                        value="frase-ameaca"
                                        checked={comportamentos.includes('frase-ameaca')}
                                        onChange={() => handleComportamento('frase-ameaca')}
                                    />
                                    disse algo parecido com a frase: “se não for minha, não será de mais ninguém”
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="comportamento"
                                        value="perseguiu"
                                        checked={comportamentos.includes('perseguiu')}
                                        onChange={() => handleComportamento('perseguiu')}
                                    />
                                    perturbou, perseguiu ou vigiou você nos locais em que frequenta
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="comportamento"
                                        value="proibiu-visitar"
                                        checked={comportamentos.includes('proibiu-visitar')}
                                        onChange={() => handleComportamento('proibiu-visitar')}
                                    />
                                    proibiu você de visitar familiares ou amigos
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="comportamento"
                                        value="proibiu-trabalhar"
                                        checked={comportamentos.includes('proibiu-trabalhar')}
                                        onChange={() => handleComportamento('proibiu-trabalhar')}
                                    />
                                    proibiu você de trabalhar ou estudar
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="comportamento"
                                        value="ligacoes-mensagens"
                                        checked={comportamentos.includes('ligacoes-mensagens')}
                                        onChange={() => handleComportamento('ligacoes-mensagens')}
                                    />
                                    fez telefonemas, enviou mensagens pelo celular ou e-mails de forma insistente
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="comportamento"
                                        value="impediu-acesso"
                                        checked={comportamentos.includes('impediu-acesso')}
                                        onChange={() => handleComportamento('impediu-acesso')}
                                    />
                                    impediu você de ter acesso a dinheiro, conta bancária ou outros bens (como documentos pessoais, carro)
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="comportamento"
                                        value="ciume-controle"
                                        checked={comportamentos.includes('ciume-controle')}
                                        onChange={() => handleComportamento('ciume-controle')}
                                    />
                                    teve outros comportamentos de ciúme excessivo e de controle sobre você
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="comportamento"
                                        value="nenhum"
                                        checked={comportamentos.includes('nenhum')}
                                        onChange={() => handleComportamento('nenhum')}
                                    />
                                    nenhum dos comportamentos acima listados
                                </label>
                            </div>
                            {erros.comportamentos && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.comportamentos}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="pergunta">
                                Você já registrou ocorrência policial ou formulou pedido de medida protetiva de urgência envolvendo essa mesma pessoa? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ocorrencia"
                                        value="nao"
                                        checked={ocorrencia === 'nao'}
                                        onChange={() => handleOcorrencia('nao')}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ocorrencia"
                                        value="sim"
                                        checked={ocorrencia === 'sim'}
                                        onChange={() => handleOcorrencia('sim')}
                                    /> Sim
                                </label>
                            </div>
                            {erros.ocorrencia && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.ocorrencia}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="pergunta">
                                As ameaças ou agressões físicas do(a) agressor(a) contra você se tornaram mais frequentes ou mais graves nos últimos meses? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacas-frequentes"
                                        value="nao"
                                        checked={ameacasFrequentes === 'nao'}
                                        onChange={() => handleAmeacasFrequentes('nao')}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacas-frequentes"
                                        value="sim"
                                        checked={ameacasFrequentes === 'sim'}
                                        onChange={() => handleAmeacasFrequentes('sim')}
                                    /> Sim
                                </label>
                            </div>
                            {erros.ameacasFrequentes && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.ameacasFrequentes}</div>
                            )}
                        </div>
                        <div className="paginacao">
                            <Link to="/bloco1/page2" className="paginacao-btn">{'<'}</Link>
                            <Link to="/bloco1/page1" className="paginacao-outro">1</Link>
                            <Link to="/bloco1/page2" className="paginacao-outro">2</Link>
                            <span className="paginacao-atual">3</span>
                            <Link to="/bloco2/page1" className="paginacao-btn">{'>'}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioBloco1Pagina3;