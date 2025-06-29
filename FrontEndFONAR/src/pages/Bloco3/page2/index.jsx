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
          <a href="#!" className="menu-item">#</a>
          <a href="#!" className="menu-item">#</a>
          <a href="#!" className="menu-item">#</a>
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

function FormularioBloco3Pagina2() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  // --- Estados para os campos do formulário ---
  const [conflitoGuarda, setConflitoGuarda] = useState('');
  const [presenciaramViolencia, setPresenciaramViolencia] = useState('');
  const [violenciaGestacao, setViolenciaGestacao] = useState('');
  const [relacionamentoNovo, setRelacionamentoNovo] = useState('');

  // --- Estados para validação ---
  const [erros, setErros] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // --- Função de validação ---
  const validateForm = () => {
    const currentErros = {};
    let valid = true;

    if (!conflitoGuarda) {
      currentErros.conflitoGuarda = 'Selecione uma opção.';
      valid = false;
    }
    if (!presenciaramViolencia) {
      currentErros.presenciaramViolencia = 'Selecione uma opção.';
      valid = false;
    }
    if (!violenciaGestacao) {
      currentErros.violenciaGestacao = 'Selecione uma opção.';
      valid = false;
    }
    if (!relacionamentoNovo) {
      currentErros.relacionamentoNovo = 'Selecione uma opção.';
      valid = false;
    }

    setErros(currentErros);
    return valid;
  };

  // --- Efeito para re-validar o formulário a cada mudança ---
  useEffect(() => {
    setIsFormValid(validateForm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conflitoGuarda, presenciaramViolencia, violenciaGestacao, relacionamentoNovo]);


  const handleNextPage = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulário Bloco 3 Página 2 válido!");
      navigate('/bloco3/page3');
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
            {/* Pergunta 1: Conflito Guarda */}
            <div className="form-group">
              <label className='pergunta'>Você está vivendo algum conflito com o(a) agressor(a) em relação à guarda do(s) filho(s), visitas ou pagamento de pensão?</label>
              <div className="opcoes">
                <label><input type="radio" name="conflito-guarda" value="sim" checked={conflitoGuarda === 'sim'} onChange={e => setConflitoGuarda(e.target.value)} /> Sim</label>
                <label><input type="radio" name="conflito-guarda" value="nao" checked={conflitoGuarda === 'nao'} onChange={e => setConflitoGuarda(e.target.value)} /> Não</label>
                <label><input type="radio" name="conflito-guarda" value="nao-tem-filhos" checked={conflitoGuarda === 'nao-tem-filhos'} onChange={e => setConflitoGuarda(e.target.value)} /> Não tenho filhos com o(a) agressor(a)</label>
              </div>
              {erros.conflitoGuarda && <div className="error-message">{erros.conflitoGuarda}</div>}
            </div>

            {/* Pergunta 2: Presenciaram Violência */}
            <div className="form-group">
              <label className='pergunta'>Seu(s) filho(s) já presenciaram ato(s) de violência do(a) agressor(a) contra você?</label>
              <div className="opcoes">
                <label><input type="radio" name="presenciaram-violencia" value="sim" checked={presenciaramViolencia === 'sim'} onChange={e => setPresenciaramViolencia(e.target.value)} /> Sim</label>
                <label><input type="radio" name="presenciaram-violencia" value="nao" checked={presenciaramViolencia === 'nao'} onChange={e => setPresenciaramViolencia(e.target.value)} /> Não</label>
                <label><input type="radio" name="presenciaram-violencia" value="nao-se-aplica" checked={presenciaramViolencia === 'nao-se-aplica'} onChange={e => setPresenciaramViolencia(e.target.value)} /> Não se aplica</label>
              </div>
              {erros.presenciaramViolencia && <div className="error-message">{erros.presenciaramViolencia}</div>}
            </div>

            {/* Pergunta 3: Violência na Gestação */}
            <div className="form-group">
              <label className='pergunta'>Você sofreu algum tipo de violência durante a gravidez ou nos três meses posteriores ao parto?</label>
              <div className="opcoes">
                <label><input type="radio" name="violencia-gestacao" value="sim" checked={violenciaGestacao === 'sim'} onChange={e => setViolenciaGestacao(e.target.value)} /> Sim</label>
                <label><input type="radio" name="violencia-gestacao" value="nao" checked={violenciaGestacao === 'nao'} onChange={e => setViolenciaGestacao(e.target.value)} /> Não</label>
                <label><input type="radio" name="violencia-gestacao" value="nao-se-aplica" checked={violenciaGestacao === 'nao-se-aplica'} onChange={e => setViolenciaGestacao(e.target.value)} /> Não se aplica</label>
              </div>
              {erros.violenciaGestacao && <div className="error-message">{erros.violenciaGestacao}</div>}
            </div>

            {/* Pergunta 4: Novo Relacionamento */}
            <div className="form-group">
              <label className='pergunta'>Se você está em um novo relacionamento, percebeu que as ameaças ou as agressões físicas aumentaram em razão disso?</label>
              <div className="opcoes">
                <label><input type="radio" name="relacionamento-novo" value="sim" checked={relacionamentoNovo === 'sim'} onChange={e => setRelacionamentoNovo(e.target.value)} /> Sim</label>
                <label><input type="radio" name="relacionamento-novo" value="nao" checked={relacionamentoNovo === 'nao'} onChange={e => setRelacionamentoNovo(e.target.value)} /> Não</label>
                <label><input type="radio" name="relacionamento-novo" value="nao-se-aplica" checked={relacionamentoNovo === 'nao-se-aplica'} onChange={e => setRelacionamentoNovo(e.target.value)} /> Não se aplica</label>
              </div>
              {erros.relacionamentoNovo && <div className="error-message">{erros.relacionamentoNovo}</div>}
            </div>

            {/* --- Navegação Paginada --- */}
            <div className="paginacao">
              <Link to="/bloco3/page1" className="paginacao-btn">{'<'}</Link>
              <Link to="/bloco3/page1" className={`paginacao-outro`}>1</Link>
              <span className="paginacao-atual">2</span>
              <Link to="/bloco3/page3" className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`} onClick={(e) => !isFormValid && e.preventDefault()}>3</Link>
              <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioBloco3Pagina2;