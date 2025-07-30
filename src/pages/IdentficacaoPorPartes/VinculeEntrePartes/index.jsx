import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../DadosDoAgressor/style.css';


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

const VinculeEntrePartes = () => {
    
    const [vinculo, setVinculo] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/bloco1/page1');
    };

    return (
        <div className="pagina-fonar">
            <div className="dados-da-vitima">
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />
                <div className="breadcrumbs">
                    <span>Dados da vítima</span>
                    <span className="breadcrumb-sep">{' > '}</span>
                    <span>Dados do Agressor</span>
                    <span className="breadcrumb-sep">{' > '}</span>
                    <span className="active-breadcrumb">Vínculo entre as partes</span>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="vinculo">Vínculo entre a vítima e o agressor<span className="required">*</span></label>
                            <input
                                type="text"
                                id="vinculo"
                                name="vinculo"
                                placeholder="Digite o vínculo entre a vítima e o agressor"
                                value={vinculo}
                                onChange={e => setVinculo(e.target.value)}
                                required
                            />
                        </div>
                        <button className="btn-avancar" type="submit">Avançar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VinculeEntrePartes;