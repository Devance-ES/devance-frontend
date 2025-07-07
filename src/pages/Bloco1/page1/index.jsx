import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Etapas = () => (
    <div className="etapas-container">
        <div className="etapas">
            <div className="etapa active">
                <span>1</span>
                <div>
                    <div className="etapa-titulo">Identificação<br />das partes</div>
                </div>
            </div>
            <div className="linha"></div>
            <div className="etapa">
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

function FormularioBloco1Pagina1() {
    const navigate = useNavigate();
    const [ameaca, setAmeaca] = useState([]);
    const [agressoes, setAgressoes] = useState([]);
    const [erros, setErros] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleAmeaca = (valor) => {
        setAmeaca(prev => {
            if (valor === 'nao') return ['nao'];
            if (prev.includes('nao')) return prev.filter(item => item !== 'nao' && item !== valor);
            return prev.includes(valor) ? prev.filter(v => v !== valor) : [...prev, valor];
        });
    };

    const handleAgressoes = (valor) => {
        setAgressoes(prev => {
            if (valor === 'nenhuma') return ['nenhuma'];
            if (prev.includes('nenhuma')) return prev.filter(item => item !== 'nenhuma' && item !== valor);
            return prev.includes(valor) ? prev.filter(v => v !== valor) : [...prev, valor];
        });
    };

    const validateForm = () => {
        let currentErros = {};
        let valid = true;

        if (ameaca.length === 0) {
            currentErros.ameaca = 'Selecione pelo menos uma opção.';
            valid = false;
        } else if (ameaca.includes('nao') && ameaca.length > 1) {
            currentErros.ameaca = 'Não pode ser selecionado com outras opções.';
            valid = false;
        }

        if (agressoes.length === 0) {
            currentErros.agressoes = 'Selecione pelo menos uma opção.';
            valid = false;
        } else if (agressoes.includes('nenhuma') && agressoes.length > 1) {
            currentErros.agressoes = 'Nenhuma das agressões acima não pode ser selecionado com outras opções.';
            valid = false;
        }

        setErros(currentErros);
        return valid;
    };

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [ameaca, agressoes]);

    const handleNextPage = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulário Bloco 1 Página 1 válido!");
            navigate('/bloco1/page2');
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
                                <div className="error-message">{erros.ameaca}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) já praticou alguma(s) destas agressões físicas contra você? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                {[
                                    'queimadura', 'enforcamento', 'sufocamento',
                                    'tiro', 'afogamento', 'facada', 'paulada', 'nenhuma'
                                ].map((tipo) => (
                                    <label key={tipo}>
                                        <input
                                            type="checkbox"
                                            name="agressoes"
                                            value={tipo}
                                            checked={agressoes.includes(tipo)}
                                            onChange={() => handleAgressoes(tipo)}
                                        />
                                        {tipo === 'nenhuma' ? 'Nenhuma das agressões acima' : tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                                    </label>
                                ))}
                            </div>
                            {erros.agressoes && (
                                <div className="error-message">{erros.agressoes}</div>
                            )}
                        </div>

                        <div className="paginacao">
                            <Link to="/bloco1/page1" className="paginacao-btn disabled-link" onClick={(e) => e.preventDefault()}>{'<'}</Link>
                            <span className="paginacao-atual">1</span>
                            <Link to="/bloco1/page2" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>2</Link>
                            <Link to="/bloco1/page3" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>3</Link>
                            <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioBloco1Pagina1;
