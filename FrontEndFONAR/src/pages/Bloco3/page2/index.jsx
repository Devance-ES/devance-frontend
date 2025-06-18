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
      <div className="etapa "><span>5</span><div className="etapa-titulo">Bloco IV</div></div>
      <div className="linha"></div>
      <div className="etapa"><span>6</span><div className="etapa-titulo">Termo de envio</div></div>
    </div>
  </div>
);

function FormularioBloco3Pagina2() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const handleNextPage = (e) => {
    e.preventDefault();
    // Validação pode ser implementada aqui
    navigate('/bloco3/page3');
  };

  return (
    <div className="pagina-fonar">
      <MenuLateral aberto={menuAberto} onToggle={() => setMenuAberto(!menuAberto)} />
      <h1 className="titulo-fonar">Formulário FONAR</h1>
      <Etapas />
      <div className="form-container">
        <form onSubmit={handleNextPage}>
          <div className="form-group">
            <label className='pergunta'>Você está vivendo algum conflito com o(a) agressor(a) em relação à guarda do(s) filho(s), visitas ou pagamento de pensão?</label>
            <div className="opcoes">
              <label><input type="radio" name="conflito-guarda" value="sim" /> Sim</label>
              <label><input type="radio" name="conflito-guarda" value="nao" /> Não</label>
              <label><input type="radio" name="conflito-guarda" value="nao-tem-filhos" /> Não tenho filhos com o(a) agressor(a)</label>
            </div>
          </div>

          <div className="form-group">
            <label className='pergunta'>Seu(s) filho(s) já presenciaram ato(s) de violência do(a) agressor(a) contra você?</label>
            <div className="opcoes">
              <label><input type="radio" name="presenciaram-violencia" value="sim" /> Sim</label>
              <label><input type="radio" name="presenciaram-violencia" value="nao" /> Não</label>
              <label><input type="radio" name="presenciaram-violencia" value="nao-se-aplica" /> Não se aplica</label>
            </div>
          </div>

          <div className="form-group">
            <label className='pergunta'>Você sofreu algum tipo de violência durante a gravidez ou nos três meses posteriores ao parto?</label>
            <div className="opcoes">
              <label><input type="radio" name="violencia-gestacao" value="sim" /> Sim</label>
              <label><input type="radio" name="violencia-gestacao" value="nao" /> Não</label>
              <label><input type="radio" name="violencia-gestacao" value="nao-se-aplica" /> Não se aplica</label>
            </div>
          </div>

          <div className="form-group">
            <label className='pergunta'>Se você está em um novo relacionamento, percebeu que as ameaças ou as agressões físicas aumentaram em razão disso?</label>
            <div className="opcoes">
              <label><input type="radio" name="relacionamento-novo" value="sim" /> Sim</label>
              <label><input type="radio" name="relacionamento-novo" value="nao" /> Não</label>
              <label><input type="radio" name="relacionamento-novo" value="nao-se-aplica" /> Não se aplica</label>
            </div>
          </div>

          <div className="paginacao">
            <button type="submit" className="paginacao-btn">Próximo</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioBloco3Pagina2;
