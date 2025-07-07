import React, { useState, useEffect } from 'react'; // Importar useEffect
import { Link, useNavigate } from 'react-router-dom'; // Importar useNavigate
import './style.css'; // Make sure to have your CSS file



const Etapas = () => (
    <div className="etapas-container">
        <div className="etapas">
            {/* CORRIGIDO: Etapa 1 (Identificação) é completed */}
            <div className="etapa completed">
                <span>1</span>
                <div>
                    <div className="etapa-titulo">Identificação<br />das partes</div>
                </div>
            </div>
            <div className="linha completed"></div> {/* Linha após a etapa 1 é completed */}

            {/* CORRIGIDO: Etapa 2 (Bloco I) é completed */}
            <div className="etapa completed">
                <span>2</span>
                <div className="etapa-titulo">Bloco I</div>
            </div>
            <div className="linha completed"></div> {/* Linha após a etapa 2 é completed */}

            {/* CORRIGIDO: Etapa 3 (Bloco II) é active */}
            <div className="etapa active">
                <span>3</span>
                <div className="etapa-titulo">Bloco II</div>
            </div>
            <div className="linha"></div> {/* Linha para a próxima etapa (Bloco III), ainda futura */}

            {/* Etapas futuras (4, 5, 6) permanecem com o estilo padrão (fundo escuro) */}
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
    const navigate = useNavigate();
    


    const [ocorrencia, setOcorrencia] = useState('');
    const [ameacasFrequentes, setAmeacasFrequentes] = useState('');
    const [comportamentos, setComportamentos] = useState([]);
    const [erros, setErros] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const handleComportamento = (valor) => {
        setComportamentos(prev => {
            if (valor === 'nenhum') {
                return ['nenhum'];
            }
            if (prev.includes('nenhum')) {
                return prev.filter(item => item !== 'nenhum');
            }
            return prev.includes(valor) ? prev.filter((v) => v !== valor) : [...prev, valor];
        });
    };

    const handleOcorrencia = (valor) => {
        setOcorrencia(valor);
    };

    const handleAmeacasFrequentes = (valor) => {
        setAmeacasFrequentes(valor);
    };

    const validateForm = () => {
        let currentErros = {};
        let valid = true;

        if (comportamentos.length === 0) {
            currentErros.comportamentos = 'Selecione pelo menos uma opção.';
            valid = false;
        } else if (comportamentos.includes('nenhum') && comportamentos.length > 1) {
            currentErros.comportamentos = 'Nenhum dos comportamentos acima listados não pode ser selecionado com outras opções.';
            valid = false;
        }

        if (!ocorrencia) {
            currentErros.ocorrencia = 'Selecione uma opção.';
            valid = false;
        }
        if (!ameacasFrequentes) {
            currentErros.ameacasFrequentes = 'Selecione uma opção.';
            valid = false;
        }

        setErros(currentErros);
        return valid;
    };

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [comportamentos, ocorrencia, ameacasFrequentes]);

    const handleNextPage = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulário Bloco 1 Página 3 válido!");
            navigate('/bloco2/page1');
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
                                <div className="error-message">{erros.comportamentos}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="pergunta">
                                Você já registrou ocorrência policial ou formulou pedido de medida protetiva de urgência envolvendo essa mesma pessoa? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="radio"
                                        name="ocorrencia"
                                        value="nao"
                                        checked={ocorrencia === 'nao'}
                                        onChange={() => handleOcorrencia('nao')}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="ocorrencia"
                                        value="sim"
                                        checked={ocorrencia === 'sim'}
                                        onChange={() => handleOcorrencia('sim')}
                                    /> Sim
                                </label>
                            </div>
                            {erros.ocorrencia && (
                                <div className="error-message">{erros.ocorrencia}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="pergunta">
                                As ameaças ou agressões físicas do(a) agressor(a) contra você se tornaram mais frequentes ou mais graves nos últimos meses? <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="radio"
                                        name="ameacas-frequentes"
                                        value="nao"
                                        checked={ameacasFrequentes === 'nao'}
                                        onChange={() => handleAmeacasFrequentes('nao')}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="ameacas-frequentes"
                                        value="sim"
                                        checked={ameacasFrequentes === 'sim'}
                                        onChange={() => handleAmeacasFrequentes('sim')}
                                    /> Sim
                                </label>
                            </div>
                            {erros.ameacasFrequentes && (
                                <div className="error-message">{erros.ameacasFrequentes}</div>
                            )}
                        </div>
                        <div className="paginacao">

                            <Link to="/bloco1/page2" className="paginacao-btn">{'<'}</Link>

                            <Link to="/bloco1/page1" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>1</Link>
                            <Link to="/bloco1/page2" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>2</Link>
                            <span className="paginacao-atual">3</span>
                            <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioBloco1Pagina3;