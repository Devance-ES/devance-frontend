import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

// Removi o componente MenuLateral completamente

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

  const [filhoComDeficiencia, setFilhoComDeficiencia] = useState('');
  const [quantidadeDeficiencia, setQuantidadeDeficiencia] = useState('');
  const [conflitoGuarda, setConflitoGuarda] = useState('');

  const [erros, setErros] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

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

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [filhoComDeficiencia, quantidadeDeficiencia, conflitoGuarda]);

  const handleDeficienciaChange = (e) => {
    const { value } = e.target;
    setFilhoComDeficiencia(value);
    if (value === 'nao') {
      setQuantidadeDeficiencia('');
    }
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulário Bloco 3 Página 4 válido!");
      navigate('/bloco3/page5');
    } else {
      console.log("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  return (
    <div className="pagina-fonar">
      {/* Removido <MenuLateral /> */}

      {/* Removido marginLeft dinâmico */}
      <div className="conteudo-principal">
        <h1 className="titulo-fonar">Formulário FONAR</h1>
        <Etapas />
        <div className="form-container">
          <form onSubmit={handleNextPage}>
            <div className="form-group">
              <label className="pergunta">Algum de seus filhos é uma pessoa portadora de deficiência?</label>
              <div className="opcoes-coluna">
                <div className="opcao-com-select">
                  <label className="label-radio">
                    <input
                      type="radio"
                      name="filho-deficiencia"
                      value="sim"
                      checked={filhoComDeficiencia === 'sim'}
                      onChange={handleDeficienciaChange}
                    />
                    Sim, quantos?
                  </label>
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
                    <input
                      type="radio"
                      name="filho-deficiencia"
                      value="nao"
                      checked={filhoComDeficiencia === 'nao'}
                      onChange={handleDeficienciaChange}
                    />
                    Não
                  </label>
                </div>
              </div>
              {erros.filhoComDeficiencia && <div className="error-message">{erros.filhoComDeficiencia}</div>}
            </div>

            <div className="form-group">
              <label className="pergunta">Você está vivendo algum conflito com o(a) agressor(a) em relação à guarda do(s) filho(s), visitas ou pagamento de pensão?</label>
              <div className="opcoes">
                <label>
                  <input
                    type="radio"
                    name="conflito-guarda"
                    value="sim"
                    checked={conflitoGuarda === 'sim'}
                    onChange={e => setConflitoGuarda(e.target.value)}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="conflito-guarda"
                    value="nao"
                    checked={conflitoGuarda === 'nao'}
                    onChange={e => setConflitoGuarda(e.target.value)}
                  />
                  Não
                </label>
                <label>
                  <input
                    type="radio"
                    name="conflito-guarda"
                    value="nao-tenho-filhos"
                    checked={conflitoGuarda === 'nao-tenho-filhos'}
                    onChange={e => setConflitoGuarda(e.target.value)}
                  />
                  Não tenho filhos com o(a) agressor(a)
                </label>
              </div>
              {erros.conflitoGuarda && <div className="error-message">{erros.conflitoGuarda}</div>}
            </div>

            <div className="paginacao">
              <Link to="/bloco3/page3" className="paginacao-btn">{'<'}</Link>
              <Link to="/bloco3/page1" className="paginacao-outro">1</Link>
              <Link to="/bloco3/page2" className="paginacao-outro">2</Link>
              <Link to="/bloco3/page3" className="paginacao-outro">3</Link>
              <span className="paginacao-atual">4</span>
              <Link
                to="/bloco3/page5"
                className={`paginacao-outro ${!isFormValid ? 'disabled-link' : ''}`}
                onClick={e => !isFormValid && e.preventDefault()}
              >
                5
              </Link>
              <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioBloco3Pagina4;
