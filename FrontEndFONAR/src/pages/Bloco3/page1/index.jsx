import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                <div className="etapa-titulo">Identificação<br />das partes</div>
            </div>
            <div className="linha completed"></div>
            <div className="etapa completed">
                <span>2</span>
                <div className="etapa-titulo">Bloco I</div>
            </div>
            <div className="linha completed"></div>
            <div className="etapa completed">
                <span>3</span>
                <div className="etapa-titulo">Bloco II</div>
            </div>
            <div className="linha completed"></div>
            <div className="etapa active">
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

function FormularioBloco3Pagina1() {
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

    const handleNextPage = (e) => {
        e.preventDefault();
        // Lógica de validação
        console.log("Formulário Bloco 3 Página 1 enviado.");
        navigate('/bloco3/page2'); // ajuste a rota conforme necessário
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
                                <label><input type="radio" name="separacao" value="sim" /> sim</label>
                                <label><input type="radio" name="separacao" value="nao" /> não</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className='pergunta'>Você tem filhos?</label>
                            <div className="opcoes">
                                <label>
                                    <input type="radio" name="filhos" value="sim_com_agressor" />
                                    Sim, com o agressor
                                    <input type="number" />
                                </label>
                                <label>
                                    <input type="radio" name="filhos" value="sim_outro_relacionamento" />
                                    Sim, de um outro relacionamento
                                    <input type="number" />
                                </label>
                                <label>
                                    <input type="radio" name="filhos" value="nao" />
                                    Não
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className='pergunta'>Se sim, informe a idade dos seus filhos. Se tiver mais de um filho, pode selecionar mais de uma opção</label>
                            <div className="opcoes">
                                <label><input type="radio" name="idade-filhos" value="0-11" /> 0 a 11 anos</label>
                                <label><input type="radio" name="idade-filhos" value="12-17" /> 12 a 17 anos</label>
                                <label><input type="radio" name="idade-filhos" value="18-mais" /> A partir de 18 anos</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className='pergunta'>Algum de seus filhos é uma pessoa com deficiência?</label>
                            <div className="opcoes">
                                <label><input type="radio" name="deficiencia" value="sim" /> sim</label>
                                <label><input type="radio" name="deficiencia" value="nao" /> não</label>
                            </div>
                        </div>

                        <button type="submit" className="btn-enviar">Próximo</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioBloco3Pagina1;
