import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

// Removido o componente MenuLateral

const Etapas = () => (
    <div className="etapas-container">
        <div className="etapas">
            <div className="etapa completed"><span>1</span><div className="etapa-titulo">Identificação<br />das partes</div></div>
            <div className="linha completed"></div>
            <div className="etapa completed"><span>2</span><div className="etapa-titulo">Bloco I</div></div>
            <div className="linha completed"></div>
            <div className="etapa completed"><span>3</span><div className="etapa-titulo">Bloco II</div></div>
            <div className="linha completed"></div>
            <div className="etapa active"><span>4</span><div className="etapa-titulo">Bloco III</div></div>
            <div className="linha"></div>
            <div className="etapa"><span>5</span><div className="etapa-titulo">Bloco IV</div></div>
            <div className="linha"></div>
            <div className="etapa"><span>6</span><div className="etapa-titulo">Termo de envio</div></div>
        </div>
    </div>
);

function FormularioBloco3Pagina5() {
    const navigate = useNavigate();

    // --- Estados para os campos do formulário ---
    const [presenciaramViolencia, setPresenciaramViolencia] = useState('');
    const [violenciaGestacao, setViolenciaGestacao] = useState('');
    const [aumentoAgressao, setAumentoAgressao] = useState('');
    const [possuiDeficiencia, setPossuiDeficiencia] = useState('');
    const [especificacaoDeficiencia, setEspecificacaoDeficiencia] = useState('');

    // --- Estados para validação ---
    const [erros, setErros] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    // --- Função de validação ---
    const validateForm = () => {
        const currentErros = {};
        let valid = true;

        if (!presenciaramViolencia) {
            currentErros.presenciaramViolencia = 'Selecione uma opção.';
            valid = false;
        }
        if (!violenciaGestacao) {
            currentErros.violenciaGestacao = 'Selecione uma opção.';
            valid = false;
        }
        if (!aumentoAgressao) {
            currentErros.aumentoAgressao = 'Selecione uma opção.';
            valid = false;
        }
        if (!possuiDeficiencia) {
            currentErros.possuiDeficiencia = 'Selecione uma opção.';
            valid = false;
        } else if (possuiDeficiencia === 'sim' && !especificacaoDeficiencia.trim()) {
            currentErros.possuiDeficiencia = 'Por favor, especifique a condição.';
            valid = false;
        }

        setErros(currentErros);
        return valid;
    };

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [presenciaramViolencia, violenciaGestacao, aumentoAgressao, possuiDeficiencia, especificacaoDeficiencia]);

    const handleDeficienciaChange = (e) => {
        const { value } = e.target;
        setPossuiDeficiencia(value);
        if (value === 'nao') {
            setEspecificacaoDeficiencia('');
        }
    };

    const handleNextPage = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulário Bloco 3 Página 5 válido!");
            navigate('/bloco4/page1');
        } else {
            console.log("Por favor, preencha todos os campos obrigatórios.");
        }
    };

    return (
        <div className="pagina-fonar">
            {/* Removido o MenuLateral */}

            {/* Removida margem dinâmica */}
            <div className="conteudo-principal">
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />
                <div className="form-container">
                    <form onSubmit={handleNextPage}>
                        <div className="form-group">
                            <label className="pergunta">Seu(s) filho(s) já presenciaram ato(s) de violência do(a) agressor(a) contra você?</label>
                            <div className="opcoes">
                                <label><input type="radio" name="presenciaram-violencia" value="sim" checked={presenciaramViolencia === 'sim'} onChange={e => setPresenciaramViolencia(e.target.value)} />Sim</label>
                                <label><input type="radio" name="presenciaram-violencia" value="nao" checked={presenciaramViolencia === 'nao'} onChange={e => setPresenciaramViolencia(e.target.value)} />Não</label>
                            </div>
                            {erros.presenciaramViolencia && <div className="error-message">{erros.presenciaramViolencia}</div>}
                        </div>

                        <div className="form-group">
                            <label className="pergunta">Você já sofreu algum tipo de violência durante a gravidez ou nos três meses posteriores ao parto?</label>
                            <div className="opcoes">
                                <label><input type="radio" name="violencia-gestacao" value="sim" checked={violenciaGestacao === 'sim'} onChange={e => setViolenciaGestacao(e.target.value)} />Sim</label>
                                <label><input type="radio" name="violencia-gestacao" value="nao" checked={violenciaGestacao === 'nao'} onChange={e => setViolenciaGestacao(e.target.value)} />Não</label>
                            </div>
                            {erros.violenciaGestacao && <div className="error-message">{erros.violenciaGestacao}</div>}
                        </div>

                        <div className="form-group">
                            <label className="pergunta">Se você está em novo relacionamento, percebeu que as ameaças ou as agressões físicas aumentaram em razão disso?</label>
                            <div className="opcoes">
                                <label><input type="radio" name="aumento-agressao" value="sim" checked={aumentoAgressao === 'sim'} onChange={e => setAumentoAgressao(e.target.value)} />Sim</label>
                                <label><input type="radio" name="aumento-agressao" value="nao" checked={aumentoAgressao === 'nao'} onChange={e => setAumentoAgressao(e.target.value)} />Não</label>
                            </div>
                            {erros.aumentoAgressao && <div className="error-message">{erros.aumentoAgressao}</div>}
                        </div>

                        <div className="form-group">
                            <label className="pergunta">Você possui alguma deficiência ou é portadora de doenças degenerativas que acarretam condição limitante ou de vulnerabilidade física ou mental?</label>
                            <div className="opcoes">
                                <label><input type="radio" name="possui-deficiencia" value="sim" checked={possuiDeficiencia === 'sim'} onChange={handleDeficienciaChange} />Sim, qual(is)?</label>
                                <label><input type="radio" name="possui-deficiencia" value="nao" checked={possuiDeficiencia === 'nao'} onChange={handleDeficienciaChange} />Não</label>
                            </div>

                            {possuiDeficiencia === 'sim' && (
                                <textarea
                                    className="textarea-especificacao"
                                    value={especificacaoDeficiencia}
                                    onChange={(e) => setEspecificacaoDeficiencia(e.target.value)}
                                    placeholder="Descreva a condição aqui..."
                                    rows={4}
                                    style={{ marginTop: '10px', width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                                />
                            )}
                            {erros.possuiDeficiencia && <div className="error-message">{erros.possuiDeficiencia}</div>}
                        </div>

                        <div className="paginacao">
                            <Link to="/bloco3/page4" className="paginacao-btn">{'<'}</Link>
                            <Link to="/bloco3/page1" className="paginacao-outro">1</Link>
                            <Link to="/bloco3/page2" className="paginacao-outro">2</Link>
                            <Link to="/bloco3/page3" className="paginacao-outro">3</Link>
                            <Link to="/bloco3/page4" className="paginacao-outro">4</Link>
                            <span className="paginacao-atual">5</span>
                            <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioBloco3Pagina5;
