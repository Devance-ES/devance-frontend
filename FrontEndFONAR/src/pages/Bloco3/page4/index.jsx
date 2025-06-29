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


function FormularioBloco3Pagina4() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  // --- Estados para os campos do formulário ---
  const [filhoComDeficiencia, setFilhoComDeficiencia] = useState('');
  const [quantidadeDeficiencia, setQuantidadeDeficiencia] = useState('');
  const [conflitoGuarda, setConflitoGuarda] = useState('');

  // --- Estados para validação ---
  const [erros, setErros] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // --- Função de validação ---
  const validateForm = () => {
    const currentErros = {};
    let valid = true;

    if (!filhoComDeficiencia) {
      currentErros.filhoComDeficiencia = 'Selecione uma opção.';
      valid = false;
    } else if (filhoComDeficiencia === 'sim' && !quantidadeDeficiencia) {
      currentErros.filhoComDeficiencia = 'Por favor, selecione a quantidade.';
      valid = false;
    }

    if (!conflitoGuarda) {
      currentErros.conflitoGuarda = 'Selecione uma opção.';
      valid = false;
    }

    setErros(currentErros);
    return valid;
  };

  // --- Efeito para re-validar o formulário a cada mudança ---
  useEffect(() => {
    setIsFormValid(validateForm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filhoComDeficiencia, quantidadeDeficiencia, conflitoGuarda]);

  // Handler para limpar a quantidade se a resposta principal mudar
  const handleDeficienciaChange = (e) => {
    const { value } = e.target;
    setFilhoComDeficiencia(value);
    if (value === 'nao') {
      setQuantidadeDeficiencia(''); // Limpa a quantidade se a resposta for "Não"
    }
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulário Bloco 3 Página 4 válido!");
      navigate('/bloco4/page1');
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
            {/* Pergunta 1: Filho com deficiência */}
            <div className="form-group">
              <label className="pergunta">Algum de seus filhos é uma pessoa portadora de deficiência?</label>
              <div className="opcoes-coluna">
                <div className="opcao-com-select">
                  <label className="label-radio">
                    <input type="radio" name="filho-deficiencia" value="sim" checked={filhoComDeficiencia === 'sim'} onChange={handleDeficienciaChange} />
                    Sim, quantos?
                  </label>
                  {/* ================================== */}
                  {/* CAMPO ATUALIZADO PARA <select>     */}
                  {/* ================================== */}
                  <select
                    value={quantidadeDeficiencia}
                    onChange={e => setQuantidadeDeficiencia(e.target.value)}
                    disabled={filhoComDeficiencia !== 'sim'}
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
                    <input type="radio" name="filho-deficiencia" value="nao" checked={filhoComDeficiencia === 'nao'} onChange={handleDeficienciaChange} />
                    Não
                  </label>
                </div>
              </div>
              {erros.filhoComDeficiencia && <div className="error-message">{erros.filhoComDeficiencia}</div>}
            </div>

            {/* Pergunta 2: Conflito de guarda */}
            <div className="form-group">
              <label className="pergunta">Você está vivendo algum conflito com o(a) agressor(a) em relação à guarda do(s) filho(s), visitas ou pagamento de pensão?</label>
              <div className="opcoes">
                <label>
                  <input type="radio" name="conflito-guarda" value="sim" checked={conflitoGuarda === 'sim'} onChange={e => setConflitoGuarda(e.target.value)} />
                  Sim
                </label>
                <label>
                  <input type="radio" name="conflito-guarda" value="nao" checked={conflitoGuarda === 'nao'} onChange={e => setConflitoGuarda(e.target.value)} />
                  Não
                </label>
                <label>
                  <input type="radio" name="conflito-guarda" value="nao-tenho-filhos" checked={conflitoGuarda === 'nao-tenho-filhos'} onChange={e => setConflitoGuarda(e.target.value)} />
                  Não tenho filhos com o(a) agressor(a)
                </label>
              </div>
              {erros.conflitoGuarda && <div className="error-message">{erros.conflitoGuarda}</div>}
            </div>

            {/* --- Navegação Paginada --- */}
            <div className="paginacao">
              <Link to="/bloco3/page3" className="paginacao-btn">{'<'}</Link>
              <Link to="/bloco3/page1" className="paginacao-outro">1</Link>
              <Link to="/bloco3/page2" className="paginacao-outro">2</Link>
              <Link to="/bloco3/page3" className="paginacao-outro">3</Link>
              <span className="paginacao-atual">4</span>
              <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioBloco3Pagina4;