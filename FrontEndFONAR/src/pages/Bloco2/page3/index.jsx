import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="etapa completed">
                <span>2</span>
                <div className="etapa-titulo">Bloco I</div>
            </div>
            <div className="linha completed"></div>


            <div className="etapa active">
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

function FormularioBloco2Pagina3() {
    const [usoDrogasAlcool, setUsoDrogasAlcool] = useState('');
    const [doencaMental, setDoencaMental] = useState('');
    const [descumpriuMedida, setDescumpriuMedida] = useState('');
    const [erros, setErros] = useState({});

    const validarCampos = () => {
        let valid = true;
        let newErros = {};

        if (!usoDrogasAlcool) {
            newErros.usoDrogasAlcool = 'Selecione uma opção.';
            valid = false;
        }
        if (!doencaMental) {
            newErros.doencaMental = 'Selecione uma opção.';
            valid = false;
        }
        if (!descumpriuMedida) {
            newErros.descumpriuMedida = 'Selecione uma opção.';
            valid = false;
        }

        setErros(newErros);
        return valid;
    };

    const handleNextPage = (e) => {
        e.preventDefault();
        if (validarCampos()) {
            console.log("Formulário Bloco II Página 1 válido!");
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
                                O(A) agressor(a) faz uso abusivo de álcool ou de drogas?
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="radio"
                                        name="usoDrogasAlcool"
                                        value="sim-alcool"
                                        checked={usoDrogasAlcool === 'sim-alcool'}
                                        onChange={(e) => setUsoDrogasAlcool(e.target.value)}
                                    /> Sim, de álcool
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="usoDrogasAlcool"
                                        value="sim-drogas"
                                        checked={usoDrogasAlcool === 'sim-drogas'}
                                        onChange={(e) => setUsoDrogasAlcool(e.target.value)}
                                    /> Sim, de drogas
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="usoDrogasAlcool"
                                        value="nao"
                                        checked={usoDrogasAlcool === 'nao'}
                                        onChange={(e) => setUsoDrogasAlcool(e.target.value)}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="usoDrogasAlcool"
                                        value="nao-sei"
                                        checked={usoDrogasAlcool === 'nao-sei'}
                                        onChange={(e) => setUsoDrogasAlcool(e.target.value)}
                                    /> Não sei
                                </label>
                            </div>
                            {erros.usoDrogasAlcool && (
                                <div className="error-message">{erros.usoDrogasAlcool}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) tem alguma doença mental comprovada por avaliação médica?
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="radio"
                                        name="doencaMental"
                                        value="sim-medicacao"
                                        checked={doencaMental === 'sim-medicacao'}
                                        onChange={(e) => setDoencaMental(e.target.value)}
                                    /> Sim e faz uso de medicação
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="doencaMental"
                                        value="sim-nao-medicacao"
                                        checked={doencaMental === 'sim-nao-medicacao'}
                                        onChange={(e) => setDoencaMental(e.target.value)}
                                    /> Sim e não faz uso de medicação
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="doencaMental"
                                        value="nao"
                                        checked={doencaMental === 'nao'}
                                        onChange={(e) => setDoencaMental(e.target.value)}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="doencaMental"
                                        value="nao-sei"
                                        checked={doencaMental === 'nao-sei'}
                                        onChange={(e) => setDoencaMental(e.target.value)}
                                    /> Não sei
                                </label>
                            </div>
                            {erros.doencaMental && (
                                <div className="error-message">{erros.doencaMental}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) já descumpriu medida protetiva anteriormente?
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="radio"
                                        name="descumpriuMedida"
                                        value="sim"
                                        checked={descumpriuMedida === 'sim'}
                                        onChange={(e) => setDescumpriuMedida(e.target.value)}
                                    /> Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="descumpriuMedida"
                                        value="nao"
                                        checked={descumpriuMedida === 'nao'}
                                        onChange={(e) => setDescumpriuMedida(e.target.value)}
                                    /> Não
                                </label>
                            </div>
                            {erros.descumpriuMedida && (
                                <div className="error-message">{erros.descumpriuMedida}</div>
                            )}
                        </div>

                        <div className="paginacao">
                            <Link to="/bloco2/page2" className="paginacao-btn">{'<'}</Link>
                            <Link to="/bloco2/page1" className="paginacao-outro">1</Link>
                            <Link to="/bloco2/page2" className="paginacao-outro">2</Link>
                            <span className="paginacao-atual">3</span>
                            <button type="submit" className="paginacao-btn">{'>'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioBloco2Pagina3;