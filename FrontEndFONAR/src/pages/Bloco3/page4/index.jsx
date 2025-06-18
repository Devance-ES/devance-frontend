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


function FormularioBloco3Pagina4() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);
  const [especificacao, setEspecificacao] = useState('');

  const handleNextPage = (e) => {
    e.preventDefault();
    // Aqui pode validar se for necessário, por exemplo, se 'sim' estiver selecionado e especificação estiver vazia, pedir para preencher

    // Para este exemplo simples, só navega adiante
    navigate('/bloco3/page5');
  };

  return (
    <div className="pagina-fonar">
      <MenuLateral aberto={menuAberto} onToggle={() => setMenuAberto(!menuAberto)} />
      <h1 className="titulo-fonar">Formulário FONAR</h1>
      <Etapas />
      <div className="conteudo-principal" style={{ marginLeft: menuAberto ? '220px' : '72px' }}>
        <div className="form-container">
          <form onSubmit={handleNextPage}>
            <div className="form-group">
              <label className="pergunta">
                O(A) agressor(a) já ameaçou ou agrediu seus filhos, outros familiares, amigos, colegas de trabalho, pessoas desconhecidas ou animais de estimação?
              </label>
              <div className="opcoes">
                <label>
                  <input
                    type="radio"
                    name="agressor_ameaça"
                    value="sim"
                    onChange={() => setEspecificacao('')}
                  />{' '}
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="agressor_ameaça"
                    value="nao"
                    onChange={() => setEspecificacao('')}
                  />{' '}
                  Não
                </label>
                <label>
                  <input
                    type="radio"
                    name="agressor_ameaça"
                    value="nao-sei"
                    onChange={() => setEspecificacao('')}
                  />{' '}
                  Não sei
                </label>
              </div>
            </div>

            {/* Campo para especificar se respondeu 'sim' */}
            <div className="form-group">
              <label className="pergunta">
                Especifique (filhos, outros familiares, outras pessoas, animais):
              </label>
              <textarea
                value={especificacao}
                onChange={(e) => setEspecificacao(e.target.value)}
                placeholder="Escreva aqui a especificação"
                rows={4}
                style={{ resize: 'vertical' }}
              />
            </div>

            <div className="paginacao">
              <button type="submit" className="paginacao-btn">
                Próximo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioBloco3Pagina4;
