import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuLateral from '../MenuLateral';
import Etapas from '../Etapas';
import './style.css';

function Bloco2Page() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [usoAbusivo, setUsoAbusivo] = useState('');
    const [doencaMental, setDoencaMental] = useState('');
    const [descumpriuMedida, setDescumpriuMedida] = useState('');
    const [erros, setErros] = useState({});

    const validarCampos = () => {
        let valid = true;
        let newErros = {};
        if (!usoAbusivo) {
            newErros.usoAbusivo = 'Selecione uma opção.';
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

    return (
        <div className="pagina-fonar">
            <MenuLateral aberto={menuAberto} onToggle={() => setMenuAberto(!menuAberto)} />
            <div className="dados-da-vitima">
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) faz uso abusivo de álcool ou de drogas?
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="radio"
                                        name="usoAbusivo"
                                        value="alcool"
                                        checked={usoAbusivo === 'alcool'}
                                        onChange={() => setUsoAbusivo('alcool')}
                                    /> Sim, de álcool
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="usoAbusivo"
                                        value="drogas"
                                        checked={usoAbusivo === 'drogas'}
                                        onChange={() => setUsoAbusivo('drogas')}
                                    /> Sim, de drogas
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="usoAbusivo"
                                        value="nao"
                                        checked={usoAbusivo === 'nao'}
                                        onChange={() => setUsoAbusivo('nao')}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="usoAbusivo"
                                        value="nao-sei"
                                        checked={usoAbusivo === 'nao-sei'}
                                        onChange={() => setUsoAbusivo('nao-sei')}
                                    /> Não sei
                                </label>
                            </div>
                            {erros.usoAbusivo && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.usoAbusivo}</div>
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
                                        onChange={() => setDoencaMental('sim-medicacao')}
                                    /> Sim e faz uso de medicação
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="doencaMental"
                                        value="sim-sem-medicacao"
                                        checked={doencaMental === 'sim-sem-medicacao'}
                                        onChange={() => setDoencaMental('sim-sem-medicacao')}
                                    /> Sim e não faz uso de medicação
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="doencaMental"
                                        value="nao"
                                        checked={doencaMental === 'nao'}
                                        onChange={() => setDoencaMental('nao')}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="doencaMental"
                                        value="nao-sei"
                                        checked={doencaMental === 'nao-sei'}
                                        onChange={() => setDoencaMental('nao-sei')}
                                    /> Não sei
                                </label>
                            </div>
                            {erros.doencaMental && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.doencaMental}</div>
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
                                        onChange={() => setDescumpriuMedida('sim')}
                                    /> Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="descumpriuMedida"
                                        value="nao"
                                        checked={descumpriuMedida === 'nao'}
                                        onChange={() => setDescumpriuMedida('nao')}
                                    /> Não
                                </label>
                            </div>
                            {erros.descumpriuMedida && (
                                <div style={{ color: 'red', fontSize: 13 }}>{erros.descumpriuMedida}</div>
                            )}
                        </div>
                        <div className="paginacao">
                            <Link to="/bloco1/page2" className="paginacao-outro">1</Link>
                            <Link to="/bloco1/page3" className="paginacao-outro">2</Link>
                            <span className="paginacao-atual">3</span>
                            <Link to="/bloco3/page1" className="paginacao-btn">{'>'}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Bloco2Page;