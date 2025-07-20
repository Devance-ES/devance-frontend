import React, { useState } from 'react';
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

function TermoDeEnvioVitima() {
    const navigate = useNavigate();
    const [concordouTermos, setConcordouTermos] = useState(false);

    const handleEnviarFormulario = (e) => {
        e.preventDefault();
        if (concordouTermos) {
            console.log("Formulário ENVIADO COM SUCESSO!");
            navigate('/termo-de-envio/feito-pelo-profissional');  // caminho atualizado aqui
        } else {
            console.log("É necessário concordar com os termos para enviar.");
        }
    };

    return (
        <div className="pagina-fonar">
            <div className="conteudo-principal">
                <Etapas />
                <div className="form-container" style={{ textAlign: 'center' }}>
                    <h1 className="titulo-fonar" style={{ fontSize: '24px', marginBottom: '20px' }}>
                        Termo de Segurança e Privacidade dos Dados
                    </h1>

                    <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', color: '#333' }}>
                        Concordo com a análise dos dados pessoais solicitados, de acordo com os artigos 7º e 11º da Lei nº 13.709/2018 (LGPD).
                        Ficando esta responsável em adotar as medidas aptas para proteger os dados de toda documentação enviada.
                        Declaro, para fins de direito, que as informações supra são verídicas e foram prestadas por mim.
                    </p>

                    <form onSubmit={handleEnviarFormulario} style={{ marginTop: '40px' }}>
                        <div className="form-group" style={{ alignItems: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={concordouTermos}
                                    onChange={(e) => setConcordouTermos(e.target.checked)}
                                    style={{ width: '20px', height: '20px', accentColor: '#8e44ad' }}
                                />
                                Concordo com os termos.
                            </label>
                        </div>

                        <button
                            type="submit"
                            style={concordouTermos ? botaoEnviarStyle : botaoEnviarDesabilitadoStyle}
                            disabled={!concordouTermos}
                        >
                            Enviar formulário
                        </button>
                    </form>

                    <div className="paginacao" style={{ justifyContent: 'flex-start', marginTop: '60px' }}>
                        <Link to="/bloco4/page1" className="paginacao-btn">{'< Voltar'}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermoDeEnvioVitima;
