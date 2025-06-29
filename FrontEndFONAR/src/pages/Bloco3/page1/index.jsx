import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'; // Certifique-se que seu CSS suporta o layout

// O componente MenuLateral permanece o mesmo
const MenuLateral = ({ aberto, onToggle }) => (
    <aside className={`menu-lateral${aberto ? ' aberto' : ''}`}>
        <button className="btn-menu" onClick={onToggle}>
            <span className="menu-icone">&#9776;</span>
        </button>
        <nav className="menu-links">
            {aberto && (
                <>
                    <a href="#!" className="menu-item">#</a>
                    <a href="#!" className="menu-item">#</a>
                    <a href="#!" className="menu-item">#</a>
                </>
            )}
        </nav>
    </aside>
);

// O componente Etapas permanece o mesmo
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


function FormularioBloco3Pagina1() {
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

    // --- Estados para os campos do formulário ---
    const [separacao, setSeparacao] = useState('');
    const [temFilhos, setTemFilhos] = useState('');
    const [numFilhosAgressor, setNumFilhosAgressor] = useState('');
    const [numFilhosOutro, setNumFilhosOutro] = useState('');
    const [idadeFilhos, setIdadeFilhos] = useState([]);
    const [filhoComDeficiencia, setFilhoComDeficiencia] = useState('');

    // --- Estados para validação ---
    const [erros, setErros] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    // --- Função de validação atualizada ---
    const validateForm = () => {
        const currentErros = {};
        let valid = true;

        if (!separacao) {
            currentErros.separacao = 'Selecione uma opção.';
            valid = false;
        }

        if (!temFilhos) {
            currentErros.temFilhos = 'Selecione uma opção.';
            valid = false;
        } else {
            // Valida se a quantidade foi selecionada quando "Sim" está marcado
            if (temFilhos === 'sim_com_agressor' && !numFilhosAgressor) {
                currentErros.temFilhos = 'Por favor, selecione a quantidade de filhos.';
                valid = false;
            }
            if (temFilhos === 'sim_outro_relacionamento' && !numFilhosOutro) {
                currentErros.temFilhos = 'Por favor, selecione a quantidade de filhos.';
                valid = false;
            }

            // Se tem filhos, as perguntas seguintes são obrigatórias
            if (temFilhos.startsWith('sim')) {
                if (idadeFilhos.length === 0) {
                    currentErros.idadeFilhos = 'Selecione ao menos uma faixa etária.';
                    valid = false;
                }
                if (!filhoComDeficiencia) {
                    currentErros.filhoComDeficiencia = 'Selecione uma opção.';
                    valid = false;
                }
            }
        }

        setErros(currentErros);
        return valid;
    };

    // --- Efeito para re-validar o formulário a cada mudança ---
    useEffect(() => {
        setIsFormValid(validateForm());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [separacao, temFilhos, numFilhosAgressor, numFilhosOutro, idadeFilhos, filhoComDeficiencia]);

    // Handler para os radio buttons de "temFilhos" para limpar os selects
    const handleTemFilhosChange = (e) => {
        const { value } = e.target;
        setTemFilhos(value);
        if (value !== 'sim_com_agressor') {
            setNumFilhosAgressor('');
        }
        if (value !== 'sim_outro_relacionamento') {
            setNumFilhosOutro('');
        }
        if (value === 'nao') {
            setIdadeFilhos([]);
            setFilhoComDeficiencia('');
        }
    };

    const handleIdadeFilhosChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setIdadeFilhos(prev => [...prev, value]);
        } else {
            setIdadeFilhos(prev => prev.filter(item => item !== value));
        }
    };

    const handleNextPage = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulário Bloco 3 Página 1 válido!");
            navigate('/bloco3/page2');
        } else {
            console.log("Por favor, preencha todos os campos obrigatórios.");
        }
    };

    return (
        <div className="pagina-fonar">
            <MenuLateral aberto={menuAberto} onToggle={() => setMenuAberto(!menuAberto)} />

            <div className="conteudo-principal" style={{ marginLeft: menuAberto ? '220px' : '72px' }}>
                <h1 className="titulo-fonar">Formulário FONAR</h1>
                <Etapas />

                <div className="form-container">
                    <form onSubmit={handleNextPage}>
                        <div className="form-group">
                            <label className='pergunta'>Você se separou recentemente do(a) agressor(a) ou tentou se separar?</label>
                            <div className="opcoes">
                                <label><input type="radio" name="separacao" value="sim" checked={separacao === 'sim'} onChange={(e) => setSeparacao(e.target.value)} /> sim</label>
                                <label><input type="radio" name="separacao" value="nao" checked={separacao === 'nao'} onChange={(e) => setSeparacao(e.target.value)} /> não</label>
                            </div>
                            {erros.separacao && <div className="error-message">{erros.separacao}</div>}
                        </div>


                        <div className="form-group">
                            <label className='pergunta'>Você tem filhos?</label>
                            <div className="opcoes-coluna">
                                <div className="opcao-com-select">
                                    <label className="label-radio">
                                        <input type="radio" name="filhos" value="sim_com_agressor" checked={temFilhos === 'sim_com_agressor'} onChange={handleTemFilhosChange} />
                                        Sim, com o agressor. Quantos?
                                    </label>
                                    <select
                                        value={numFilhosAgressor}
                                        onChange={e => setNumFilhosAgressor(e.target.value)}
                                        disabled={temFilhos !== 'sim_com_agressor'}
                                    >
                                        <option value="" disabled>Selecione</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5+">5 ou mais</option>
                                    </select>
                                </div>

                                <div className="opcao-com-select">
                                    <label className="label-radio">
                                        <input type="radio" name="filhos" value="sim_outro_relacionamento" checked={temFilhos === 'sim_outro_relacionamento'} onChange={handleTemFilhosChange} />
                                        Sim, de um outro relacionamento. Quantos?
                                    </label>
                                    <select
                                        value={numFilhosOutro}
                                        onChange={e => setNumFilhosOutro(e.target.value)}
                                        disabled={temFilhos !== 'sim_outro_relacionamento'}
                                    >
                                        <option value="" disabled>Selecione</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5+">5 ou mais</option>
                                    </select>
                                </div>


                                <div className="opcao-com-select">
                                    <label className="label-radio">
                                        <input type="radio" name="filhos" value="nao" checked={temFilhos === 'nao'} onChange={handleTemFilhosChange} />
                                        Não
                                    </label>
                                </div>
                            </div>
                            {erros.temFilhos && <div className="error-message">{erros.temFilhos}</div>}
                        </div>


                        {temFilhos.startsWith('sim') && (
                            <div className="form-group">
                                <label className='pergunta'>Informe a idade dos seus filhos (pode selecionar mais de uma opção)</label>
                                <div className="opcoes">
                                    <label><input type="checkbox" name="idade-filhos" value="0-11" checked={idadeFilhos.includes('0-11')} onChange={handleIdadeFilhosChange} /> 0 a 11 anos</label>
                                    <label><input type="checkbox" name="idade-filhos" value="12-17" checked={idadeFilhos.includes('12-17')} onChange={handleIdadeFilhosChange} /> 12 a 17 anos</label>
                                    <label><input type="checkbox" name="idade-filhos" value="18-mais" checked={idadeFilhos.includes('18-mais')} onChange={handleIdadeFilhosChange} /> A partir de 18 anos</label>
                                </div>
                                {erros.idadeFilhos && <div className="error-message">{erros.idadeFilhos}</div>}
                            </div>
                        )}

                        {temFilhos.startsWith('sim') && (
                            <div className="form-group">
                                <label className='pergunta'>Algum de seus filhos é uma pessoa com deficiência?</label>
                                <div className="opcoes">
                                    <label><input type="radio" name="deficiencia" value="sim" checked={filhoComDeficiencia === 'sim'} onChange={(e) => setFilhoComDeficiencia(e.target.value)} /> sim</label>
                                    <label><input type="radio" name="deficiencia" value="nao" checked={filhoComDeficiencia === 'nao'} onChange={(e) => setFilhoComDeficiencia(e.target.value)} /> não</label>
                                </div>
                                {erros.filhoComDeficiencia && <div className="error-message">{erros.filhoComDeficiencia}</div>}
                            </div>
                        )}

                        {/* Navegação Paginada */}
                        <div className="paginacao">
                            <Link to="/bloco2/page3" className="paginacao-btn">{'<'}</Link>
                            <span className="paginacao-atual">1</span>
                            <Link to="/bloco3/page2" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>2</Link>
                            <Link to="/bloco3/page3" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>3</Link>
                            <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioBloco3Pagina1;