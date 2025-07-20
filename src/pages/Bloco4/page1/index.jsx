import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Etapas = () => (
    <div className="etapas-container">
        <div className="etapas">
            <div className="etapa completed"><span>1</span><div className="etapa-titulo">Identificação<br />das partes</div></div>
            <div className="linha completed"></div>
            <div className="etapa completed"><span>2</span><div className="etapa-titulo">Bloco I</div></div>
            <div className="linha completed"></div>
            <div className="etapa completed"><span>3</span><div className="etapa-titulo">Bloco II</div></div>
            <div className="linha completed"></div>
            <div className="etapa completed"><span>4</span><div className="etapa-titulo">Bloco III</div></div>
            <div className="linha completed"></div>
            <div className="etapa active"><span>5</span><div className="etapa-titulo">Bloco IV</div></div>
            <div className="linha"></div>
            <div className="etapa"><span>6</span><div className="etapa-titulo">Termo de envio</div></div>
        </div>
    </div>
);

function FormularioBloco4Pagina1() {
    const navigate = useNavigate();

    const [moraEmRisco, setMoraEmRisco] = useState('');
    const [dependenteFinanceiramente, setDependenteFinanceiramente] = useState('');
    const [aceitaAbrigamento, setAceitaAbrigamento] = useState('');

    const [erros, setErros] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const currentErros = {};
        let valid = true;

        if (!moraEmRisco) {
            currentErros.moraEmRisco = 'Selecione uma opção.';
            valid = false;
        }
        if (!dependenteFinanceiramente) {
            currentErros.dependenteFinanceiramente = 'Selecione uma opção.';
            valid = false;
        }
        if (!aceitaAbrigamento) {
            currentErros.aceitaAbrigamento = 'Selecione uma opção.';
            valid = false;
        }

        setErros(currentErros);
        return valid;
    };

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [moraEmRisco, dependenteFinanceiramente, aceitaAbrigamento]);

    const handleNextPage = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulário Bloco 4 Página 1 válido!");
            navigate('/termo-de-envio/feito-pela-vitima');  // caminho atualizado aqui
        } else {
            console.log("Por favor, preencha todos os campos obrigatórios.");
        }
    };

    return (
        <div className="pagina-fonar">
            <div className="conteudo-principal">
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />
                <div className="form-container">
                    <form onSubmit={handleNextPage}>
                        <div className="form-group">
                            <label className="pergunta">
                                Você considera que mora em bairro, comunidade, área rural ou local de risco de violência?
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input type="radio" name="mora-risco" value="sim" checked={moraEmRisco === 'sim'} onChange={e => setMoraEmRisco(e.target.value)} />
                                    Sim
                                </label>
                                <label>
                                    <input type="radio" name="mora-risco" value="nao" checked={moraEmRisco === 'nao'} onChange={e => setMoraEmRisco(e.target.value)} />
                                    Não
                                </label>
                                <label>
                                    <input type="radio" name="mora-risco" value="nao-sei" checked={moraEmRisco === 'nao-sei'} onChange={e => setMoraEmRisco(e.target.value)} />
                                    Não sei
                                </label>
                            </div>
                            {erros.moraEmRisco && <div className="error-message">{erros.moraEmRisco}</div>}
                        </div>

                        <div className="form-group">
                            <label className="pergunta">Você se considera dependente financeiramente do(a) agressor(a)?</label>
                            <div className="opcoes">
                                <label>
                                    <input type="radio" name="dependente" value="sim" checked={dependenteFinanceiramente === 'sim'} onChange={e => setDependenteFinanceiramente(e.target.value)} />
                                    Sim
                                </label>
                                <label>
                                    <input type="radio" name="dependente" value="nao" checked={dependenteFinanceiramente === 'nao'} onChange={e => setDependenteFinanceiramente(e.target.value)} />
                                    Não
                                </label>
                            </div>
                            {erros.dependenteFinanceiramente && <div className="error-message">{erros.dependenteFinanceiramente}</div>}
                        </div>

                        <div className="form-group">
                            <label className="pergunta">Você quer e aceita abrigamento temporário?</label>
                            <div className="opcoes">
                                <label>
                                    <input type="radio" name="abrigamento" value="sim" checked={aceitaAbrigamento === 'sim'} onChange={e => setAceitaAbrigamento(e.target.value)} />
                                    Sim
                                </label>
                                <label>
                                    <input type="radio" name="abrigamento" value="nao" checked={aceitaAbrigamento === 'nao'} onChange={e => setAceitaAbrigamento(e.target.value)} />
                                    Não
                                </label>
                            </div>
                            {erros.aceitaAbrigamento && <div className="error-message">{erros.aceitaAbrigamento}</div>}
                        </div>

                        <div className="paginacao">
                            <Link to="/bloco3/page5" className="paginacao-btn">{'<'}</Link>
                            <span className="paginacao-atual">1</span>
                            <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioBloco4Pagina1;
