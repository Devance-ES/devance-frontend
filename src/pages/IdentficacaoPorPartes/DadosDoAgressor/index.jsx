import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import './style.css';


const Etapas = () => (
    <div className="etapas-container">
        <div className="etapas">
            <div className="etapa active">
                <span>1</span>
                <div>
                    <div className="etapa-titulo ativo">Identificação<br />das partes</div>
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

const DadosDoAgressor = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/identificacaoporpartes/vinculoentrepartes');
    };

    return (
        <div className="pagina-fonar">
            <div className="dados-da-vitima"> 
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />
                <div className="breadcrumbs">
                    <span>Dados da vítima</span>
                    <span className="breadcrumb-sep">{' > '}</span>
                    <span className="active-breadcrumb">Dados do Agressor</span>
                    <span className="breadcrumb-sep">{' > '}</span>
                    <span>Vínculo entre as partes</span>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome-agressor">Nome do agressor<span className="required">*</span></label>
                            <input type="text" id="nome-agressor" name="nome-agressor" placeholder="Digite o nome do agressor" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="idade-agressor">Idade do agressor<span className="required">*</span></label>
                                <select id="idade-agressor" name="idade-agressor" required>
                                    <option value="">Selecione</option>
                                    {Array.from({ length: 131 }, (_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="escolaridade-agressor">Escolaridade<span className="required">*</span></label>
                                <select id="escolaridade-agressor" name="escolaridade-agressor" required>
                                    <option value="">Selecione</option>
                                    <option value="fundamental-incompleto">Fundamental Incompleto</option>
                                    <option value="fundamental-completo">Fundamental Completo</option>
                                    <option value="medio-incompleto">Médio Incompleto</option>
                                    <option value="medio-completo">Médio Completo</option>
                                    <option value="superior-incompleto">Superior Incompleto</option>
                                    <option value="superior-completo">Superior Completo</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nacionalidade-agressor">Nacionalidade<span className="required">*</span></label>
                                <select id="nacionalidade-agressor" name="nacionalidade-agressor" required>
                                    <option value="">Selecione</option>
                                    <option value="brasileira">Brasileira</option>
                                    <option value="estrangeira">Estrangeira</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn-avancar" type="submit">Avançar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DadosDoAgressor;