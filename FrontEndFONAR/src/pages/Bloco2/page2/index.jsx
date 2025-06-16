import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const MenuLateral = ({ aberto, onToggle }) => (
    <aside className={`menu-lateral${aberto ? ' aberto' : ''}`}>
        <button className="btn-menu" onClick={onToggle}>
            <span className="menu-icone">&#9776;</span>
        </button>
        <nav className="menu-links">
            {aberto && (
                <>
                    <a href="#" className="menu-item">#</a>
                    <a href="#" className="menu-item">#</a>
                    <a href="#" className="menu-item">#</a>
                </>
            )}
        </nav>
    </aside>
);

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

function FormularioBloco2Pagina2() {
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);
    const [tentouSuicidar, setTentouSuicidar] = useState('');
    const [desempregadoOuDificuldades, setDesempregadoOuDificuldades] = useState('');
    const [acessoArmas, setAcessoArmas] = useState('');
    const [ameacouOuAgrediu, setAmeacouOuAgrediu] = useState([]);
    const [erros, setErros] = useState({});
    const [isFormValid, setIsFormValid] = useState(false); // Novo estado para validade do formulário

    const handleAmeacouOuAgrediu = (value) => {
        setAmeacouOuAgrediu(prev => {
            // Se 'nao' for selecionado, deselecionar tudo mais
            if (value === 'nao') {
                return ['nao'];
            }
            // Se algo mais for selecionado, remover 'nao' se estiver presente
            if (prev.includes('nao')) {
                return prev.filter(item => item !== 'nao');
            }
            // Lógica normal para adicionar/remover
            return prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        });
    };


    const validateForm = () => {
        let currentErros = {};
        let valid = true;

        if (!tentouSuicidar) {
            currentErros.tentouSuicidar = 'Selecione uma opção.';
            valid = false;
        }
        if (!desempregadoOuDificuldades) {
            currentErros.desempregadoOuDificuldades = 'Selecione uma opção.';
            valid = false;
        }
        if (!acessoArmas) {
            currentErros.acessoArmas = 'Selecione uma opção.';
            valid = false;
        }
        // Para checkbox, verificar se pelo menos um está selecionado
        if (ameacouOuAgrediu.length === 0) {
            currentErros.ameacouOuAgrediu = 'Selecione pelo menos uma opção.';
            valid = false;
        } else if (ameacouOuAgrediu.includes('nao') && ameacouOuAgrediu.length > 1) {
            currentErros.ameacouOuAgrediu = 'Não pode ser selecionado com outras opções.';
            valid = false;
        }


        setErros(currentErros);
        return valid;
    };

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [tentouSuicidar, desempregadoOuDificuldades, acessoArmas, ameacouOuAgrediu]);

    const handleNextPage = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulário Bloco II Página 2 válido!");
            navigate('/bloco2/page3');
        } else {
            console.log("Por favor, preencha todos os campos obrigatórios.");
        }
    };

    return (
        <div className="pagina-fonar">
            <MenuLateral aberto={menuAberto} onToggle={() => setMenuAberto(!menuAberto)} />
            <div className="dados-da-vitima">
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />
                <div className="form-container">
                    <form onSubmit={handleNextPage}>
                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) já descumpriu medida protetiva anteriormente? O(A) agressor(a) já tentou suicídio ou falou em suicidar-se?
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="radio"
                                        name="tentouSuicidar"
                                        value="sim"
                                        checked={tentouSuicidar === 'sim'}
                                        onChange={(e) => setTentouSuicidar(e.target.value)}
                                    /> Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="tentouSuicidar"
                                        value="nao"
                                        checked={tentouSuicidar === 'nao'}
                                        onChange={(e) => setTentouSuicidar(e.target.value)}
                                    /> Não
                                </label>
                            </div>
                            {erros.tentouSuicidar && (
                                <div className="error-message">{erros.tentouSuicidar}</div>
                            )}
                        </div>

                        <div className="form-group grid-2-columns">
                            <div className="sub-form-group">
                                <label className="pergunta">
                                    O(A) agressor(a) está desempregado ou tem dificuldades financeiras?
                                </label>
                                <div className="opcoes">
                                    <label>
                                        <input
                                            type="radio"
                                            name="desempregadoOuDificuldades"
                                            value="sim"
                                            checked={desempregadoOuDificuldades === 'sim'}
                                            onChange={(e) => setDesempregadoOuDificuldades(e.target.value)}
                                        /> Sim
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="desempregadoOuDificuldades"
                                            value="nao"
                                            checked={desempregadoOuDificuldades === 'nao'}
                                            onChange={(e) => setDesempregadoOuDificuldades(e.target.value)}
                                        /> Não
                                    </label>
                                </div>
                                {erros.desempregadoOuDificuldades && (
                                    <div className="error-message">{erros.desempregadoOuDificuldades}</div>
                                )}
                            </div>

                            <div className="sub-form-group">
                                <label className="pergunta">
                                    O(A) agressor(a) tem acesso a armas de fogo?
                                </label>
                                <div className="opcoes">
                                    <label>
                                        <input
                                            type="radio"
                                            name="acessoArmas"
                                            value="sim"
                                            checked={acessoArmas === 'sim'}
                                            onChange={(e) => setAcessoArmas(e.target.value)}
                                        /> Sim
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="acessoArmas"
                                            value="nao"
                                            checked={acessoArmas === 'nao'}
                                            onChange={(e) => setAcessoArmas(e.target.value)}
                                        /> Não
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="acessoArmas"
                                            value="nao-sei"
                                            checked={acessoArmas === 'nao-sei'}
                                            onChange={(e) => setAcessoArmas(e.target.value)}
                                        /> Não sei
                                    </label>
                                </div>
                                {erros.acessoArmas && (
                                    <div className="error-message">{erros.acessoArmas}</div>
                                )}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="pergunta">
                                O(A) agressor(a) já ameaçou ou agrediu seus filhos, outros familiares, amigos, colegas de trabalho, pessoas desconhecidas ou animais de estimação?
                            </label>
                            <div className="opcoes">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacouOuAgrediu"
                                        value="sim-especifique"
                                        checked={ameacouOuAgrediu.includes('sim-especifique')}
                                        onChange={() => handleAmeacouOuAgrediu('sim-especifique')}
                                    /> Sim, Especifique
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacouOuAgrediu"
                                        value="filhos"
                                        checked={ameacouOuAgrediu.includes('filhos')}
                                        onChange={() => handleAmeacouOuAgrediu('filhos')}
                                    /> Filhos
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacouOuAgrediu"
                                        value="outros-familiares"
                                        checked={ameacouOuAgrediu.includes('outros-familiares')}
                                        onChange={() => handleAmeacouOuAgrediu('outros-familiares')}
                                    /> Outros familiares
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacouOuAgrediu"
                                        value="outras-pessoas"
                                        checked={ameacouOuAgrediu.includes('outras-pessoas')}
                                        onChange={() => handleAmeacouOuAgrediu('outras-pessoas')}
                                    /> Outras pessoas
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacouOuAgrediu"
                                        value="animais"
                                        checked={ameacouOuAgrediu.includes('animais')}
                                        onChange={() => handleAmeacouOuAgrediu('animais')}
                                    /> Animais
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacouOuAgrediu"
                                        value="nao"
                                        checked={ameacouOuAgrediu.includes('nao')}
                                        onChange={() => handleAmeacouOuAgrediu('nao')}
                                    /> Não
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ameacouOuAgrediu"
                                        value="nao-sei"
                                        checked={ameacouOuAgrediu.includes('nao-sei')}
                                        onChange={() => handleAmeacouOuAgrediu('nao-sei')}
                                    /> Não sei
                                </label>
                            </div>
                            {erros.ameacouOuAgrediu && (
                                <div className="error-message">{erros.ameacouOuAgrediu}</div>
                            )}
                        </div>

                        <div className="paginacao">
                            <Link to="/bloco2/page1" className="paginacao-btn">{'<'}</Link>
                            <Link to="/bloco2/page1" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>1</Link>
                            <span className="paginacao-atual">2</span>
                            <Link to="/bloco2/page3" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>3</Link>
                            <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioBloco2Pagina2;