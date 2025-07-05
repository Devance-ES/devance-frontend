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
            <div className="etapa completed"><span>5</span><div className="etapa-titulo">Bloco IV</div></div>
            <div className="linha completed"></div>
            <div className="etapa active"><span>6</span><div className="etapa-titulo">Termo de envio</div></div>
        </div>
    </div>
);

// Estilo customizado para o botão de envio
const botaoEnviarStyle = {
    backgroundColor: '#8e44ad',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'background-color 0.3s, opacity 0.3s'
};

const botaoEnviarDesabilitadoStyle = {
    ...botaoEnviarStyle,
    backgroundColor: '#c7c7c7',
    cursor: 'not-allowed',
    opacity: 0.7
};

function PreenchimentoProfissional() {
    const navigate = useNavigate();
    const [modoPreenchimento, setModoPreenchimento] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(modoPreenchimento !== '');
    }, [modoPreenchimento]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            console.log("Por favor, selecione uma opção de preenchimento.");
            return;
        }

        const podeProsseguir = [
            'sem_ajuda',
            'com_ajuda',
            'terceiro'
        ].includes(modoPreenchimento);

        if (podeProsseguir) {
            console.log("Iniciando formulário. Modo:", modoPreenchimento);
            navigate('/identificacao-partes');
        } else {
            console.log("Registro finalizado. Motivo:", modoPreenchimento);
            alert(`Registro finalizado. Motivo: A vítima ${modoPreenchimento === 'sem_condicoes' ? 'não teve condições de responder' : 'recusou-se a preencher'}.`);
        }
    };

    return (
        <div className="pagina-fonar">
            {/* MenuLateral removido completamente */}

            <div className="conteudo-principal" style={{ justifyContent: 'flex-start', paddingTop: '5vh' }}>
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />

                <div className="form-container" style={{ marginTop: '50px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="pergunta" style={{ fontSize: '20px', textAlign: 'center' }}>
                                Preenchimento pelo profissional:
                            </label>
                            <div
                                className="opcoes"
                                style={{
                                    marginTop: '20px',
                                    alignItems: 'flex-start',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '0 auto',
                                    maxWidth: '500px'
                                }}
                            >
                                <label>
                                    <input type="radio" name="modo-preenchimento" value="sem_ajuda"
                                           checked={modoPreenchimento === 'sem_ajuda'}
                                           onChange={e => setModoPreenchimento(e.target.value)} />
                                    Vítima respondeu a este formulário sem ajuda profissional.
                                </label>
                                <label>
                                    <input type="radio" name="modo-preenchimento" value="com_ajuda"
                                           checked={modoPreenchimento === 'com_ajuda'}
                                           onChange={e => setModoPreenchimento(e.target.value)} />
                                    Vítima respondeu a este formulário com auxílio profissional.
                                </label>
                                <label>
                                    <input type="radio" name="modo-preenchimento" value="sem_condicoes"
                                           checked={modoPreenchimento === 'sem_condicoes'}
                                           onChange={e => setModoPreenchimento(e.target.value)} />
                                    Vítima não teve condições de responder a este formulário.
                                </label>
                                <label>
                                    <input type="radio" name="modo-preenchimento" value="recusou"
                                           checked={modoPreenchimento === 'recusou'}
                                           onChange={e => setModoPreenchimento(e.target.value)} />
                                    Vítima recusou-se a preencher o formulário.
                                </label>
                                <label>
                                    <input type="radio" name="modo-preenchimento" value="terceiro"
                                           checked={modoPreenchimento === 'terceiro'}
                                           onChange={e => setModoPreenchimento(e.target.value)} />
                                    Terceiro comunicante respondeu a este formulário.
                                </label>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <button
                                type="submit"
                                style={isFormValid ? botaoEnviarStyle : botaoEnviarDesabilitadoStyle}
                                disabled={!isFormValid}
                            >
                                Enviar formulário
                            </button>
                        </div>
                    </form>

                    {/* Botão de voltar */}
                    <div className="paginacao" style={{ justifyContent: 'flex-start', marginTop: '60px' }}>
                        <Link to="/" className="paginacao-btn">{'< Voltar'}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreenchimentoProfissional;
