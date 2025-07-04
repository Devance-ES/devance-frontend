import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Etapas = () => (
    <div className="etapas-container">
        <div className="etapas">
            <div className="etapa completed">
                <span>1</span>
                <div>
                    <div className="etapa-titulo">Identificação<br />das partes</div>
                </div>
            </div>
            <div className="linha completed"></div>

            <div className="etapa active">
                <span>2</span>
                <div className="etapa-titulo">Bloco I</div>
            </div>
            <div className="linha"></div>
            <div className="etapa">
                <span>3</span>
                <div className="etapa-titulo">Bloco II</div>
            </div>
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

const FormularioBloco1Pagina2 = () => {
    const navigate = useNavigate();
    const [outrasAgressoes, setOutrasAgressoes] = useState([]);
    const [sexoForcado, setSexoForcado] = useState('');
    const [erros, setErros] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleOutrasAgressoes = (valor) => {
        setOutrasAgressoes(prev => {
            if (valor === 'nenhuma') {
                return ['nenhuma'];
            }
            if (prev.includes('nenhuma')) {
                return prev.filter(item => item !== 'nenhuma');
            }
            return prev.includes(valor) ? prev.filter((v) => v !== valor) : [...prev, valor];
        });
    };

    const handleSexoForcado = (valor) => {
        setSexoForcado(valor);
    };

    const validateForm = () => {
        let currentErros = {};
        let valid = true;

        if (outrasAgressoes.length === 0) {
            currentErros.outrasAgressoes = 'Selecione pelo menos uma opção.';
            valid = false;
        } else if (outrasAgressoes.includes('nenhuma') && outrasAgressoes.length > 1) {
            currentErros.outrasAgressoes = 'Nenhuma das agressões acima não pode ser selecionado com outras opções.';
            valid = false;
        }

        if (!sexoForcado) {
            currentErros.sexoForcado = 'Selecione uma opção.';
            valid = false;
        }

        setErros(currentErros);
        return valid;
    };

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [outrasAgressoes, sexoForcado]);

    const handleNextPage = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulário Bloco 1 Página 2 válido!");
            navigate('/bloco1/page3');
        } else {
            console.log("Por favor, preencha todos os campos obrigatórios.");
        }
    };

    return (
        <div className="pagina-fonar">
            <div className="dados-da-vitima">
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />
                <div className="form-container">
                    <form onSubmit={handleNextPage}>
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
                                <div className="error-message">{erros.outrasAgressoes}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) já obrigou você a fazer sexo ou a praticar atos sexuais contra sua vontade? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="radio"
                                        name="sexo-forcado"
                                        value="sim"
                                        checked={sexoForcado === 'sim'}
                                        onChange={() => handleSexoForcado('sim')}
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="sexo-forcado"
                                        value="nao"
                                        checked={sexoForcado === 'nao'}
                                        onChange={() => handleSexoForcado('nao')}
                                    />
                                    Não
                                </label>
                            </div>
                            {erros.sexoForcado && (
                                <div className="error-message">{erros.sexoForcado}</div>
                            )}
                        </div>
                        <div className="paginacao">
                            <Link to="/bloco1/page1" className="paginacao-btn">{'<'}</Link>
                            <Link to="/bloco1/page1" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>1</Link>
                            <span className="paginacao-atual">2</span>
                            <Link to="/bloco1/page3" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>3</Link>
                            <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioBloco1Pagina2;
