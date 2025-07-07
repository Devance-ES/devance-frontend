import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

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

  // --- Estados para os campos do formulário ---
  const [suicidio, setSuicidio] = useState('');
  const [financeiro, setFinanceiro] = useState('');
  const [arma, setArma] = useState('');
  const [ameacouTerceiros, setAmeacouTerceiros] = useState('');
  const [especificacaoAmeaca, setEspecificacaoAmeaca] = useState([]);

  // --- Validação ---
  const [erros, setErros] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const currentErros = {};
    let valid = true;

    if (!suicidio) {
      currentErros.suicidio = 'Selecione uma opção.';
      valid = false;
    }
    if (!financeiro) {
      currentErros.financeiro = 'Selecione uma opção.';
      valid = false;
    }
    if (!arma) {
      currentErros.arma = 'Selecione uma opção.';
      valid = false;
    }
    if (!ameacouTerceiros) {
      currentErros.ameacouTerceiros = 'Selecione uma opção.';
      valid = false;
    } else if (ameacouTerceiros === 'sim' && especificacaoAmeaca.length === 0) {
      currentErros.ameacouTerceiros = 'Por favor, especifique quem foi ameaçado ou agredido.';
      valid = false;
    }

    setErros(currentErros);
    return valid;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suicidio, financeiro, arma, ameacouTerceiros, especificacaoAmeaca]);

  const handleAmeacaChange = (e) => {
    const { value } = e.target;
    setAmeacouTerceiros(value);
    if (value !== 'sim') {
      setEspecificacaoAmeaca([]);
    }
  };

  const handleEspecificacaoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEspecificacaoAmeaca(prev => [...prev, value]);
    } else {
      setEspecificacaoAmeaca(prev => prev.filter(item => item !== value));
    }
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulário Bloco 3 Página 3 válido!");
      navigate('/bloco4/page1');
    } else {
      console.log("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  return (
    <div className="pagina-fonar">
      <div className="conteudo-principal">
        <h1 className="titulo-fonar">Formulário FONAR</h1>
        <Etapas />

        <div className="form-container">
          <form onSubmit={handleNextPage}>
            <div className="form-group">
              <label className="pergunta">O(A) agressor(a) já tentou suicídio ou falou em suicidar-se?</label>
              <div className="opcoes">
                <label><input type="radio" name="suicidio" value="sim" checked={suicidio === 'sim'} onChange={e => setSuicidio(e.target.value)} /> Sim</label>
                <label><input type="radio" name="suicidio" value="nao" checked={suicidio === 'nao'} onChange={e => setSuicidio(e.target.value)} /> Não</label>
              </div>
              {erros.suicidio && <div className="error-message">{erros.suicidio}</div>}
            </div>

            <div className="form-group">
              <label className="pergunta">O(A) agressor(a) está desempregado ou tem dificuldades financeiras?</label>
              <div className="opcoes">
                <label><input type="radio" name="financeiro" value="sim" checked={financeiro === 'sim'} onChange={e => setFinanceiro(e.target.value)} /> Sim</label>
                <label><input type="radio" name="financeiro" value="nao" checked={financeiro === 'nao'} onChange={e => setFinanceiro(e.target.value)} /> Não</label>
                <label><input type="radio" name="financeiro" value="nao-sei" checked={financeiro === 'nao-sei'} onChange={e => setFinanceiro(e.target.value)} /> Não sei</label>
              </div>
              {erros.financeiro && <div className="error-message">{erros.financeiro}</div>}
            </div>

            <div className="form-group">
              <label className="pergunta">O(A) agressor(a) tem acesso a armas de fogo?</label>
              <div className="opcoes">
                <label><input type="radio" name="arma" value="sim" checked={arma === 'sim'} onChange={e => setArma(e.target.value)} /> Sim</label>
                <label><input type="radio" name="arma" value="nao" checked={arma === 'nao'} onChange={e => setArma(e.target.value)} /> Não</label>
                <label><input type="radio" name="arma" value="nao-sei" checked={arma === 'nao-sei'} onChange={e => setArma(e.target.value)} /> Não sei</label>
              </div>
              {erros.arma && <div className="error-message">{erros.arma}</div>}
            </div>

            <div className="form-group">
              <label className="pergunta">
                O(A) agressor(a) já ameaçou ou agrediu seus filhos, outros familiares, amigos, colegas de trabalho, pessoas desconhecidas ou animais de estimação?
              </label>
              <div className="opcoes">
                <label>
                  <input type="radio" name="ameacou-terceiros" value="sim" checked={ameacouTerceiros === 'sim'} onChange={handleAmeacaChange} />
                  Sim. Especifique:
                </label>

                {ameacouTerceiros === 'sim' && (
                  <div className="sub-opcoes" style={{ paddingLeft: '2rem' }}>
                    <label>
                      <input type="checkbox" value="filhos" checked={especificacaoAmeaca.includes('filhos')} onChange={handleEspecificacaoChange} />
                      filhos
                    </label>
                    <label>
                      <input type="checkbox" value="outros-familiares" checked={especificacaoAmeaca.includes('outros-familiares')} onChange={handleEspecificacaoChange} />
                      outros familiares
                    </label>
                    <label>
                      <input type="checkbox" value="outras-pessoas" checked={especificacaoAmeaca.includes('outras-pessoas')} onChange={handleEspecificacaoChange} />
                      outras pessoas
                    </label>
                    <label>
                      <input type="checkbox" value="animais" checked={especificacaoAmeaca.includes('animais')} onChange={handleEspecificacaoChange} />
                      animais
                    </label>
                  </div>
                )}

                <label>
                  <input type="radio" name="ameacou-terceiros" value="nao" checked={ameacouTerceiros === 'nao'} onChange={handleAmeacaChange} />
                  Não
                </label>
                <label>
                  <input type="radio" name="ameacou-terceiros" value="nao-sei" checked={ameacouTerceiros === 'nao-sei'} onChange={handleAmeacaChange} />
                  Não sei
                </label>
              </div>
              {erros.ameacouTerceiros && <div className="error-message">{erros.ameacouTerceiros}</div>}
            </div>

            <div className="paginacao">
              <Link to="/bloco3/page2" className="paginacao-btn">{'<'}</Link>
              <Link to="/bloco3/page1" className="paginacao-outro">1</Link>
              <Link to="/bloco3/page2" className="paginacao-outro">2</Link>
              <span className="paginacao-atual">3</span>
              <button type="submit" className="paginacao-btn" disabled={!isFormValid}>{'>'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioBloco3Pagina3;
