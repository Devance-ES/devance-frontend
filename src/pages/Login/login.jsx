import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi'; // Importe os ícones necessários

// Certifique-se de que o caminho para o seu arquivo CSS está correto
import './style.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticação aqui
        console.log('E-mail:', email);
        console.log('Senha:', password);
        console.log('Manter conectado:', rememberMe);

        // Exemplo: Redirecionar após o login bem-sucedido
        // navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className="login-form-section">
                <h2 className="login-title">Entre na Plataforma FONAR</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite o seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Digite a sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </span>
                        </div>
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Manter-me conectado
                        </label>
                        <a href="/forgot-password" className="forgot-password-link">Esqueci minha senha</a>
                    </div>

                    <button type="submit" className="login-button">Entrar</button>
                </form>
            </div>

            <div className="login-branding-section">
                <button className="back-button" onClick={() => navigate('/')}>
                    <FiArrowLeft size={24} color="#fff" />
                </button>
                <h1 className="branding-title">FONAR</h1>
                <p className="branding-subtitle">Login</p>
            </div>
        </div>
    );
};

export default Login;