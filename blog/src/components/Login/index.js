import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importe os métodos de autenticação do Firebase
import Home from '../Home/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(); // Obtenha uma instância do serviço de autenticação

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password); // Faça login usando as credenciais fornecidas
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
      setErrors(['Credenciais inválidas']);
    }
  };

  const validateForm = () => {
    const errors = [];
    if (!email) {
      errors.push('Email é obrigatório');
    }
    if (!password) {
      errors.push('Senha é obrigatória');
    }
    return errors;
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default Login;
