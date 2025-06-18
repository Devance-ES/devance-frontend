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

function FormularioBloco3Pagina3() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const handleNextPage = (e) => {
    e.preventDefault();
    navigate('/bloco3/page4'); // ajuste essa rota conforme seu fluxo
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
              <label className="pergunta">O(A) agressor(a) já tentou suicídio ou falou em suicidar-se?</label>
              <div className="opcoes">
                <label><input type="radio" name="suicidio" value="sim" /> Sim</label>
                <label><input type="radio" name="suicidio" value="nao" /> Não</label>
              </div>
            </div>

            <div className="form-group">
              <label className="pergunta">O(A) agressor(a) está desempregado ou tem dificuldades financeiras?</label>
              <div className="opcoes">
                <label><input type="radio" name="financeiro" value="sim" /> Sim</label>
                <label><input type="radio" name="financeiro" value="nao" /> Não</label>
                <label><input type="radio" name="financeiro" value="nao-sei" /> Não sei</label>
              </div>
            </div>

            <div className="form-group">
              <label className="pergunta">O(A) agressor(a) tem acesso a armas de fogo?</label>
              <div className="opcoes">
                <label><input type="radio" name="arma" value="sim" /> Sim</label>
                <label><input type="radio" name="arma" value="nao" /> Não</label>
                <label><input type="radio" name="arma" value="nao-sei" /> Não sei</label>
              </div>
            </div>

            <div className="paginacao">
              <button type="submit" className="paginacao-btn">Próximo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioBloco3Pagina3;
